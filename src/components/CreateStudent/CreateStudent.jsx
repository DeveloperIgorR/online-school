import React from 'react'
import { Input, Typography, Select } from 'antd'
const { Option } = Select

const CreateStudent = (props) => {   

    return (  
        <>
            <Typography.Title level={5}>Имя Фамилия:</Typography.Title>
            <Input style={{ width: 300 }} value={props.name} onChange={event => props.setName(event.target.value)} />
            <Typography.Title level={5}>Telegram:</Typography.Title>
            <Input style={{ width: 300 }} value={props.Telegram} onChange={event => props.setTelegram(event.target.value)} />
            <Typography.Title level={5}>Instagram:</Typography.Title>
            <Input style={{ width: 300 }} value={props.Instagram} onChange={event => props.setInstagram(event.target.value)} />
            <Typography.Title level={5}>Date of start:</Typography.Title>
            <Input style={{ width: 300 }} value={props.date} onChange={event => props.setDate(event.target.value)} />
            <Typography.Title level={5}>Mail:</Typography.Title>
            <Input style={{ width: 300 }} value={props.login} onChange={event => props.setLogin(event.target.value)} />
            <Typography.Title level={5}>Модуль</Typography.Title>
            <Input.Group  onChange={event => props.setModule([...module,event.target.value])} >
                <Select style={{ width: 300 }}>
                    <Option value={"HTML/CSS"}>HTML/CSS</Option>
                    <Option value="JS">JS</Option>
                    <Option value="React">React</Option>
                    <Option value="Node">Node</Option>
                    <Option value="Базы данных">Базы данных</Option>
                </Select>               
            </Input.Group>
        </>
    )
}

export default CreateStudent
