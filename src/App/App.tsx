import React, { Component} from "react";
import { Layout, Menu } from 'antd';

import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";


import Profile from '../Profile/Profile';
import Reports from '../Reports/Reports';
import Dashboard from '../Dashboard/Dashboard';

const { Sider, Content } = Layout;

class App extends Component{

  render() {
    return (
      <Router>
        <main>

          <Layout>
            <Sider className="primary">
              <Profile></Profile>
              
              <Menu
                style={{ width: '100%' }}
                defaultSelectedKeys={['1']}
                mode="inline"
              >
                <Menu.Item key="1"><Link to="/dashboard">Dashboard</Link></Menu.Item>
                <Menu.Item><Link to="/reports">Reports</Link></Menu.Item>
              </Menu>

            </Sider>
            <Layout>
              <Content className="content">

                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/reports" component={Reports} />
                </Switch>

              </Content>
            </Layout>
          </Layout>
        </main>
      </Router>
    );
  }
}

export default App;