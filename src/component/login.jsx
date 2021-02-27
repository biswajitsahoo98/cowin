import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Carousel, Tag, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { TwitterOutlined, YoutubeOutlined, FacebookOutlined, LinkedinOutlined} from '@ant-design/icons';
import { Spin, Space, message }  from 'antd';

export class Login extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onFinish = (data) => {
        fetch('https://cors-everywhere-me.herokuapp.com/cowin-env-1.eba-eg2emyiq.us-east-2.elasticbeanstalk.com/user/validate', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(responce => responce.json()).then((data) => {
            console.log(data);
            if (data.name) {
                sessionStorage.setItem("name",data.name);
                sessionStorage.setItem("user_type",data.user_type);
                this.formRef.current.resetFields();
                window.location="/home";
            }else{
				message.error('Invalid UserId or Password');
				return false;
			}
        }
        ).catch((error) => {
            message.error('Invalid User ID or Password');
            return false;
        });
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
                        <div>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={12}>
                                    <div><a href="/home"><img className="logo_1" src="img/cowin.png" alt="logomain" width="150"></img></a></div>
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <div><img className="logo_3" src="img/national-emblem-login.svg" alt="logo" width="40"></img></div>
                                </Col>
                            </Row>
                        </div>
                        <div className="login_container_box">
                            <div className="slider">
                                <div className="style">
                                    <Carousel autoplay >
                                        <div>
                                            <p _ngcontent-roj-c188="">Together we will fight COVID-19</p>
                                            <img src="/img/covid.jpg" width="100%" height="100%"  />
                                        </div>
                                        <div>
                                            <p _ngcontent-roj-c188="">There is enough of everything, everyday for everyone</p>
                                            <img src="/img/covid19.jpg" width="100%" height="100%"  />
                                        </div>
                                        <div>
                                            <p _ngcontent-roj-c188="">Humanity needs leadership and solidarity to defeat the coronavirus</p>
                                            <img src="/img/cowin19.jpg" width="100%" height="100%"  />
                                        </div>
                                        <div>
                                            <p _ngcontent-roj-c188="">The guidelines of winning over the pandemic</p>
                                            <img src="/img/covin.jpg" width="100%" height="100%"  />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="login">
                            <Form
                                ref={this.formRef}
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={this.onFinish}
                            >
                                <Form.Item
                                    name="user_id"
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
                                </Space>
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
            </div>
        );
    }
}