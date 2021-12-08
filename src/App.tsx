import React from 'react';
import AppRouter from './components/AppRouter';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export default App;
