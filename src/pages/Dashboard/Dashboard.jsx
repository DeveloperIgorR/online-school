import { Layout, Menu, Breadcrumb, Row, Col  } from 'antd'
import d from './Dashboard.module.css'
import {  
  BellOutlined,
  
} from '@ant-design/icons'
import { useState } from 'react'
import TopHeader from '../../components/Header/Header'
import MainTable from '../../components/MainTable/MainTable'


const Dashboard = () => {
    const { Header, Content, Footer, Sider } = Layout
    const { SubMenu } = Menu
    const[collapsed, onCollapse] = useState(false)

    
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div  className={d.logo}>
            <h2>ReactDevelopersSchool</h2>
          </div>
          <Menu  theme="dark" defaultSelectedKeys={['3']} mode="inline">
            <Menu.Item ></Menu.Item>            
            <SubMenu key="sub1" title="Все пользователи">
              <Menu.Item key="3">Динамика студентов</Menu.Item>
              <Menu.Item key="4">Рейтинг благодарности</Menu.Item>              
            </SubMenu>
            <SubMenu key="sub2" title="Модули">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="Теория">
              <Menu.Item key="9">Team 1</Menu.Item>
              <Menu.Item key="10">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="Задачи">
              <Menu.Item key="11">Team 1</Menu.Item>
              <Menu.Item key="12">Team 2</Menu.Item>
            </SubMenu>            
            <SubMenu key="sub5" title="Чеклисты">
              <Menu.Item key="13">Team 1</Menu.Item>
              <Menu.Item key="14">Team 2</Menu.Item>
            </SubMenu>            
          </Menu>
        </Sider>
        <Layout className={d.siteLayout}>
          <Header className={d.siteLayoutBackground}>
            <TopHeader/>          
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Row>
                <Col xs={24} md={{span:12, offset:6}}>
                   <MainTable/>
                </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Made by ©DIR</Footer>
        </Layout>
      </Layout>
    )
}

export default Dashboard
