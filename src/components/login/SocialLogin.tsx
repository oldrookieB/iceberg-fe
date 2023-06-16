import { GOOGLE_OAUTH_URL, GTIHUB_OAUTH_URL } from "../../constants/authUrl";

const SocialLogin = () => {
  const googleOAuthHandler = () => {
    window.location.assign(GOOGLE_OAUTH_URL);
  };

  const githubOAuthHandler = () => {
    window.location.assign(GTIHUB_OAUTH_URL);
  };

  return (
    <section className="flex flex-col w-80 gap-4">
      <span>소셜 계정으로 로그인</span>
      <div className="flex justify-between">
        <button
          onClick={githubOAuthHandler}
          className="bg-white border-gray-200 btn btn-lg btn-circle hover:border-gray-200 hover:bg-white "
        >
          <img className="w-10 h-10 " src="/img/github_icon.png" />
        </button>
        <button
          onClick={googleOAuthHandler}
          className="bg-white border-gray-200 btn btn-lg btn-circle hover:border-gray-200 hover:bg-white"
        >
          <img src="/img/google_icon.png" />
        </button>
        <button className="bg-white border-0 btn btn-lg btn-circle hover:bg-white">
          <img src="/img/naver_icon.png" />
        </button>
      </div>
    </section>
  );
};

export default SocialLogin;
