import { Form, Input, Button, Checkbox } from 'antd'
import l from './LoginForm.module.css'

const LoginForm = ({userAuth, setVisible}) => {

    const [form] = Form.useForm()
    const onReset = () => {
        form.resetFields()
    }

    return (
        <>
            <Form
                name="normal_login"
                className={l.loginForm}
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

                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Button type="primary" htmlType="submit" onClick={onReset} >
                    Войти
                </Button>
                Или
                <a onClick={() => setVisible(true)}> Зарегистрироваться!</a>

            </Form>
        </>
    )
}

export default LoginForm
