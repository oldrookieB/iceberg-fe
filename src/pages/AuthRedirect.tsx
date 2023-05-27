import { useEffect } from "react";
import { useAuthStore } from "../store/auth";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const {
  VITE_GITHUB_CLIENT_ID,
  VITE_GITHUB_REDIRECT_URI,
  VITE_GITHUB_CLIENT_SECRET,
} = import.meta.env;

const github_OAuth_url = `https://github.com/login/oauth/authorize?client_id=${VITE_GITHUB_CLIENT_ID}&
redirect_uri=${VITE_GITHUB_REDIRECT_URI}`;

const AuthRedirect = () => {
  const param = useParams().provider; // OAuth 로그인 성공 후 콜백 url로 리다이렉트 될 때 어떤 OAuth인지 알려줍니다.
  const navigate = useNavigate();
  const { setLogin, setAccessToken, setUserEmail } = useAuthStore();

  const getUserInfo = async () => {
    const url = new URL(window.location.href);
    //? hash를 떼어주고
    const hash = url.hash;
    if (hash) {
      //? 토큰만 떼어주면된다.
      const accessToken = hash.split("=")[1].split("&")[0];

      //? 토큰을 이용한 api 요청.
      await axios
        .get(
          "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
            accessToken,
          {
            headers: {
              authorization: `token ${accessToken}`,
              accept: "application/json",
            },
          }
        )
        .then((data) => {
          const userEmail = data.data.email;
          setAccessToken(accessToken);
          setUserEmail(userEmail);
          setLogin();
          navigate("/profile");
        })
        .catch((e) => console.log(e));
    }
  };

  const getGithubAccessToken = async () => {
    const url = new URL(window.location.href);
    // url 파라미터값 추출
    const param = url.searchParams;

    if (param) {
      //  파라미터 중 code에 accessToken을 받기 위한 code 값이 들어있다.
      const code = param.get("code");
      console.log(code);

      await axios
        .post(
          "/login/oauth/access_token",
          {
            client_id: VITE_GITHUB_CLIENT_ID,
            client_secret: VITE_GITHUB_CLIENT_SECRET,
            code: code,
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((data) => {
          console.log(data);
          // const userEmail = data.data.email;
          // setAccessToken(accessToken);
          // setUserEmail(userEmail);
          // setLogin();
          // navigate("/profile");
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    console.log(param);

    if (param === "google") {
      getUserInfo();
    } else if (param === "github") {
      getGithubAccessToken();
    }
  }, []);
  return <div></div>;
};

export default AuthRedirect;
