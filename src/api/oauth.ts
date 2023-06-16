import axios from "axios";

const {
  VITE_GOOGLE_CLIENT_ID,
  VITE_GOOGLE_CLIENT_SECRET,
  VITE_GOOGLE_REDIRECT_URI,
  VITE_GITHUB_CLIENT_ID,
  VITE_GITHUB_CLIENT_SECRET,
} = import.meta.env;

// code를 입력받아 API 호출 후 응답으로 액세스 토큰을 반환합니다.
export const getGoogleOauthToken = async (code: string | null) => {
  const response = await axios.post("https://oauth2.googleapis.com/token", {
    client_id: VITE_GOOGLE_CLIENT_ID,
    client_secret: VITE_GOOGLE_CLIENT_SECRET,
    code: code,
    grant_type: "authorization_code",
    redirect_uri: VITE_GOOGLE_REDIRECT_URI,
  });

  return response;
};

// 액세스토큰을 입력받아 API 호출 후 응답으로 유저 정보를 반환합니다.
export const getGoogleUserInfo = async (accessToken: string) => {
  const response = await axios.get(
    "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + accessToken,
    {
      headers: {
        authorization: `token ${accessToken}`,
        accept: "application/json",
      },
    }
  );

  return response;
};

// code를 입력받아 API 호출 후 응답으로 액세스 토큰을 반환합니다.
export const getGithubOauthToken = async (code: string | null) => {
  const response = await axios.post(
    "/login/oauth/access_token",
    {
      client_id: VITE_GITHUB_CLIENT_ID,
      client_secret: VITE_GITHUB_CLIENT_SECRET,
      code: code,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return response;
};

// 액세스토큰을 입력받아 API 호출 후 응답으로 유저 정보를 반환합니다.
export const getGithubUserInfo = async (accessToken: string) => {
  const response = await axios.get("https://api.github.com/user", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
