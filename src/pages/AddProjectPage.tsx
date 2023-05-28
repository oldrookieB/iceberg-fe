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
import Input from "../components/UI/Input";

interface projectInputsProps {
  [inputLable: string]: string;
}

const AddProjectPage = () => {
  const [progress, setProgress] = useState(0);
  const logout = useLogout();
  const [readme, setReadme] = useState("");
  // TODO: 가져온 레포지토리 정보 중 사용할 데이터 정해지면 타입 설정하기
  const [repositoryDatas, setRepositoryDatas] = useState<any>([]);
  const [selectedRepository, setSelectedRepository] = useState("");
  const githubAuthStore = useGithubAuthStore();

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

  const selectProject = (
    <>
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
                selectRepository={selectRepositoryHandler}
              />
            ))}
          </div>
        </div>
      </section>
      <button onClick={changeProgressHandler} className="btn btn-success w-80">
        다음 단계로
      </button>
    </>
  );

  const confirmProject = (
    <>
      <section className="flex justify-center w-full max-w-7xl p-6">
        <form
          id="projectForm"
          className="flex flex-col items-center gap-2 w-80"
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
        </form>
      </section>
      <div className="w-1/2 markdown-body ">
        <label htmlFor="some" className="label">
          <span className="label-text">프로젝트 readme.md</span>
        </label>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={readme}
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <button onClick={handleSubmit(onSubmit)} className="btn btn-success w-80">
        프로젝트 추가
      </button>
    </>
  );

  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <header className="w-full flex justify-between">
        <p>Iceberg</p>
        <button onClick={logout} className="btn">
          로그아웃
        </button>
      </header>
      {progress === 0 && selectProject}
      {progress === 1 && confirmProject}
    </div>
  );
};

export default AddProjectPage;
