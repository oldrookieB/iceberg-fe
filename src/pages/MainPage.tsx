import axios from "axios";

import React, { useState, useEffect } from 'react';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import SearchBar from '../components/ui/SearchBar';
import Card from '../components/list/Card';
import TechButton from '../components/ui/TechButton';

import { getRepositoryData } from '../api/github';
import { Base64 } from "js-base64";
import { useGithubAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";


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
  const TechStacks = [
        { title: "React", bgColor: "#61dafb", txtColor: "black" },
        { title: "Python", bgColor: "#3676AB", txtColor: "white" },
        { title: "JavaScript", bgColor: "#f7df1e", txtColor: "black" },
        { title: "html", bgColor: "#e34f26", txtColor: "white" },
        { title: "Css", bgColor: "#264de4", txtColor: "white" },
        { title: "node.js", bgColor: "#339933", txtColor: "white" },
        { title: "java", bgColor: "#007396", txtColor: "white" },
        { title: "ruby", bgColor: "#cc342d", txtColor: "white" },
        { title: "angular", bgColor: "#dd0031", txtColor: "white" },
        { title: "Vue.js", bgColor: "#4fc08d", txtColor: "white" },
        { title: "c#", bgColor: "#68217a", txtColor: "white" }
    ]
    
    return (
       <Layout>
            <Header/>
            <div className='mt-12' />
            <SearchBar/>
            <div className='mt-5'/>
            <a className='text-lg font-medium mx-5'>Likes</a>
            <div className='flex flex-wrap justify-start ml-2 mt-3'>
              {repositoryDatas.map((repository) => (
                <Card
                  key={repository.id}
                  id={repository.id}  
                  title={repository.name}
                  description={repository.description}
                />
              ))}
            </div>
            <a className='text-lg font-medium mx-5'>TechStack</a>
            <div className='flex flex-row flex-wrap mx-10 mt-3'>
                {TechStacks.map((tech, index) => (
                    <TechButton
                        key={index}
                        title={tech.title}
                        bgColor={tech.bgColor}
                        txtColor={tech.txtColor}
                    />
            ))}
            </div>
            <div className='flex flex-wrap justify-start ml-2 mt-5'>
            {repositoryDatas.map((repository) => (
                <Card
                  key={repository.id}
                  id={repository.id}  
                  title={repository.name}
                  description={repository.description}
                />
              ))}
            </div>
       </Layout>
    );
};

export default MainPage;
