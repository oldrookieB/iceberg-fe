const {
  VITE_GOOGLE_CLIENT_ID,
  VITE_GOOGLE_REDIRECT_URI,
  VITE_GITHUB_REDIRECT_URI,
  VITE_GITHUB_CLIENT_ID,
} = import.meta.env;

export const GOOGLE_OAUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${VITE_GOOGLE_CLIENT_ID}&
response_type=token&
redirect_uri=${VITE_GOOGLE_REDIRECT_URI}&
scope=https://www.googleapis.com/auth/userinfo.email`;

export const GTIHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${VITE_GITHUB_CLIENT_ID}&
redirect_uri=${VITE_GITHUB_REDIRECT_URI}`;
