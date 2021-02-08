import React, { Component } from "react";
import { Tabs } from 'antd';
import { Registation } from './Registation';
import { Home } from './Home';
import { PatientSearch } from './PatientSearch';

const { TabPane } = Tabs;

export class TabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="tab_container">
                <Tabs>
                    <TabPane tab="Home" key="1">
                        <Home/>
                    </TabPane>
                    <TabPane tab="Enrollment" key="2">
                        <Registation/>
                    </TabPane>
                    <TabPane tab="Search" key="3">
                        <PatientSearch/>
                    </TabPane>
                </Tabs>
            </div>
            
        );
    }


}