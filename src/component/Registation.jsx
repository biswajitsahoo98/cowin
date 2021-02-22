import react, { Component } from "react";
import { UserOutlined, MobileOutlined, MailOutlined, IdcardOutlined, HeartOutlined } from '@ant-design/icons';
import { TwitterOutlined, YoutubeOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Radio, Button } from 'antd';
import { DatePicker } from 'antd';
import { Select } from 'antd';
import { Form, message, Row, Col, Upload, Card, List, Tag } from 'antd';

const { TextArea } = Input;
const { RangePicker } = DatePicker;


function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}
function onOk(value) {
    console.log('onOk: ', value);
}
const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}



export class Registation extends Component {
    formRef = react.createRef();

    constructor(props) {
        super(props);
        this.state = {
            loading: [],
            patient: [],
            medical_hist: {
                1: {
                    patientKey: {
                        sequence: 1,
                        aadhar: ''
                    },
                    title: 'Epilepsy, fits, blackouts, fainting turns or unexplained loss of consciousness?',
                    value: '',
                    details: '',
                },
                2: {
                    patientKey: {
                        sequence: 2,
                        aadhar: ''
                    },
                    title: 'Vertigo, dizziness, giddiness, problems with balance?',
                    value: '',
                    details: ''
                },
                3: {
                    patientKey: {
                        sequence: 3,
                        aadhar: ''
                    },
                    title: 'Recurrent headache or migraine?',
                    value: '',
                    details: ''
                },
                4: {
                    patientKey: {
                        sequence: 4,
                        aadhar: ''
                    },
                    title: 'Diseases of the nervous system e.g. neuritis, stroke, multiple sclerosis?',
                    value: '',
                    details: ''
                },
                5: {
                    patientKey: {
                        sequence: 5,
                        aadhar: ''
                    },
                    title: 'Chest pain, angina, heart disease or breathlessness?',
                    value: '',
                    details: ''
                },
                6: {
                    patientKey: {
                        sequence: 6,
                        aadhar: ''
                    },
                    title: 'Any visual defect e.g. scotoma, blindness in one eye, reduced visual field, blurred vision, coloured blind?',
                    value: '',
                    details: ''
                },
                7: {
                    patientKey: {
                        sequence: 7,
                        aadhar: ''
                    },
                    title: 'Raised or low blood pressure?',
                    value: '',
                    details: ''
                },
                8: {
                    patientKey: {
                        sequence: 8,
                        aadhar: ''
                    },
                    title: 'Any blood disorder?',
                    value: '',
                    details: ''
                },
                9: {
                    patientKey: {
                        sequence: 9,
                        aadhar: ''
                    },
                    title: 'Asthma, bronchitis, emphysema, pneumonia or any other lung disease?',
                    value: '',
                    details: ''
                },
                10: {
                    patientKey: {
                        sequence: 10,
                        aadhar: ''
                    },
                    title: 'Jaundice or any form of hepatitis or other liver problem?',
                    value: '',
                    details: ''
                },
                11: {
                    patientKey: {
                        sequence: 11,
                        aadhar: ''
                    },
                    title: 'Any kidney or bladder conditions?',
                    value: '',
                    details: ''
                },
                12: {
                    patientKey: {
                        sequence: 12,
                        aadhar: ''
                    },
                    title: 'Arthritis, gout, chondromalcia patellae or rheumatism?',
                    value: '',
                    details: ''
                },
                13: {
                    patientKey: {
                        sequence: 13,
                        aadhar: ''
                    },
                    title: 'Any metabolic disorder including diabetes, thyroid and adrenal gland disease?',
                    value: '',
                    details: ''
                },
                14: {
                    patientKey: {
                        sequence: 14,
                        aadhar: ''
                    },
                    title: 'Psoriasis, eczema, allergic skin rash or other skin disorder?',
                    value: '',
                    details: ''
                },
                15: {
                    patientKey: {
                        sequence: 15,
                        aadhar: ''
                    },
                    title: 'Any infectious diseases?',
                    value: '',
                    details: ''
                },
                16: {
                    patientKey: {
                        sequence: 16,
                        aadhar: ''
                    },
                    title: 'Anxiety/depression, mental breakdown or stress related problems?',
                    value: '',
                    details: ''
                },
                17: {
                    patientKey: {
                        sequence: 17,
                        aadhar: ''
                    },
                    title: 'Sleep related issues?',
                    value: '',
                    details: ''
                },
                18: {
                    patientKey: {
                        sequence: 18,
                        aadhar: ''
                    },
                    title: 'Substance misuse (e.g. drugs, steroids)?',
                    value: '',
                    details: ''
                },
                19: {
                    patientKey: {
                        sequence: 19,
                        aadhar: ''
                    },
                    title: 'Any malignancies or cancers?',
                    value: '',
                    details: ''
                },
                20: {
                    patientKey: {
                        sequence: 20,
                        aadhar: ''
                    },
                    title: 'Any operations or surgical procedures?',
                    value: '',
                    details: ''
                },
                21: {
                    patientKey: {
                        sequence: 21,
                        aadhar: ''
                    },
                    title: 'Ear or hearing problems?',
                    value: '',
                    details: ''
                },
                22: {
                    patientKey: {
                        sequence: 22,
                        aadhar: ''
                    },
                    title: 'Have you ever consulted an orthopaedic surgeon, chiropractor, osteopath or physiotherapist?',
                    value: '',
                    details: ''
                },
                23: {
                    patientKey: {
                        sequence: 23,
                        aadhar: ''
                    },
                    title: 'Current treatment. Are you currently attending a hospital/GP for treatment or waiting for an appointment?',
                    value: '',
                    details: ''
                },
                24: {
                    patientKey: {
                        sequence: 24,
                        aadhar: ''
                    },
                    title: 'Any other medical condition we should be aware of?',
                    value: '',
                    details: ''
                },
                25: {
                    patientKey: {
                        sequence: 25,
                        aadhar: ''
                    },
                    title: 'Allergies: Do you have any known allergies or do you have any adverse reaction to drugs or medication?',
                    value: '',
                    details: ''
                },
                26: {
                    patientKey: {
                        sequence: 26,
                        aadhar: ''
                    },
                    title: 'Do you currently take any medication?',
                    value: '',
                    details: ''
                },
                27: {
                    patientKey: {
                        sequence: 27,
                        aadhar: ''
                    },
                    title: 'Ear or hearing problems?',
                    value: '',
                    details: ''
                },
            }
        }
    }

