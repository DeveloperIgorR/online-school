import React, { useState } from 'react'
import { Input, Typography, Checkbox, Row, Col } from 'antd'

const CreateModule = () => {

    const [check,setCheck] = useState(false)    

    return (
        <>
            <Typography.Title level={5}>Название:</Typography.Title>
            <Input style={{ width: 260 }} />
            <Typography.Title level={5}>Цвет:</Typography.Title>
            <Row>
                <Col>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>
                <Checkbox onChange={() => setCheck(true)}></Checkbox>                
                </Col>
            </Row>
        </>
    )
}

export default CreateModule
