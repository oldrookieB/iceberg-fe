import React from 'react';
import Layout from '../components/ui/Layout';
import Card from '../components/list/Card';
import Header from '../components/ui/Header';

const MyProjectPage = () => {
    return (
        <Layout>
            <Header />
                <button className="btn btn-ghost w-32 text-lg mt-20">내 프로젝트</button>
            <div className='flex flex-wrap justify-center mt-5'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </Layout>
    );
};

export default MyProjectPage;