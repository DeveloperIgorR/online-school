import React from 'react'
import { Form, Input, Button, Checkbox, Modal } from 'antd'
import a from './Authorization.module.css'
import { instance } from '../../services/instance'
import { useState } from 'react/cjs/react.development'
import FormItem from 'antd/lib/form/FormItem'


const Authorization = () => {

    const [email,setEmail] = useState('')
    const [password,setPasword] = useState('')
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const handleCancel = () => {
        setVisible(false)
    }

    async function userAuth() {
        const response = await instance.post()
    }

    async function createUser() {
        const response = await instance.post()
    }

    return (
        <>
            <h1 className={a.name}>ReactDevelopersSchool</h1>
            <h2 className={a.in}>Вход в личный кабинет</h2>
            <Form
                name="normal_login"
                className={a.loginForm}
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="Логин:"
                    rules={[{ required: true, message: 'Введите ваш Логин!' }]}
                >
                    <Input
                        placeholder="Логин"
                    />
                </Form.Item>

                <Form.Item
                    name="Пароль:"
                    rules={[{ required: true, message: 'Введите ваш Пароль!' }]}
                >
                    <Input
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>
                    <a>Забыли пароль?</a>
                </Form.Item>

                <Form.Item>
                    <Button onClick={() => userAuth()} type="primary" htmlType="submit">
                        Войти
                    </Button>
                    Или
                    <a onClick={() => setVisible(true)}> Зарегистрироваться!</a>
                </Form.Item>
            </Form>
            <Modal
                visible={visible}
                setVisible={setVisible}
                title="Зарегистрироваться"
                onOk={createUser}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                cancelText={'Отмена'}
                okText={'Готово'}
                width={350}
            >
                <FormItem>
                    <Input placeholder="Введите email" />
                </FormItem>
                <FormItem>
                    <Input placeholder="Введите пароль" />
                </FormItem>

            </Modal>
        </>
    );
}

export default Authorization