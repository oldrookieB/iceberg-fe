import { useAuthStore, useGithubAuthStore } from "../store/auth";
import { Navigate, Link } from "react-router-dom";
import Header from "../components/ui/Header";
import UserProfile from "../components/profile/UserProfile";
import ProfileButton from "../components/profile/ProfileButton";

const ProfilePage = () => {
  const authStore = useAuthStore();

  // 로그인 상태가 아닐 시 로그인 페이지로 이동
  if (!authStore.isLogin) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <Header />

      <section className="flex grow flex-col w-80 items-center justify-center gap-4">
        {/* 유저 정보 */}
        <UserProfile />
        {/* 유저 관련 버튼 */}
        <ProfileButton />
      </section>
    </div>
  );
};

export default ProfilePage;
