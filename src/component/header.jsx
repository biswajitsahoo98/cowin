import React, { Component } from "react";
import { Avatar, Image, Button, Menu, Dropdown, Row, Col} from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

export class Header extends Component {

    logout = () => {
        sessionStorage.clear();
        document.location.href = "/";
    }

    render() {
        const menu = (
            <Menu >
              <Button icon={<PoweroffOutlined />} onClick={this.logout}> Logout</Button>
            </Menu>
          );

        return (
            <div>
                <header className="head">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={8}>
                            <div><a href="/home"><img className="logo_1" src="img/cowin.png" alt="logomain" width="150"></img></a></div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div><img className="logo_3" src="img/national-emblem-login.svg" alt="logo" width="40"></img></div>
                        </Col>
                        <Col className="gutter-row vertical-center" span={8}>
                            <div>
                                <Dropdown.Button overlay={menu} icon={<Avatar src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />}>
                                    Welcome, {sessionStorage.getItem("name")}
                                </Dropdown.Button>
                            </div>
                        </Col>
                    </Row>
                </header>
            </div>
        );
    }
}