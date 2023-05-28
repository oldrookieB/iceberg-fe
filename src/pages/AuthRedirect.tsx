import { useEffect } from "react";
import { useAuthStore, useGithubAuthStore } from "../store/auth";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const { VITE_GITHUB_CLIENT_ID, VITE_GITHUB_CLIENT_SECRET } = import.meta.env;

const AuthRedirect = () => {
  const param = useParams().provider; // OAuth 로그인 성공 후 콜백 url로 리다이렉트 될 때 어떤 OAuth인지 알려줍니다.
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const githubAuthStore = useGithubAuthStore();

  // 구글 OAuth 로그인 성공 시 AccessToken 및 유저 정보를 가져옵니다.
  const getGoogleUserInfo = async () => {
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
          const userName = data.data.email;
          authStore.setAccessToken(accessToken);
          authStore.setLoginType?.("google");
          authStore.setUserName(userName);
          authStore.setLogin();
          navigate("/profile");
        })
        .catch((e) => console.log(e));
    }
  };

  // 구글 OAuth 로그인 성공 시 AccessToken 및 유저 정보를 가져옵니다.
  const getGithubUserInfo = async () => {
    const url = new URL(window.location.href);
    // url 파라미터값 추출
    const param = url.searchParams;

    if (param) {
      //  파라미터 중 code에 accessToken을 받기 위한 code 값이 들어있습니다.
      const code = param.get("code");
      let accessToken = "";

      //  첫 번째 요청을 통해 code를 AcessToke으로 바꿉니다.
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
          accessToken = data.data.access_token;
        })
        .catch((e) => console.log(e));

      // 얻어낸 AccessToken을 이용해 github user의 정보를 가져옵니다.
      await axios
        .get("https://api.github.com/user", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((data) => {
          console.log(data);
          const userName = data.data.login;
          const userImage = data.data.avatar_url;

          // github OAuth로 로그인 시 , authStore 데이터에 저장합니다.
          // 만약 , 이미 다른 방식으로 로그인 되어있다면 건너뜁니다.
          if (!authStore.isLogin) {
            authStore.setAccessToken(accessToken);
            authStore.setLoginType?.("github");
            authStore.setUserName(userName);
            authStore.setLogin();
          }

          // githubAuthStore의 인증 정보에 저장합니다.
          githubAuthStore.setAccessToken(accessToken);
          githubAuthStore.setUserName(userName);
          githubAuthStore.setLogin();
          githubAuthStore.setUserImage?.(userImage);
          navigate("/profile");
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    console.log(param);

    if (param === "google") {
      getGoogleUserInfo();
    } else if (param === "github") {
      getGithubUserInfo();
    }
  }, []);
  return <div></div>;
};

export default AuthRedirect;
