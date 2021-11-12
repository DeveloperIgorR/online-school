import React, { useContext, useEffect } from 'react'
import { Form, Input, Button, Checkbox, Modal, notification } from 'antd'
import { FrownOutlined } from '@ant-design/icons'
import a from './Authorization.module.css'
import { instance } from '../../services/instance'
import { useState } from 'react/cjs/react.development'
import FormItem from 'antd/lib/form/FormItem'
import { AppContext } from '../../context/context'


const Authorization = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [user, setUser] = useState('')
    const[formValid,setFormValid] = useState(false) 
    const {isAuth, setIsAuth} = useContext(AppContext)  
        
    
    const handleCancel = () => {
        setVisible(false)
    }

    async function userAuth(values) {
        try {            
            const response = await instance.post(`/auth`, {
                email:`${values.login}`,
                password:`${values.pass}`
            })            
            if(response.data.token === null){
                openNotification(response.data.message)
            } else {  
                console.log(response.data.token)   
            setUser(response.data.user)
            localStorage.setItem('token',response.data.token)  
            setIsAuth(true)
            }
        }
        catch (e) {
            console.log(e)
        }
        
    }

    async function createUser() {
        try {
            const response = await instance.post(`users/registration`, {
                email,
                password
            })
            setEmail('')
            setPassword('')
        } catch (e) {
            console.log(e)
        }
        finally {
            setTimeout(() => {
                setVisible(false)
                setConfirmLoading(false)
            })
        }
    }

    const openNotification = (message) => {
        notification.open({
          message: 'Ошибка авторизации',
          description:
            `${message}`,
          icon: <FrownOutlined style={{ color: '#108ee9' }} />,
        })
      }

    return (
        <>
            <h1 className={a.name}>ReactDevelopersSchool</h1>
            <h2 className={a.in}>Вход в личный кабинет</h2>
            <Form
                name="normal_login"
                className={a.loginForm}
                initialValues={{ remember: true }}
                onFinish={userAuth}
            >
                <Form.Item
                    name="login"
                    rules={[{ required: true, message: 'Введите ваш Логин!' }]}
                >
                    <Input
                        placeholder="Логин" 
                    />
                </Form.Item>

                <Form.Item
                    name="pass"
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
                    <Button   type="primary" htmlType="submit">
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
                    <Input placeholder="Введите email" value={email} onChange={event => setEmail(event.target.value)} />
                </FormItem>
                <FormItem>
                    <Input placeholder="Введите пароль" value={password} onChange={event => setPassword(event.target.value)} />
                </FormItem>
            </Modal>
        </>
    );
}

export default Authorization