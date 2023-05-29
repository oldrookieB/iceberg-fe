import React from "react";
import useLogout from "../hooks/useLogout";
import TechButton from "../components/ui/TechButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";

const dummyReadme = `# Iceberg Project
### SW프로젝트 올드루키B팀
> iceberg - 프로젝트 아카이빙과 목업

**주요 기능** <br/>
\`Github OAuth를 이용한 인증 제공\` <br/>
\`연결된 github 저장소와 연계되는 프로젝트 정보 저장\` <br/>
\`저장된 프로젝트 갤러리 뷰\` <br/>

**팀 구성** <br/>
유경수(Mentor) <br/>
이윤수(Team Leader) <br/>
유진(Mentee) <br/>
김지윤(Mentee) <br/>
황민(Mentee) <br/>


[노션](https://www.notion.so/leeyoonsu/SW-B-c19f7a4d63ef4aeb8a1587fefd445366?pvs=4)

## Frontend
- 이윤수
- 유진
- 황민

## Backend
- 김지윤

**Tech**
- Nest.js
- Passport & JWT
`;
const ProjectDetailPage = () => {
  const logout = useLogout();

  const authStore = useAuthStore();

  // 로그인 상태가 아닐 시 로그인 페이지로 이동
  if (!authStore.isLogin) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="flex flex-col items-center w-screen min-h-screen p-10">
      <header className="flex justify-between w-full">
        <p>Iceberg</p>
        <button onClick={logout} className="btn">
          로그아웃
        </button>
      </header>
      <section className="flex flex-col items-center w-1/2 gap-4">
        <h1 className="text-6xl font-bold ">프로젝트 이름</h1>
        <div className="flex gap-4">
          <p>STAR 0</p>
          <p>FORK 0</p>
          <p>WATCHING 0</p>
        </div>
        <div className="flex gap-2">
          {["react", "js", "vue"].map((techStack) => (
            <TechButton key={techStack} title={techStack} selected />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="/img/user.png" />
            </div>
          </div>
          <p>유저네임</p>
          <button className="btn">Github</button>
        </div>
        <div className="flex flex-col w-full markdown-body">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            children={dummyReadme}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
