import { Layout } from 'antd';
import React, { Component } from "react";
import { Header } from '../component/header';
import { Footer } from '../component/footer';
import { TabComponent } from '../component/Tab';

export class LayoutTab extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
        if(!sessionStorage.getItem("name")){
            document.location.href = "/";    
        }
    }

    render() {
        return (
            sessionStorage.getItem("name") ? 
            <Layout>
                <Layout>
                    <Header />
                </Layout>

                <Layout>
                    <TabComponent />
                </Layout>

                <Layout>
                    <Footer />
                </Layout>
            </Layout>
            : ""
        );
    }

}