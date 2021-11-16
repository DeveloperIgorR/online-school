import { Form, Input } from 'antd'

const RegistrationForm = () => {
    return (
        <>
            <Form
                name="normal_login"                
                initialValues={{ remember: true }}
                onFinish={userAuth}                
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Введите ваш email!' }]}
                >
                    <Input
                        placeholder="Введите email"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Введите ваш password!' }]}
                >
                    <Input                        
                        placeholder="Введите пароль"
                    />
                </Form.Item>
                
            </Form>
        </>
    )
}

export default RegistrationForm
