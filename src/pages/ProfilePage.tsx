import { useAuthStore, useGithubAuthStore } from "../store/auth";
import { Navigate, Link } from "react-router-dom";
import Header from "../components/ui/Header";
import UserProfile from "../components/profile/UserProfile";
import ProfileButton from "../components/profile/ProfileButton";

const ProfilePage = () => {
  const authStore = useAuthStore();


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
