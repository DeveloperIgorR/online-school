import React, { useState } from 'react'
import { Badge, Card, Typography, Row, Col, Button, Modal } from 'antd'
import m from './Modules.module.css'
import CreateModule from '../../components/CreateModule.js/CreateModule'

const Modules = () => {

    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const modules = [{ title: 'HTML/CSS', color: 'volcano' }, { title: 'JS', color: 'violet' },
    { title: 'React', color: 'cyan' }, { title: 'Node', color: 'green' }, { title: 'Базы данных', color: 'yellow' }]

    const handleOk = () => {
        setVisible(false)
        setConfirmLoading(false)
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
                    {modules.map((item) =>
                        <Badge.Ribbon color= {item.color} >
                            <Card title= {item.title} size="default">                                
                            </Card>
                        </Badge.Ribbon>
                    )}
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
