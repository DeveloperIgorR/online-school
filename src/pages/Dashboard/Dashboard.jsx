import { Layout, Menu, Breadcrumb } from 'antd'
import {  
  BellOutlined,
  
} from '@ant-design/icons'
import { useState } from 'react'

const Dashboard = () => {
    const { Header, Content, Footer, Sider } = Layout
    const { SubMenu } = Menu
    const[collapsed, onCollapse] = useState(false)

    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<BellOutlined />}>
              ReactDevelopersSchool
            </Menu.Item>            
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
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Made by ©DIR</Footer>
        </Layout>
      </Layout>
    )
}

export default Dashboard
