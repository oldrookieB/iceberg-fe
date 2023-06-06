import React from "react";
import useLogout from "../hooks/useLogout";
import TechButton from "../components/ui/TechButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";
import Header from "../components/ui/Header";
import * as DUMMY from "../constants/dummyProject";

const ProjectDetailPage = () => {
  const authStore = useAuthStore();

  // 로그인 상태가 아닐 시 로그인 페이지로 이동
  if (!authStore.isLogin) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <Header />
      <section className="flex flex-col items-center w-1/2 gap-4">
        <h1 className="text-6xl font-bold ">{DUMMY.PROJECT_NAME}</h1>
        <div className="flex gap-4">
          <p>STAR {DUMMY.STAR}</p>
          <p>FORK {DUMMY.FORK}</p>
          <p>WATCHING {DUMMY.WATCHING}</p>
        </div>
        <div className="flex gap-2">
          {DUMMY.TECHSTACK.map((techStack) => (
            <TechButton key={techStack} title={techStack} isSelected />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="/img/user.png" />
            </div>
          </div>
          <p>{DUMMY.USERNAME}</p>
          <button className="btn">Github</button>
        </div>
        <div className="flex flex-col w-full markdown-body">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            children={DUMMY.README}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
