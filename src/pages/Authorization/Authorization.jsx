import React, { useContext } from 'react'
import { Form, Input, Button, Checkbox, Modal, notification, Image } from 'antd'
import { FrownOutlined, SmileOutlined } from '@ant-design/icons'
import a from './Authorization.module.css'
import { instance } from '../../services/instance'
import { useState } from 'react/cjs/react.development'
import FormItem from 'antd/lib/form/FormItem'
import { AppContext } from '../../context/context'
import Loader from '../../components/Loader/Loader'
import developer from '../../Assets/Images/dev.jpeg'


const Authorization = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [fetching, setFetching] = useState(false)
    const [user, setUser] = useState('')
    const { isAuth, setIsAuth } = useContext(AppContext)


    async function userAuth(values) {
        setFetching(true)
        try {
            const response = await instance.post(`/auth`, {
                email: `${values.login}`,
                password: `${values.pass}`
            })
            if (response.data.token === null) {
                openNotification(response.data.message)
            } else {
                console.log(response.data.token)
                setUser(response.data.user)
                localStorage.setItem('token', response.data.token)
                setIsAuth(true)
            }
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setFetching(false)
        }

    }

    async function createUser() {
        setFetching(true)
        try {
            const response = await instance.post(`users/registration`, {
                email,
                password
            })
            createNotificationSuccess()
        } catch (e) {
            createNotificationError(e)
        }
        finally {
            setFetching(false)
            setEmail('')
            setPassword('')
            setVisible(false)
            setConfirmLoading(false)
        }
    }

    const openNotification = (message) => {
        notification.open({
            message: 'Ошибка авторизации',
            description:
                `${message}`,
            icon: <FrownOutlined style={{ color: '#29625f' }} />,
        })
    }

    const createNotificationError = (message) => {
        notification.open({
            message: 'Введены неверные данные',
            description:
                `${message}`,
            icon: <FrownOutlined style={{ color: '#29625f' }} />,
        })
    }

    const createNotificationSuccess = () => {
        notification.open({
            message: 'Вы успешно зарегистрированы!',
            icon: <SmileOutlined style={{ color: '#29625f' }} />,
        })
    }

    const handleCancel = () => {
        setVisible(false)
    }

    return (
        <>
            {fetching
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '250px' }}><Loader/></div>
                : <>
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
                            <a className={a.loginForgot}>Забыли пароль?</a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" >
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
                    {/* <Image width={200} src={developer}/> */}
                </>
            }

        </>
    );
}

export default Authorization