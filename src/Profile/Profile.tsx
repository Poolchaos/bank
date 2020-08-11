import React, { Component } from "react";

import { Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import service from '../model/DelayedProfileService';

declare const LOCAL_USER_KEY: string;

const { Title, Text } = Typography;
const emptyUser = {
  name: '', email: '', phone: '', username: '', website: '', 
  company: { name: ''}, address: { suite: '', street: '', city: '', zipcode: '' }
};

class Profile extends Component{

  state = {
    user: null
  };

  async componentDidMount() {
    const user = await service.getUserDetails();

    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user));
    this.setState({ user: user });
  }

  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    let user = this.state.user || emptyUser;

    return (
      <div>
        <Avatar size={64} icon={<UserOutlined />} />

        <Typography>
          <Title className="wrapper content">{ user.name }</Title>
          <div className="wrapper text-left">
            <Text strong>Username: { user.username }</Text><br/>
            <Text strong>{ user.phone }</Text><br/>
            <Text strong>
              { user.address.suite }, { user.address.street }, { user.address.city }, { user.address.zipcode }
            </Text><br/>
            <Text strong>{ user.company.name }</Text><br/>
            <Text strong>{ user.website }</Text>
          </div>
        </Typography>
        
      </div>
    );
  }
}

export default Profile;