import React, { Component} from "react";
import { Layout } from 'antd';

const { Sider, Content } = Layout;

class App extends Component{
  render() {
    return (
    <Layout>
      <Sider>Sidebar</Sider>
      <Layout>
        <Content>Content</Content>
      </Layout>
    </Layout>
    );
  }
}

export default App;