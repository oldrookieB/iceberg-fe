import { useAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Input from "../components/UI/Input";
import { useState } from "react";

const ProfilePage = () => {
  const { userEmail, isLogin } = useAuthStore();
  const [isLinked, setIsLinked] = useState(false);
  const logout = useLogout();

  // 로그인 상태가 아닐 시 로그인 페이지로 이동
  if (!isLogin) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div className="flex flex-col items-center w-screen min-h-screen ">
      <header className="w-full flex justify-between">
        <p>Iceberg</p>
        <button onClick={logout} className="btn">
          로그아웃
        </button>
      </header>

      <section className="flex grow flex-col w-full h-full items-center justify-center  gap-4">
        <form id="loginForm" className="flex flex-col items-center gap-4 w-80">
          <Input defaultValue={userEmail} label="이메일" type="text" required />
          {isLinked ? (
            <div className="flex flex-col w-full">
              <label htmlFor="github" className="label">
                <span className="label-text">깃허브 계정</span>
              </label>
              <div className="flex items-center gap-4">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src="/img/user.png" />
                  </div>
                </div>
                <p>github email</p>
              </div>
            </div>
          ) : (
            <div className="btn btn-success w-80">Github 아이디 연동하기</div>
          )}
        </form>
        <button className="btn btn-ghost w-80">내 프로젝트 보기</button>
      </section>
    </div>
  );
};

export default ProfilePage;