    onFinish = (data) => {
        data.dob = data.dob.format('YYYY-MM-DD')
        let history = [];
        let aadhar = data.aadhar;
        Object.keys(this.state.medical_hist).map(k => {
            let item = this.state.medical_hist[k];
            item.patientKey['aadhar'] = aadhar;
            history.push(item);
        });
        data['history'] = history
        console.log(data);
        fetch('https://cors-everywhere-me.herokuapp.com/cowin-env-1.eba-eg2emyiq.us-east-2.elasticbeanstalk.com/patient/save', {
            method: 'post',
            headers: {
                'Accept': 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((responce) => {
            if (responce.status === 200) {
                message.success('Data Saved Successfully');
                this.formRef.current.resetFields();
            } else {
                message.error('Data Saving Failed');
            }
        }
        );
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    enterLoading = index => {
        this.setState(({ loading }) => {
            const newLoading = [...loading];
            newLoading[index] = true;

            return {
                loading: newLoading,
            };
        });
    }

    medicalHistory = (k, type) => event => {
        let history = this.state.medical_hist;
        if (type === 'answer') {
            history[k].value = event.target.value;
        } else {
            history[k].details = event.target.value;
        }
        this.setState({ medical_hist: history });
    };

    componentDidMount() {
        console.log(this.props.patientData);
        if (this.props.patientData) {
            this.formRef.current.setFieldsValue({
                name: this.props.patientData.name,
                aadhar: this.props.patientData.aadhar,
                address: this.props.patientData.address,
                blood_group: this.props.patientData.blood_group,
                category: this.props.patientData.category,
                contact: this.props.patientData.contact,
                contact_no: this.props.patientData.contact_no,
                // dob: this.props.patientData.dob,
                e_address: this.props.patientData.e_address,
                email: this.props.patientData.email,
                email_id: this.props.patientData.email_id,
                gender: this.props.patientData.gender,
                insurance_no: this.props.patientData.insurance_no,
                insurance_pro: this.props.patientData.insurance_pro,
                marital: this.props.patientData.marital,
                vaccine_batch_no: this.props.patientData.vaccine_batch_no,
                vaccine_type: this.props.patientData.vaccine_type,
                // dose_1: this.props.patientData.dose_1,
                // dose_2: this.props.patientData.dose_2
            });
            let history = this.state.medical_hist;
            this.props.patientData.history.map((item, i) => {
                history[i + 1] = item;
            });
            this.setState({ medical_hist: history });
        }
    }

    render() {
        const config = {
            rules: [
                {
                    type: 'object',
                    required: true,
                    message: 'Please select time!',
                },
            ],
        };


        return (

            <div className="home_container"><br></br>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                    <Card title="1. Patient Information" bordered={true}>
                        <Row gutter={24}>
                            <Col span={10} >
                                <Form.Item name="name" label="Name">
                                    <Input placeholder="Name of the Person" prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={10} >
                                <Form.Item name="aadhar" label="Aadhar No:" rules={[{ required: true }]}>
                                    <Input placeholder="Aadhar No" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={24}>
                            <Col span={10}>
                                <Form.Item name="blood_group" label="Blood Group:" >
                                    <Input placeholder="Blood Group" prefix={<HeartOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={10}>
                                <Form.Item name="gender" label="Select Gender:" >
                                    <Radio.Group name="radiogroup">
                                        <Radio value='male'>Male</Radio>
                                        <Radio value='female'>Female</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={24}>
                            <Col span={10}>
                                <Form.Item label="Date Of Birth: " name="dob" {...config}>
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                            <Col span={10}>
                                <Form.Item name="marital" label="Marital Status:">
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Marital Status"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="Single">Single</Option>
                                        <Option value="Married">Married</Option>
                                        <Option value="Separated">Separated</Option>
                                        <Option value="Divorced">Divorced</Option>
                                        <Option value="Other">Other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col span={10}>
                                <Form.Item name="category" label="Category:" >
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Category"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="General">General</Option>
                                        <Option value="OBC">OBC</Option>
                                        <Option value="SC/ST">SC/ST</Option>
                                        <Option value="Other">Other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>


                    {this.props.patientData ? 
                        <Card title="Vaccine Details" bordered={true}>
                        <Row gutter={24}>
                        <Col span={10}>
                            <Form.Item name="vaccine_type" label="Vaccine Type:" rules={[{ required: true }]}>
                                    <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Vaccine Type"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Covaxin">Covaxin</Option>
                                    <Option value="Covishield">Covishield</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={10} >
                                <Form.Item name="vaccine_batch_no" label="Vaccine Batch No:" rules={[{ required: true }]}>
                                    <Input placeholder="Vaccine Batch No"  style={{ width: 200 }} />
                                </Form.Item>
                            </Col>

                            <Col span={10} >
                                <Form.Item name="dose_1" label="Dose 1:" rules={[{ required: true }]}>
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                            <Col span={10} >
                                <Form.Item name="dose_2" label="Dose 2:" rules={[{ required: true }]}>
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>
                    : ""}

                    <Card title="2. Patient Address and Contact Information" bordered={true}>
                        <Row gutter={24}>
                            <Col span={10} >
                                <Form.Item name="contact" label="Contact Number:" >
                                    <Input placeholder="Enter Contact Number" prefix={<MobileOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={10} >
                                <Form.Item name="email" label="Email ID:" >
                                    <Input placeholder="Enter Email ID" prefix={<MailOutlined />} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={24}>
                            <Col span={10} >
                                <Form.Item name="address" label="Enter Adress:" >
                                    <Input size="large" prefix={<IdcardOutlined />} />
                                </Form.Item>
                            </Col>
                            {/* <Col span={10} >
                                <Form.Item label="Photo" name="photo" rules={[{ required: true }]}>
                                    <Upload >
                                        <Button icon={<UploadOutlined />}>Upload Photo</Button>
                                    </Upload>
                                </Form.Item>
                            </Col> */}
                        </Row>
                    </Card>

                    <Card title="3. Emergency Contact/Next of Kin Information" bordered={true}>
                        <Row gutter={24}>
                            <Col span={10} >
                                <Form.Item name="contact_no" label="Contact Number:" >
                                    <Input placeholder="Enter Contact Number" prefix={<MobileOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={10} >
                                <Form.Item name="email_id" label="Email ID:" >
                                    <Input placeholder="Enter Email ID" prefix={<MailOutlined />} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={24}>
                            <Col span={10} >
                                <Form.Item name="e_address" label="Enter Adress:">
                                    <Input size="large" prefix={<IdcardOutlined />} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>

                    <Card title="4. Private Medical Insurance and Current Employer Information (The Patient is responsible for making all claims with their insurer)" bordered={true}>
                        <Row gutter={24}>
                            <Col span={10} >
                                <Form.Item name="insurance_no" label="Insurance Number:" >
                                    <Input placeholder="Enter Insurance Number" prefix={<MobileOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col span={10} >
                                <Form.Item name="insurance_pro" label="Insurance Provider:" >
                                    <Input size="large" placeholder="Enter Insurance Provider" prefix={<IdcardOutlined />} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>

                    <Card title="5. Patient Summary Medical History" bordered={true}>
                        <Row gutter={24}>
                            <Col span={20} style={{ 'textAlign': 'left' }}>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={Object.keys(this.state.medical_hist)}
                                    renderItem={(k, i) => (
                                        <List.Item
                                            actions={[
                                                <Radio.Group value={this.state.medical_hist[k].value} name="radiogroup" onChange={this.medicalHistory(k, 'answer')}>
                                                    <Radio value='yes'>Yes</Radio>
                                                    <Radio value='no'>No</Radio>
                                                </Radio.Group>,
                                                <Input value={this.state.medical_hist[k].details} onChange={this.medicalHistory(k, 'details')} size="large" style={{ width: '400px' }} placeholder="If answered ‘yes’ please give details." />]
                                            }>
                                            <List.Item.Meta title={this.state.medical_hist[k].title} />
                                        </List.Item>
                                    )}
                                />
                            </Col>
                        </Row>
                    </Card>

                    <Row gutter={24}>
                        <Col span={17} >
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                <Button htmlType="button" onClick={this.onReset}>
                                    Reset
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Tag icon={<TwitterOutlined />} color="#55acee"></Tag>
                    <Tag icon={<YoutubeOutlined />} color="#cd201f"></Tag>
                    <Tag icon={<FacebookOutlined />} color="#3b5999"></Tag>
                    <Tag icon={<LinkedinOutlined />} color="#55acee"></Tag>

                </Form>

            </div>
        );
    }
}