import react, { Component } from "react";
import { Table, Card, Modal, Button, Descriptions, List, Space } from 'antd';
import { Pie } from '@ant-design/charts';
import { RingProgress } from '@ant-design/charts';
import { Histogram } from '@ant-design/charts';

var dataHist = [
    { value: 1.2 },
    { value: 3.4 },
    { value: 3.7 },
    { value: 4.3 },
    { value: 5.2 },
    { value: 5.8 },
    { value: 6.1 },
    { value: 6.5 },
    { value: 6.8 },
    { value: 7.1 },
    { value: 7.3 },
    { value: 7.7 },
    { value: 8.3 },
    { value: 8.6 },
    { value: 8.8 },
    { value: 9.1 },
    { value: 9.2 },
    { value: 9.4 },
    { value: 9.5 },
    { value: 9.7 },
    { value: 10.5 },
    { value: 10.7 },
    { value: 10.8 },
    { value: 11 },
    { value: 11 },
    { value: 11.1 },
    { value: 11.2 },
    { value: 11.3 },
    { value: 11.4 },
    { value: 11.4 },
    { value: 11.7 },
    { value: 12 },
    { value: 12.9 },
    { value: 12.9 },
    { value: 13.3 },
    { value: 13.7 },
    { value: 13.8 },
    { value: 13.9 },
    { value: 14 },
    { value: 14.2 },
    { value: 14.5 },
    { value: 15 },
    { value: 15.2 },
    { value: 15.6 },
    { value: 16 },
    { value: 16.3 },
    { value: 17.3 },
    { value: 17.5 },
    { value: 17.9 },
    { value: 18 },
    { value: 18 },
    { value: 20.6 },
    { value: 21 },
    { value: 23.4 },
  ];
  var configHist = {
    data: dataHist,
    binField: 'value',
    binWidth: 4,
    tooltip: {
      showMarkers: false,
      position: 'top',
    },
    interactions: [{ type: 'element-highlight' }],
    meta: {
      range: {
        min: 0,
        tickInterval: 2,
      },
      count: {
        max: 20,
        nice: true,
      },
    },
  };

const data = [
    {
      type: '0-5',
      value: 10,
    },
    {
      type: '5-10',
      value: 25,
    },
    {
      type: '10-18',
      value: 18,
    },
    {
      type: '19-40',
      value: 11985,
    },
    {
      type: '41-60',
      value: 9000,
    },
    {
      type: '61-70',
      value: 5200,
    },
    {
      type: '71+',
      value: 5000,
    },
  ];

  const config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{percentage}',
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };

  const configRing = {
    height: 250,
    width: 250,
    autoFit: false,
    percent: 0.6,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: function formatter() {
          return 'Vaccinated';
        },
      },
    },
  };

export class Home extends Component {
    formRef = react.createRef();

    constructor(props) {
        super(props);
        this.state = {
            loading: [],
            patient: [],
            patientData: [],
            visible: false
        }
    }

    setVisible = () =>{
        this.setState({visible: false});
    }
    componentDidMount() {

    fetch('http://localhost:9090/patient/getAll').then(res => res.json()).then((data) => {
          console.log(data);
          this.setState({ patient: data })
        });
        // this.showDetails = this.showDetails.bind(this);
    };

    showDetails = (value, event) => {
        console.log(value);
        fetch('http://localhost:9090/patient/find/'+value).then(res => res.json()).then((data) => {
          console.log(data);
          this.setState({ patientData: data, visible: true });
        });
    };

    delete = (value, event) => {
        console.log(value);
        if(value.aadhar){
            fetch('http://localhost:9090/patient/delete/'+value.aadhar).then(res => res.json()).then((data) => {
                console.log(data);
                this.setState({ patient: data })
              });
        }
    };

    columns = [
        {
            title: 'Aadhar No',
            dataIndex: 'aadhar',
            key: 'aadhar',
            fixed: 'left',
            width: 150,
            render: text => <a onClick={this.showDetails.bind(this, text)}>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            width: 150,
        },
        {
            title: 'Blood Group',
            dataIndex: 'blood_group',
            key: 'blood_group',
            fixed: 'left',
            width: 100,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            width: 100,
        },
        {
            title: 'Date Of Birth',
            dataIndex: 'dob',
            key: 'dob',
            width: 150,
        },
        {
            title: 'Marital',
            dataIndex: 'marital',
            key: 'marital',
            width: 150,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: 150,
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
            width: 150,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 150,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: 250,
        },
        {
            title: 'Emergency Contact No',
            dataIndex: 'contact_no',
            key: 'contact_no',
            width: 150,
        },
        {
            title: 'Emergency Email ID',
            dataIndex: 'email_id',
            key: 'email_id',
            width: 150,
        },
        {
            title: 'Emergency Address',
            dataIndex: 'e_address',
            key: 'e_address',
            width: 250,
        },
        {
            title: 'Insurance No',
            dataIndex: 'insurance_no',
            key: 'insurance_no',
            width: 150,
        },
        {
            title: 'Insurance Provider',
            dataIndex: 'insurance_pro',
            key: 'insurance_pro',
            width: 150,
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 150,
            render: (text, record) => (
              <Space size="middle">
                <a onClick={this.delete.bind(this, text)}>Delete</a>
              </Space>
            ),
          },
    ];

    contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    render() {
        return (
            <div className="home_container">
                
                <Card bordered={true}>
                    <div className="charts">
                        <div className="ring">
                            <RingProgress {...configRing} />
                        </div>
                        <div className="pie">
                            <Pie {...config} />
                        </div>
                    </div>
                    <div >
                        <Histogram {...configHist} />
                    </div>
                </Card>


                <Card title="Patient Information" bordered={true}>
                    <Table scroll={{ x: 1500 }} sticky columns={this.columns} dataSource={this.state.patient}/>  
                </Card>
                <Modal title="Patient Madical History" width={1000} visible={this.state.visible} onOk={this.setVisible} onCancel={this.setVisible}>
                    <Descriptions title="Madical History">
                        <Descriptions.Item label="Name">{this.state.patientData.name}</Descriptions.Item>
                        <Descriptions.Item label="Aadhar Number">{this.state.patientData.aadhar}</Descriptions.Item>
                        <Descriptions.Item label="Blood Group">{this.state.patientData.blood_group}</Descriptions.Item>
                        <Descriptions.Item label="Date of birth">{this.state.patientData.dob}</Descriptions.Item>
                        <Descriptions.Item label="Gender">{this.state.patientData.gender}</Descriptions.Item>
                    </Descriptions>
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.patientData.history}
                        renderItem={(i) => (
                            <List.Item>
                                <List.Item.Meta title={i.title} />
                                <List.Item.Meta title={i.value} />
                                <List.Item.Meta title={i.details} />
                            </List.Item>
                        )}
                    />
                </Modal>
            </div>
      );
    }
}