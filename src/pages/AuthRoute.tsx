import { useAuthStore } from "../store/auth";
import { Navigate, Outlet } from "react-router-dom";

interface AuthRouteProps {
  auth?: boolean; // 로그인 관련 페이지일 경우 auth가 True 입니다.
}

const AuthRoute = (props: AuthRouteProps) => {
  const { isLogin } = useAuthStore();

  // 권한이 필요하지만 로그인 되어 있지 않은 경우 로그인으로 리디렉션
  if (!isLogin && !props.auth) {
    return <Navigate to="/"></Navigate>;
  }

  // 로그인 되어 있는데 로그인 관련 페이지로 접근한 경우 프로필로 리디렉션
  if (isLogin && props.auth) {
    return <Navigate to="/profile"></Navigate>;
  }

  return <Outlet />;
};

export default AuthRoute;
