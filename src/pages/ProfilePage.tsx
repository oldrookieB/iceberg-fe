import { useAuthStore, useGithubAuthStore } from "../store/auth";
import { Navigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Input from "../components/ui/Input";
import { useState } from "react";
import Header from "../components/ui/Header";
import { GTIHUB_OAUTH_URL } from "../constants/authUrl";

const ProfilePage = () => {
  const authStore = useAuthStore();
  const githubAuthStore = useGithubAuthStore();
  const [isLinked, setIsLinked] = useState(false);
  const logout = useLogout();

  // 로그인 상태가 아닐 시 로그인 페이지로 이동
  if (!authStore.isLogin) {
    return <Navigate to="/"></Navigate>;
  }

  const githubOAuthHandler = () => {
    window.location.assign(GTIHUB_OAUTH_URL);
  };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <Header />

      <section className="flex grow flex-col w-full h-full items-center justify-center  gap-4">
        <form id="loginForm" className="flex flex-col items-center gap-4 w-80">
          <Input
            defaultValue={authStore.userName}
            label="아이디"
            type="text"
            required
          />
          {githubAuthStore.isLogin ? (
            <div className="flex flex-col w-full">
              <label htmlFor="github" className="label">
                <span className="label-text">깃허브 계정</span>
              </label>
              <div className="flex items-center gap-4">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src={githubAuthStore.userImage} />
                  </div>
                </div>
                <p>{githubAuthStore.userName}</p>
              </div>
            </div>
          ) : (
            <div onClick={githubOAuthHandler} className="btn btn-success w-80">
              Github 아이디 연동하기
            </div>
          )}
        </form>
        {githubAuthStore.isLogin && (
          <>
            <Link
              to="/addproject"
              className="btn hover:btn-ghost btn-outline w-80"
            >
              프로젝트 등록
            </Link>
            <button className="btn hover:btn-ghost btn-outline w-80">
              내 프로젝트 보기
            </button>
          </>
        )}
        <button className="btn hover:btn-ghost btn-outline w-80">
          좋아요 한 프로젝트 보기
        </button>
      </section>
    </div>
  );
};

export default ProfilePage;
