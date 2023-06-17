import { useAuthStore, useGithubAuthStore } from "../store/auth";
import { Navigate, Link } from "react-router-dom";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import UserProfile from "../components/profile/UserProfile";
import ProfileButton from "../components/profile/ProfileButton";

const ProfilePage = () => {
  const authStore = useAuthStore();

  return (
    <Layout>
      <Header />

      <section className="flex grow flex-col w-80 justify-center gap-4">
        {/* 유저 정보 */}
        <UserProfile />
        {/* 유저 관련 버튼 */}
        <ProfileButton />
      </section>
    </Layout>
  );
};

export default ProfilePage;
