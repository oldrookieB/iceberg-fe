import React, {useState} from 'react';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import SearchBar from '../components/ui/SearchBar';
import Card from '../components/list/Card';

const MainPage = () => {
    return (
       <Layout>
            <Header/>
            <div className='mt-12' />
            <SearchBar/>
            <div className='mt-5'/>
            <div className='flex justify-start mx-9'>
            <h3>Likes</h3>
            </div>
            <div className='flex flex-wrap justify-center mt-3'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
       </Layout>
    );
};

export default MainPage;