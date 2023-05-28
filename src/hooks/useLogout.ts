import axios from "axios";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const authStore = useAuthStore();
  const navigate = useNavigate();

  // 구글로 로그인하였을 시 로그아웃 처리
  const googleLogout = async () => {
    await axios
      .post(
        `https://oauth2.googleapis.com/revoke?token=${authStore.accessToken}`
      )
      .then(() => {
        authStore.setLoginType?.("");
        authStore.setAccessToken("");
        authStore.setUserName("");
        authStore.setLogout();
        navigate("/");
      })
      .catch(() => {
        alert("로그아웃에 실패했습니다.");
      });
  };

  // 깃허브로 로그인하였을 시 로그아웃 처리
  const githubLogout = () => {
    authStore.setLoginType?.("");
    authStore.setAccessToken("");
    authStore.setUserName("");
    authStore.setLogout();
    navigate("/");
  };

  if (authStore.loginType === "google") return googleLogout;
  else if (authStore.loginType === "github") return githubLogout;
};

export default useLogout;
