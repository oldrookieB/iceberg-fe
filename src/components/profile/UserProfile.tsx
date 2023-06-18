import { useAuthStore, useGithubAuthStore } from "../../store/auth";
import { GTIHUB_OAUTH_URL } from "../../constants/authUrl";
import DisabledInput from "../ui/DisabledInput";

const UserProfile = () => {
  const authStore = useAuthStore();
  const githubAuthStore = useGithubAuthStore();

  const githubOAuthHandler = () => {
    window.location.assign(GTIHUB_OAUTH_URL);
  };

  return (
    <section className="flex flex-col w-full  gap-4">
      <DisabledInput label="아이디" defaultValue={authStore.userName} />

      {githubAuthStore.isLogin ? (
        <div className="flex flex-col w-full">
          <label className="label">
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
    </section>
  );
};

export default UserProfile;
