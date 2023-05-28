import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Base64 } from "js-base64";
import ProjectCard from "../components/ProjectCard";
import { useGithubAuthStore } from "../store/auth";
import useLogout from "../hooks/useLogout";

const AddProjectPage = () => {
  const logout = useLogout();
  const [readme, setReadme] = useState("");
  // TODO: 가져온 레포지토리 정보 중 사용할 데이터 정해지면 타입 설정하기
  const [repositoryDatas, setRepositoryDatas] = useState<any>([]);
  const githubAuthStore = useGithubAuthStore();

  const getRepositoryData = async () => {
    const data = await axios.get(
      `https://api.github.com/users/${githubAuthStore.userName}/repos`
    );

    console.log(data);
    setRepositoryDatas(data.data);
  };
  const getReadMe = async () => {
    const data = await axios.get(
      "https://api.github.com/repos/leey00nsu/TakingMeal/readme"
    );

    // readme 데이터는 base64로 인코딩 되어있으므로 , 디코딩해줍니다.
    setReadme(Base64.decode(data.data.content));
  };
  useEffect(() => {
    getRepositoryData();
  }, []);

  // return (
  //   <div className="markdown-body">
  //     <ReactMarkdown children={readme} remarkPlugins={[remarkGfm]} />
  //   </div>
  // );

  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <header className="w-full flex justify-between">
        <p>Iceberg</p>
        <button onClick={logout} className="btn">
          로그아웃
        </button>
      </header>
      <button className="btn btn-success">다음 단계로</button>
      <section className="flex justify-center w-full max-w-[50%] sm:max-w-md  md:max-w-lg lg:max-w-4xl xl:max-w-7xl p-6">
        <div className="flex flex-col">
          <label htmlFor="some" className="label">
            <span className="label-text">추가할 프로젝트 선택</span>
          </label>
          <div className=" w-full flex-wrap flex gap-6 xl:justify-start justify-between">
            {repositoryDatas.map((repositoryData: any, index: number) => (
              <ProjectCard
                index={index}
                key={repositoryData.id}
                {...repositoryData}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProjectPage;
