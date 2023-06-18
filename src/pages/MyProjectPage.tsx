import React, {useState, useEffect} from 'react';
import Layout from '../components/ui/Layout';
import Card from '../components/list/Card';
import Header from '../components/ui/Header';

import { getRepositoryData } from '../api/github';
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
    },     []);
  

    return (
        <Layout>
            <Header />
                <button className="btn btn-ghost w-32 text-lg mt-20">내 프로젝트</button>
                <div className='flex flex-wrap justify-between' >
                    {repositoryDatas.map((repository: any) => (
                        <Card
                        key={repository.id}
                        title={repository.name}
                        description={repository.description}
                        />
                    ))}
                    </div>

        </Layout>
    );
};

export default MyProjectPage;