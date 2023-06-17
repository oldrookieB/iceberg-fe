import axios from "axios";

import React, { useState, useEffect } from 'react';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import SearchBar from '../components/ui/SearchBar';
import Card from '../components/list/Card';
import TechButton from '../components/ui/TechButton';
import { TECHSTACKS } from "../constants/techStacks";
import { getRepositoryData } from '../api/github';
import { Base64 } from "js-base64";
import { useGithubAuthStore } from "../store/auth";



const MainPage = () => {
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
            <Header/>
            <div className='mt-12' />
            <SearchBar/>
            <div className='mt-5'/>
     
            <div className='flex flex-wrap justify-between' >
              {repositoryDatas.map((repository: any) => (
                <Card
                  key={repository.id}
                  title={repository.name}
                  description={repository.description}
                />
              ))}
            </div>          
            {/* <a className='text-lg font-medium mx-5'>TechStack</a>
            <div className='flex flex-row flex-wrap mx-10 mt-3'>
                {TECHSTACKS.map((tech, index) => (
                    <TechButton
                        key={index}
                        title={tech.title}
                    />
            ))}
            </div> */}
       </Layout>
    );
};

export default MainPage;
