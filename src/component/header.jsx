import React, { Component } from "react";
import { Avatar, Image, Button, Menu, Dropdown} from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

export class Header extends Component {

    render() {
        const menu = (
            <Menu >
              <Button icon={<PoweroffOutlined />} > Logout</Button>
            </Menu>
          );

        return (
            <div>
                <header className="head">
                    <a href="/"><img className="logo_1" src="img/cowin.png" alt="logomain" width="150"></img></a>
                    <img className="logo_3" src="img/national-emblem-login.svg" alt="logo" width="40"></img>
                    <div className="logo_2">
                    <Dropdown.Button overlay={menu} icon={<Avatar src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />}>
                         Welcome, suman
                    </Dropdown.Button>
                    </div>
                </header>

            </div>
        );
    }
}