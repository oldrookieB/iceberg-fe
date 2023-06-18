import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import UserProfile from "../components/profile/UserProfile";
import ProfileButton from "../components/profile/ProfileButton";

const ProfilePage = () => {
  return (
    <Layout>
      <Header />

      <section className="flex h-full flex-col w-80 justify-center gap-4">
        <div className="flex justify-center w-full ">
          <img src="/img/iceberg_logo.png" />
        </div>
        {/* 유저 정보 */}
        <UserProfile />
        {/* 유저 관련 버튼 */}
        <ProfileButton />
      </section>
    </Layout>
  );
};

export default ProfilePage;
