import React, { useState } from 'react'
import { Input, Typography, Row, Col } from 'antd'
import { TwitterPicker } from 'react-color'

const CreateModule = () => {

    const [block, setBlock] = useState('')
    const [color,setColor] = useState('#FF6900') 
    console.log(color,block)   

    return (
        <>
            <Typography.Title level={5}>Название:</Typography.Title>
            <Input value={block} onChange={event => setBlock(event.target.value)} style={{ width: 275 }} />
            <Typography.Title level={5}>Цвет:</Typography.Title>
            <Row>
                <Col>
                <TwitterPicker
                color={color}
                onChangeComplete={color => setColor(color)}
                />             
                </Col>
            </Row>
        </>
    )
}

export default CreateModule
