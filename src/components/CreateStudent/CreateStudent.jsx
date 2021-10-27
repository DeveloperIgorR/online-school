import React from 'react'
import { Input, Typography, Select } from 'antd'
const { Option } = Select

const CreateStudent = () => {

    return (
        <>
            <Typography.Title level={5}>Имя Фамилия:</Typography.Title>
            <Input style={{ width: 300 }} />
            <Typography.Title level={5}>Telegram:</Typography.Title>
            <Input style={{ width: 300 }} />
            <Typography.Title level={5}>Instagram:</Typography.Title>
            <Input style={{ width: 300 }} />
            <Typography.Title level={5}>Mail:</Typography.Title>
            <Input style={{ width: 300 }} />
            <Typography.Title level={5}>Модуль</Typography.Title>
            <Input.Group >
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
