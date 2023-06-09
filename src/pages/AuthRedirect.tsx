import { useEffect } from "react";
import { useAuthStore, useGithubAuthStore } from "../store/auth";
import { useNavigate, useParams } from "react-router-dom";
import {
  getGithubOauthToken,
  getGithubUserInfo,
  getGoogleOauthToken,
  getGoogleUserInfo,
} from "../api/oauth";

const AuthRedirect = () => {
  // OAuth 로그인 성공 후 콜백 url로 리다이렉트 될 때 어떤 OAuth인지 알려줍니다.
  const param = useParams().provider;
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const githubAuthStore = useGithubAuthStore();

  // 구글 OAuth 로그인 성공 시 AccessToken 및 유저 정보를 가져옵니다.
  const googleRedirect = async () => {
    const url = new URL(window.location.href);
    // url 파라미터값 추출
    const param = url.searchParams;
    if (param) {
      // 토큰만 떼어주면된다.
      const code = param.get("code");

      let accessToken = "";

      try {
        const response = await getGoogleOauthToken(code);
        accessToken = response.data.access_token;
      } catch (e) {
        console.log(e);
      }

      try {
        const response = await getGoogleUserInfo(accessToken);

        const userName = response.data.email;
        authStore.setAccessToken(accessToken);
        authStore.setLoginType?.("google");
        authStore.setUserName(userName);
        authStore.setLogin();
        navigate("/main", { replace: true });
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate("/", { replace: true });
    }
  };

  // 구글 OAuth 로그인 성공 시 AccessToken 및 유저 정보를 가져옵니다.
  const githubRedirect = async () => {
    const url = new URL(window.location.href);
    // url 파라미터값 추출
    const param = url.searchParams;

    if (param) {
      //  파라미터 중 code에 accessToken을 받기 위한 code 값이 들어있습니다.
      const code = param.get("code");
      let accessToken = "";

      //  첫 번째 요청을 통해 code를 AcessToken으로 바꿉니다.
      try {
        const response = await getGithubOauthToken(code);
        accessToken = response.data.access_token;
      } catch (e) {
        console.log(e);
      }

      // 얻어낸 AccessToken을 이용해 github user의 정보를 가져옵니다.
      try {
        const response = await getGithubUserInfo(accessToken);

        const userName = response.data.login;
        const userImage = response.data.avatar_url;

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
        navigate("/main", { replace: true });
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    console.log(param);

    // params에 어떤 인증에서 redirect 되었는지 구분합니다.
    if (param === "google") {
      googleRedirect();
    } else if (param === "github") {
      githubRedirect();
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  return <></>;
};

export default AuthRedirect;
