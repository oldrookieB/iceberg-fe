import { useGithubAuthStore, useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

// 테스트용 로그인 처리
const useTestLogin = () => {
  const githubAuthStore = useGithubAuthStore();
  const authStore = useAuthStore();
  const navigate = useNavigate();

  const testLogin = () => {
    authStore.setLogin();
    authStore.setUserName("test");
    githubAuthStore.setAccessToken("");
    githubAuthStore.setUserName("leey00nsu");
    githubAuthStore.setLogin();
    navigate("/profile", { replace: true });
  };

  return testLogin;
};

export default useTestLogin;
