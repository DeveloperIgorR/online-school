import React, { useState } from 'react'
import { Badge, Card, Typography, Row, Col, Button, Modal } from 'antd'
import m from './Modules.module.css'
import CreateModule from '../../components/CreateModule.js/CreateModule'

const Modules = () => {

    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)

    const handleOk = () => {
        setConfirmLoading(true)
        setTimeout(() => {
            setVisible(false)
            setConfirmLoading(false)
        }, 2000)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    return (
        <>
            <div className={m.title}>
                <Typography.Title level={3} >Модули</Typography.Title>
                <Button type="primary" onClick={() => setVisible(true)} >Добавить модуль</Button>
            </div>

            <Row justify="start" align="middle" gutter={[8, 32]}>
                <Col xs={{ span: 5, offset: 1 }} md={{ span: 5, offset: 2 }}>
                    <Badge.Ribbon color="volcano">
                        <Card title="HTML/CSS" size="default">

                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} md={{ span: 5, offset: 2 }}>
                    <Badge.Ribbon color="violet">
                        <Card title="JS" size="default">

                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} md={{ span: 5, offset: 2 }}>
                    <Badge.Ribbon color="cyan">
                        <Card title="React" size="default">

                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} md={{ span: 5, offset: 2 }}>
                    <Badge.Ribbon color="green">
                        <Card title="Node" size="default">

                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} md={{ span: 5, offset: 2 }}>
                    <Badge.Ribbon color="yellow">
                        <Card title="Базы данных" size="default">

                        </Card>
                    </Badge.Ribbon>
                </Col>
            </Row>
            <Modal
                visible={visible}
                setVisible={setVisible}
                title="Добавить модуль"
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                cancelText={'Отмена'}
                okText={'Готово'}
                width={320}
            >
                <CreateModule />
            </Modal>
        </>
    )
}

export default Modules
