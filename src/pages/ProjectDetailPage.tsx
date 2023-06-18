import TechButton from "../components/ui/TechButton";
import Layout from "../components/ui/Layout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";
import Header from "../components/ui/Header";
import * as DUMMY from "../constants/dummyProject";
import { MOCKPROJECTS } from "../mocks/projects.mock";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const projectId = Number(useParams().id);

  const selectedProject = MOCKPROJECTS.filter(
    (mockproject) => mockproject.id === projectId
  )[0];

  console.log(selectedProject);
  return (
    <Layout>
      <Header />
      <section className="flex flex-col items-center  gap-4">
        <h1 className="text-6xl font-bold ">{selectedProject.title}</h1>
        <div className="flex gap-4">
          <p>STAR {DUMMY.STAR}</p>
          <p>FORK {DUMMY.FORK}</p>
          <p>WATCHING {DUMMY.WATCHING}</p>
        </div>
        <div className="flex gap-2">
          {selectedProject.techStacks.map((techStack) => (
            <TechButton key={techStack} title={techStack} isSelected />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="/img/user.png" />
            </div>
          </div>
          <p>{selectedProject.userName}</p>
          <button className="btn">Github</button>
        </div>
        <div className="flex flex-col w-full min-w-[50vw] markdown-body">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            children={DUMMY.README}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetailPage;
