import React from 'react'
import { Form, Input} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
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
                // name="normal_login"
                className={a.loginForm}
                // initialValues={{ remember: true }}
            // onFinish={onFinish}
            >
                

                <Form.Item
                    name="Пароль:"
                    rules={[{ required: true, message: 'Введите ваш Пароль!' }]}
                >
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>

                
            </Form>
        </>
    );
}

export default Authorization
