import React, { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  useEffect(() => {
    const getUserInfo = async () => {
      const url = new URL(window.location.href);
      //? hash를 떼어주고
      const hash = url.hash;
      if (hash) {
        //? 토큰만 떼어주면된다.
        const accessToken = hash.split("=")[1].split("&")[0];
        setAuthToken(accessToken);
        //? 토큰을 이용한 api 요청.
        await axios
          .get(
            "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
              accessToken,
            {
              headers: {
                authorization: `token ${accessToken}`,
                accept: "application/json",
              },
            }
          )
          .then((data) => {
            console.log(data);
          })
          .catch((e) => console.log("oAuth token expired"));
      }
    };
    getUserInfo();
  }, []);

  // 로그아웃
  const logoutHandler = async () => {
    await axios
      .post(`https://oauth2.googleapis.com/revoke?token=${authToken}`)
      .then(() => {
        window.location.assign("http://127.0.0.1:5173");
      })
      .catch(() => {
        alert("로그아웃에 실패했습니다.");
      });
  };

  return (
    <div>
      <div>{authToken}</div>
      <button onClick={logoutHandler} className="btn">
        로그아웃
      </button>
    </div>
  );
};

export default MainPage;
