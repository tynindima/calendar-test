import React from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router';
import { RouteNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector(state => state.auth);

  return (
    <Layout.Header>
        {
          isAuth
            ? <Row>
                <div style={{color: 'white' }}>
                  {user.username}
                </div>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                  <Menu.Item 
                    onClick={logout} 
                    key="1"
                  >
                    Exit
                  </Menu.Item>
              </Menu>
              </Row>
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
    </Layout.Header>
  )
}

export default Navbar;
