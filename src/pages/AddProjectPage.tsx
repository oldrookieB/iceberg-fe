import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Base64 } from "js-base64";
import ProjectCard from "../components/ProjectCard";
import { useGithubAuthStore } from "../store/auth";
import useLogout from "../hooks/useLogout";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/ui/Input";
import TechButton from "../components/ui/TechButton";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

interface projectInputsProps {
  [inputLable: string]: string;
}

const TechStacks = [
  { title: "react", isSelected: false },
  { title: "python", isSelected: false },
  { title: "js", isSelected: false },
  { title: "html", isSelected: false },
  { title: "css", isSelected: false },
  { title: "node.js", isSelected: false },
  { title: "java", isSelected: false },
  { title: "ruby", isSelected: false },
  { title: "angular", isSelected: false },
  { title: "vue", isSelected: false },
  { title: "c#", isSelected: false },
];

const AddProjectPage = () => {
  const [progress, setProgress] = useState(0);
  const logout = useLogout();
  const [readme, setReadme] = useState("");
  // TODO: 가져온 레포지토리 정보 중 사용할 데이터 정해지면 타입 설정하기
  const [repositoryDatas, setRepositoryDatas] = useState<any>([]);
  const [selectedRepository, setSelectedRepository] = useState("");
  const githubAuthStore = useGithubAuthStore();
  const [techStacks, setTechStacks] = useState(TechStacks);

  const authStore = useAuthStore();

  // 로그인 상태가 아닐 시 로그인 페이지로 이동
  if (!authStore.isLogin) {
    return <Navigate to="/"></Navigate>;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<projectInputsProps>();
  const onSubmit: SubmitHandler<projectInputsProps> = (data) =>
    console.log(data);

  const getRepositoryData = async () => {
    const data = await axios.get(
      `https://api.github.com/users/${githubAuthStore.userName}/repos`
    );

    console.log(data);
    setRepositoryDatas(data.data);
    setSelectedRepository(data.data[0].name);
  };
  const getReadMe = async () => {
    const data = await axios.get(
      `https://api.github.com/repos/leey00nsu/${selectedRepository}/readme`
    );

    // readme 데이터는 base64로 인코딩 되어있으므로 , 디코딩해줍니다.
    setReadme(Base64.decode(data.data.content));
  };

  // 유저의 레포지토리 리스트를 가져옵니다.
  useEffect(() => {
    getRepositoryData();
  }, []);

  // return (
  //   <div className="markdown-body">
  //     <ReactMarkdown children={readme} remarkPlugins={[remarkGfm]} />
  //   </div>
  // );

  let selectedRepositoryData = repositoryDatas.filter(
    (repositoryData: any) => repositoryData.name === selectedRepository
  )[0];

  const changeProgressHandler = () => {
    setProgress(1);
    getReadMe();
  };

  const selectRepositoryHandler = (select: string) => {
    setSelectedRepository(select);
  };

  const selectTechStackHandler = (select: string) => {
    const newTechStacks = techStacks.map((techStack) => {
      if (techStack.title === select) {
        const newTechStack = {
          title: techStack.title,
          isSelected: !techStack.isSelected,
        };

        return newTechStack;
      } else {
        return techStack;
      }
    });

    setTechStacks(newTechStacks);
  };

  // progress 0 : 프로젝트 선택 단계
  const selectProject = (
    <>
      <section className="flex flex-col gap-6 items-center w-full max-w-[50%] sm:max-w-md  md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
        <div className="flex flex-col">
          <label htmlFor="select-project" className="label">
            <span className="label-text">추가할 프로젝트 선택</span>
          </label>
          <div className="flex flex-wrap justify-between w-full gap-6  xl:justify-start">
            {repositoryDatas.map((repositoryData: any, index: number) => (
              <ProjectCard
                index={index}
                key={repositoryData.id}
                {...repositoryData}
                selectRepository={selectRepositoryHandler}
              />
            ))}
          </div>
        </div>
        <button
          onClick={changeProgressHandler}
          className="btn btn-success w-80"
        >
          다음 단계로
        </button>
      </section>
    </>
  );

  // progress 1 : 프로젝트 추가 단계
  const confirmProject = (
    <>
      <section className="flex justify-center w-1/2 ">
        <form
          id="projectForm"
          className="flex flex-col items-center w-full gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="프로젝트 이름"
            type="text"
            errors={errors}
            register={register}
            required
          />
          <Input
            defaultValue={selectedRepositoryData?.name}
            label="레포지토리 이름"
            type="text"
            required
          />
          <div className="flex flex-col w-full">
            <label htmlFor="tech-stack" className="label">
              <span className="label-text">기술 스택</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {techStacks.map((techStack) => (
                <TechButton
                  key={techStack.title}
                  onClick={selectTechStackHandler}
                  title={techStack.title}
                  selected={techStack.isSelected}
                />
              ))}
            </div>
          </div>
          <div className="w-full markdown-body">
            <label htmlFor="readmd" className="label">
              <span className="label-text">프로젝트 소개</span>
            </label>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              children={readme}
              remarkPlugins={[remarkGfm]}
            />
          </div>
          <button type="submit" className="btn btn-success w-80">
            프로젝트 추가
          </button>
        </form>
      </section>
    </>
  );

  return (
    <div className="flex flex-col items-center w-screen min-h-screen p-10">
      <header className="flex justify-between w-full">
        <p>Iceberg</p>
        <button onClick={logout} className="btn">
          로그아웃
        </button>
      </header>
      <ul className="steps w-60">
        <li className="step step-primary">프로젝트 선택</li>
        <li className={progress === 1 ? "step step-primary" : "step "}>
          프로젝트 추가
        </li>
      </ul>
      {progress === 0 && selectProject}
      {progress === 1 && confirmProject}
    </div>
  );
};

export default AddProjectPage;
