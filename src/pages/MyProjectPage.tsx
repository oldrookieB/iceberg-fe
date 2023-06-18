import React, { useState, useEffect } from "react";
import Layout from "../components/ui/Layout";
import Card from "../components/list/Card";
import Header from "../components/ui/Header";

import { getRepositoryData } from "../api/github";
import { useGithubAuthStore } from "../store/auth";
import { ProjectType } from "../types/project.type";
import { MOCKPROJECTS } from "../mocks/projects.mock";
import CardSkeleton from "../components/list/CardSkeleton";

const MyProjectPage = () => {
  const [repositoryDatas, setRepositoryDatas] = useState<ProjectType[] | null>(
    null
  );
  const githubAuthStore = useGithubAuthStore();

  useEffect(() => {
    const fetchRepositoryData = async () => {
      try {
        // const response = await getRepositoryData(githubAuthStore.userName);
        // setRepositoryDatas(response.data);
        setRepositoryDatas(MOCKPROJECTS);
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(fetchRepositoryData, 500);
  }, []);

  return (
    <Layout>
      <Header />
      <div className="flex flex-col">
        <label className="label">
          <span className="label-text">내 프로젝트</span>
        </label>
        <div className="py-4 flex flex-wrap justify-between items-center w-screen max-w-[384px] lg:max-w-4xl xl:max-w-7xl gap-6 after:content-[''] after:basis-[384px]  ">
          {!repositoryDatas &&
            [1, 2, 3, 4, 5, 6].map((_, index) => <CardSkeleton key={index} />)}
          {repositoryDatas?.map((repository) => (
            <Card
              key={repository.id}
              id={repository.id}
              userName={repository.userName}
              title={repository.title}
              description={repository.description}
              techStacks={repository.techStacks}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MyProjectPage;
