import React from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router';
import { RouteNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <Layout.Header>
      <Row justify="end">
        {
          isAuth
            ? (<Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item onClick={() => navigate(RouteNames.EVENT)} key="1">Event</Menu.Item>
                <Menu.Item onClick={() => navigate(RouteNames.EXERCISE)} key="2">Exercise</Menu.Item>
                <Menu.Item onClick={() => console.log('exit')} key="3">Exit</Menu.Item>
              </Menu>)
            :
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item 
                  onClick={() => navigate(RouteNames.LOGIN)} 
                  key={1}
                >
                  Login
                </Menu.Item>
                <Menu.Item 
                  onClick={() => navigate(RouteNames.EXERCISE)} 
                  key={2}
                >
                  Exercise
                </Menu.Item>
              </Menu>
        }
        
      </Row>
    </Layout.Header>
  )
}

export default Navbar;
