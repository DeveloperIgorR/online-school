import React from 'react'
import { Input, Typography, Select } from 'antd'
import { useState } from 'react/cjs/react.development'
const { Option } = Select

const CreateStudent = () => {

    const [name, setName] = useState('')
    const [telegram, setTelegram] = useState('')
    const [instagram, setInstagram] = useState('')
    const [date, setDate] = useState('')
    const [login, setLogin] = useState('')
    const [module, setModule] = useState([])

    return (
        <>
            <Typography.Title level={5}>Имя Фамилия:</Typography.Title>
            <Input style={{ width: 300 }} value={name} onChange={event => setName(event.target.value)} />
            <Typography.Title level={5}>Telegram:</Typography.Title>
            <Input style={{ width: 300 }} value={telegram} onChange={event => setTelegram(event.target.value)} />
            <Typography.Title level={5}>Instagram:</Typography.Title>
            <Input style={{ width: 300 }} value={instagram} onChange={event => setInstagram(event.target.value)} />
            <Typography.Title level={5}>Date of start:</Typography.Title>
            <Input style={{ width: 300 }} value={date} onChange={event => setDate(event.target.value)} />
            <Typography.Title level={5}>Mail:</Typography.Title>
            <Input style={{ width: 300 }} value={login} onChange={event => setLogin(event.target.value)} />
            <Typography.Title level={5}>Модуль</Typography.Title>
            <Input.Group value={module} >
                <Select style={{ width: 300 }}>
                    <Option value="HTML/CSS">HTML/CSS</Option>
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
