import React, { useState, useEffect } from "react";
import Layout from "../components/ui/Layout";
import Card from "../components/list/Card";
import Header from "../components/ui/Header";

import { getRepositoryData } from "../api/github";
import { useGithubAuthStore } from "../store/auth";

const MyProjectPage = () => {
  const [repositoryDatas, setRepositoryDatas] = useState([]);
  const githubAuthStore = useGithubAuthStore();

  useEffect(() => {
    const fetchRepositoryData = async () => {
      try {
        const response = await getRepositoryData(githubAuthStore.userName);
        setRepositoryDatas(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepositoryData();
  }, []);

  return (
    <Layout>
      <Header />
      <div className="flex flex-col">
        <label className="label">
          <span className="label-text">내 프로젝트</span>
        </label>
        <div className="py-4 flex flex-wrap justify-between items-center w-full max-w-[384px] lg:max-w-4xl xl:max-w-7xl gap-6 after:content-[''] after:basis-[384px]  ">
          {repositoryDatas.map((repository) => (
            <Card
              key={repository.id}
              id={repository.id}
              title={repository.name}
              description={repository.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MyProjectPage;
