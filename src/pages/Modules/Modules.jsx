import { Badge, Card, Typography, Row, Col } from 'antd'
import m from './Modules.module.css'

const Modules = () => {
    return (
       <>
        <Typography.Title level={3} className={m.title}>Модули</Typography.Title>
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
</>
    )
}

export default Modules
