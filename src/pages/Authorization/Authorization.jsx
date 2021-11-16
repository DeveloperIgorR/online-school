import React, { useContext } from 'react'
import { Input,  Modal, notification, Image } from 'antd'
import { FrownOutlined, SmileOutlined } from '@ant-design/icons'
import a from './Authorization.module.css'
import { instance } from '../../services/instance'
import { useState } from 'react/cjs/react.development'
import { AppContext } from '../../context/context'
import Loader from '../../components/Loader/Loader'
import developer from '../../Assets/Images/dev.jpeg'
import LoginForm from '../../components/LoginForm/LoginForm'


const Authorization = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [fetching, setFetching] = useState(false)
    const [user, setUser] = useState('')
    const { isAuth, setIsAuth } = useContext(AppContext)


    async function userAuth({login, pass}) {
        setFetching(true)
        try {
            const response = await instance.post(`/auth`, {
                email: `${login}`,
                password: `${pass}`
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
        setEmail('')
        setPassword('')
    }

    return (
        <>
            {fetching
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '250px' }}><Loader /></div>
                : <>
                    <h1 className={a.name}>ReactDevelopersSchool</h1>
                    <h2 className={a.in}>Вход в личный кабинет</h2>
                    <LoginForm userAuth={userAuth} setVisible={setVisible} />
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
                        <div className={a.reg} >
                            <Input placeholder="Введите email" value={email} onChange={event => setEmail(event.target.value)} />
                        </div>
                        <div>
                            <Input placeholder="Введите пароль" value={password} onChange={event => setPassword(event.target.value)} />
                        </div>
                    </Modal>
                    {/* <Image width={200} src={developer}/> */}
                </>
            }

        </>
    );
}

export default Authorization