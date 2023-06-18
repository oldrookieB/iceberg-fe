import { useAuthStore, useGithubAuthStore } from "../../store/auth";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  const githubAuthStore = useGithubAuthStore();
  return (
    <section className="flex flex-col w-full gap-4">
      {githubAuthStore.isLogin && (
        <>
          <Link
            to="/addproject"
            className="btn hover:btn-ghost btn-outline w-full"
          >
            프로젝트 등록
          </Link>

          <Link
            to="/myproject"
            className="btn hover:btn-ghost btn-outline w-full"
          >
            내 프로젝트 보기
          </Link>
        </>
      )}
      <button className="btn hover:btn-ghost btn-outline w-full">
        좋아요 한 프로젝트 보기
      </button>
    </section>
  );
};

export default ProfileButton;
