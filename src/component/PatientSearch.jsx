import react, { Component } from "react";
import { Table, Card, Modal, Button, Descriptions, List, Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Registation } from './Registation';

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  const { Search } = Input;

export class PatientSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patientData:null,
            dataShow: false,
            formShow: false
        }
    }

    onSearch = value => {
        console.log(value);
        fetch('https://cors-everywhere-me.herokuapp.com/cowin-env-1.eba-eg2emyiq.us-east-2.elasticbeanstalk.com/patient/find/'+value).then(res => res.json()).then((data) => {
            console.log(data);
            this.setState({ 
                patientData: data,
                dataShow: true,
                formShow: false
            });
        });
    };

    edit = val => {
        this.setState({ 
            formShow: true,
            dataShow: false
        });
    }

    render() {
        return(
            <div className="home_container">
                <Card title="Patient Search" bordered={true}>
                    <Space direction="vertical">
                        <Search
                            placeholder="Aadhar No."
                            enterButton="Search"
                            size="large"
                            suffix={suffix}
                            onSearch={this.onSearch}
                            />
                        </Space>
                </Card>

                {this.state.dataShow ? 
                    <Card title={<div className="display"><div className="cardTitle">Patient Details</div> <div className="edit"><a onClick={this.edit}>Edit</a></div></div>} bordered={true}>
                        <Descriptions title="Madical History">
                            <Descriptions.Item label="Name">{this.state.patientData.name}</Descriptions.Item>
                            <Descriptions.Item label="Aadhar Number">{this.state.patientData.aadhar}</Descriptions.Item>
                            <Descriptions.Item label="Blood Group">{this.state.patientData.blood_group}</Descriptions.Item>
                            <Descriptions.Item label="Date of birth">{this.state.patientData.dob}</Descriptions.Item>
                            <Descriptions.Item label="Gender">{this.state.patientData.gender}</Descriptions.Item>

                            <Descriptions.Item label="Vaccine Type">{this.state.patientData.vaccine_type}</Descriptions.Item>
                            <Descriptions.Item label="Vaccine Batch No">{this.state.patientData.vaccine_batch_no}</Descriptions.Item>
                            <Descriptions.Item label="Dose 1">{this.state.patientData.dose_1}</Descriptions.Item>
                            <Descriptions.Item label="Dose 2">{this.state.patientData.dose_2}</Descriptions.Item>
                        </Descriptions>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.patientData.history}
                            renderItem={(i) => (
                                <List.Item>
                                    <List.Item.Meta className="item_tittle" title={i.title} />
                                    <List.Item.Meta className="item_value" title={i.value} />
                                    <List.Item.Meta className="item_details" title={i.details} />
                                </List.Item>
                            )}
                        />
                    </Card>
                : ""}

                {this.state.formShow ? 
                    <Registation patientData={this.state.patientData}/>
                : ""}
            </div>
        );
    }

}