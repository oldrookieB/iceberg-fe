import { useEffect } from "react";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthRedirect = () => {
  const navigate = useNavigate();
  const { setLogin, setAccessToken, setUserEmail } = useAuthStore();

  useEffect(() => {
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
    getUserInfo();
  }, []);
  return <div></div>;
};

export default AuthRedirect;
