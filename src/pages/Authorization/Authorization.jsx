import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
// import { UserOutlined, LockOutlined } from '@ant-design/icons'
import a from './Authorization.module.css'


const Authorization = () => {
    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };

    return (
        <>
            <h1 className={a.name}>ReactDevelopersSchool</h1>
            <h2 className={a.in}>Вход в личный кабинет</h2>
            <Form
                name="normal_login"
                className={a.loginForm}
                initialValues={{ remember: true }}
            // onFinish={onFinish}
            >
                <Form.Item
                    name="Логин:"
                    rules={[{ required: true, message: 'Введите ваш Логин!' }]}
                >
                    <Input
                        // prefix={<UserOutlined />}
                        placeholder="Логин"
                    />
                </Form.Item>

                <Form.Item
                    name="Пароль:"
                    rules={[{ required: true, message: 'Введите ваш Пароль!' }]}
                >
                    <Input
                        // prefix={<LockOutlined />}
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
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                    Или
                    <a >  Зарегистрироваться!</a>
                </Form.Item>
            </Form>
        </>
    );
}

export default Authorization
