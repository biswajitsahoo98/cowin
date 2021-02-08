import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Carousel, Tag } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { TwitterOutlined, YoutubeOutlined, FacebookOutlined, LinkedinOutlined} from '@ant-design/icons';
import { Spin, Space }  from 'antd';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onFinish = (values) => {
        window.location="/home";
    };

    render() {
        const contentStyle = {
            height: '300px',
            color: 'red',
            lineHeight: '300px',
            textAlign: 'center',
            background: '#364d79',
        };
       
            return (
            <div className="login_main">
                <div className="login_div">
                    <div className="login_container">
                        <div className="slider">
                            <div className="style">
                                <img _ngcontent-nry-c188="" src="img/national-emblem-login.svg" alt="logo" class="national-logo-login"></img>
                                <img _ngcontent-nry-c188="" src="img/cowin.png" alt="logo" class="welcome-logo"></img>
                                <Carousel autoplay >
                                    <div>
                                        <p _ngcontent-roj-c188="">Together we will fight COVID-19.</p>
                                        <img src="/img/covid.jpg" width="450" height="400" style={contentStyle} />
                                    </div>
                                    <div>
                                        <p _ngcontent-roj-c188="">There is enough of everything, everyday for everyone.</p>
                                        <img src="/img/covid19.jpg" width="400" height="400" style={contentStyle} />
                                    </div>
                                    <div>
                                        <p _ngcontent-roj-c188="">Humanity needs leadership and solidarity to defeat the coronavirus.</p>
                                        <img src="/img/cowin19.jpg" width="400" height="400" style={contentStyle} />
                                    </div>
                                    <div>
                                        <p _ngcontent-roj-c188="">The guidelines of winning over the pandemic.</p>
                                        <img src="/img/covin.jpg" width="400" height="400" style={contentStyle} />
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        <div className="login">
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={this.onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    label="User Name:"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password:"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                                <br />
                            </Form>
                            <div>
                                <Space size="middle">
                                    <Spin size="large" />
                                </Space>,
                            <br /><br /><br />
                                <Tag icon={<TwitterOutlined />} color="#55acee">
                                    Twitter
                            </Tag>
                                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                                    Youtube
                            </Tag>
                                <Tag icon={<FacebookOutlined />} color="#3b5999">
                                    Facebook
                            </Tag>
                                <Tag icon={<LinkedinOutlined />} color="#55acee">
                                    LinkedIn
                            </Tag>
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <div _ngcontent-roj-c172="" class="row py-2">
                            <div _ngcontent-roj-c172="" class="col-12 col-lg-auto">
                                <nav _ngcontent-roj-c172="" class="nav justify-content-around text-white">
                                    <a _ngcontent-roj-c172="" class="nav-link" href="/contact">Contact</a>
                                    <span _ngcontent-roj-c172="" class="py-2"> | </span>
                                    <a _ngcontent-roj-c172="" class="nav-link" href="/privacy">Privacy Policy </a>
                                    <span _ngcontent-roj-c172="" class="py-2"> | </span>
                                    <a _ngcontent-roj-c172="" class="nav-link" href="/terms">Terms</a>
                                </nav>
                            </div>
                        </div>
                        <div _ngcontent-roj-c172="" class="col-auto col-sm-12 ml-md-auto col-lg-auto mx-auto mr-lg-0">
                            <div _ngcontent-roj-c172="" class="row">
                                <div _ngcontent-roj-c172="" class="col-12 col-sm-auto mx-md-auto ml-md-auto">
                                    <div _ngcontent-roj-c172="" class="py-2 text-center text-sm-left view-text"> Recommended Browser Google Chrome | Copyright © 2021 TAT. All Rights Reserved | Version 3.0.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}