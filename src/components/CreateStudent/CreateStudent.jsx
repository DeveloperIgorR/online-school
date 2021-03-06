import React from 'react'
import { Input, Typography, Select } from 'antd'

const CreateStudent = (props) => {

    const options = ["HTML/CSS", "JS", "React", "Node", "Базы данных"]
    const filteredOptions = options.filter(o => !props.modules.includes(o))
    console.log(filteredOptions)
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

            <Typography.Title level={5}>Модули</Typography.Title>
            <Select
                mode="multiple" placeholder="Добавить модуль"
                value={props.modules}
                onChange={value => props.setModules(value)}
                style={{ width: 300 }}
                >

                {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                        {item}
                    </Select.Option>
                ))}

            </Select>

        </>
    )
}

export default CreateStudent
