import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import './css/Reservation.css';
import MenuBar from './MenuBar';
import Footer from './Footer';
import { Form, Divider, Input, Button,Radio, DatePicker, Space, Select, } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ScrollTopButton from './ScrollTopButton';

const { Option } = Select;
const { RangePicker } = DatePicker;

function Reservation() {
    const navigate =useNavigate();
    
    const [date, setDate] = useState(null);
    const [startdate, setStartdate] = useState(null);
    const [enddate, setEnddate] = useState(null);
    const [price, setPrice] = useState(1500);

    const [Selected,setSelected]=useState("SUPERIOR");
    const roomSelect = (value) => {
        setSelected(value);
        // Selectlist.map(list => list.room === Selected ? setPrice(list.price): "");
        // console.log(price);
    };

  //예약할방
      const Selectlist =[
        {
            id:1,
            room:"SUPERIOR",
            price:1500

        },
        {
            id:2,
            room:"DELUXE",
            price:2000

        },
        {
            id:3,
            room:"PRIMEIER",
            price:2500

        },
        

    ];

    function onChange(date, dateString) {
        setDate(dateString);
    }
    function onChangeRange(date, dateString) {
        console.log(dateString);
        setStartdate(dateString[0]);
        setEnddate(dateString[1]);
    }

    function onChangePrice(value) {
        setPrice(value);
    }
    const onSubmit = (values) => {
        axios.post(`http://localhost:8080/reservation`,{
            name: values.name,
            phone: values.phone,
            birthday: date,
            gender: values.gender,
            reservationroom: values.reservationroom,
            startdate:startdate,
            enddate:enddate,
            email:values.email,
            price: price,
            

        }).then((result)=>{
            console.log(result);
            if(result){
                alert('예약되었습니다.');
            }
            navigate('/');
        })
        .catch((error)=>{
            console.error(error);
        })
        console.log(values);

        // if (!req.body.name) {
        //     return res.status(400).json({
        //       status: 'error',
        //       error: 'req body cannot be empty',
        //     });
        //   }
    }
  


    // const onSubmit = (values)=>{
    //     axios.post(`http://localhost:8080/reservation`,{
    //         name: values.name,
    //         phone: values.phone,
    //         birthday: date,
    //         gender: values.gender,
    //         reservationroom: values.reservationroom,
    //         startdate:startdate,
    //         enddate:enddate,
    //         email:values.email,
    //         price: price,
           
    //     }).then((result)=>{
    //         console.log(result);
    //         alert('예약이 완료되었습니다.');
    //         navigate(-1);   
    //     })
    //     .catch((error)=>{
    //         console.error(error);
    //     })
    // }
    return (
        <div>
            <MenuBar/>
            {/* 웹반응 895이하일때  */}
            <div className='web_reservation_info'>
                <h2>예약하기</h2>
                <p>
                    인원수 최대 4명까지 입장가능합니다.
                    <br/>호텔 시스템 상 계좌이체만 가능합니다.
                    <br/>계좌번호 1234-5678 City bank  FEATURES
                    
                </p>
            </div >
            <div className='reservation_form'>
                <div className='reservation_info'>
                    <h2>예약하기</h2>
                    <p>
                        인원수 최대 4명까지 입장가능합니다.
                        <br/>호텔 시스템 상 계좌이체만 가능합니다.
                        <br/>계좌번호 1234-5678 City bank  FEATURES
                        
                    </p>
                </div >
                <div className='line'/>
                <Form id='reservForm' onFinish={onSubmit}>
                    <Form.Item name="name" label={<div className="label">이름</div>} 
                        rules={[{ required: true, message: "이름을 입력해 주세요"}]}>
                        <Input placeholder="이름을 입력해 주세요" className="label-input" />
                    </Form.Item>
                    <Divider /> 
                    <Form.Item name="phone" label={<div className="label">전화번호</div>} 
                        rules={[{ required: true, message: "전화번호를 입력해 주세요"}]}>
                        <Input className="label-input" />
                    </Form.Item>    
                    <Divider />
                    <Form.Item name="birthady" label={<div className="label">생년월일</div>}>
                        <Space direction="vertical">
                            <DatePicker onChange={onChange} className="label-input"/>
                        </Space>
                    </Form.Item>
                    <Divider />
                    <Form.Item name="gender" label={<div className="label">성별</div>}>
                        <Radio.Group>
                            <Radio value="female">여성</Radio>
                            <Radio value="male">남성</Radio>
                        </Radio.Group>
                    </Form.Item>
                
                    <Divider />
                    <Form.Item name="reservationdate" label={<div className="label">예약일</div>}>
                    <Space direction="vertical" size={12}>
                    <RangePicker onChange={onChangeRange} className="label-input"/>
                    </Space>
                    </Form.Item>
                    <Divider />
                    <Form.Item name="reservationroom" label={<div className="label">예약할 방</div>}>
                        <Select className="label-input" onChange={roomSelect} value={Selected} defaultValue="SUPERIOR">
                        {Selectlist.map((item) => (
                            <Option value={item.room} key={item.id}>{item.room}</Option>
                        ))}
                        </Select>
                    </Form.Item>
                    <Divider />
                    <Form.Item name="price" label={<div className="label">총가격</div>}>
                        {Selectlist.map(list => list.room === Selected ? <Input className="label-input" key={list.room} prefix="$" value={list.price} onChange={onChangePrice}/> 
                        : "")}
                        {/* <Input prefix="$" value={price}  />  */}
                    </Form.Item>
                    <Divider />
                    <Form.Item name="email" label={<div className="label">이메일</div>} 
                        rules={[{ required: true, message: "이메일을 입력해 주세요"}]}>
                        <Input type="email" className="label-input"/>
                    </Form.Item>    

                    <Form.Item>
                        <Button size="middle" htmlType="submit">예약하기</Button>
                        <Button size="middle" htmlType="reset">취소</Button>
                    </Form.Item>
                    
                
                </Form>
            </div>
            <ScrollTopButton/>
            <Footer/>
        </div>
    );
}

export default Reservation;