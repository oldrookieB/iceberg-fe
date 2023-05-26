import axios from "axios";
import { useAuthStore } from "../store/auth";

const useLogout = () => {
  const { accessToken, setAccessToken, setUserEmail, setLogout } =
    useAuthStore();

  const logout = async () => {
    await axios
      .post(`https://oauth2.googleapis.com/revoke?token=${accessToken}`)
      .then(() => {
        setAccessToken("");
        setUserEmail("");
        setLogout();
        window.location.assign("http://127.0.0.1:5173");
      })
      .catch(() => {
        alert("로그아웃에 실패했습니다.");
      });
  };

  return logout;
};

export default useLogout;
