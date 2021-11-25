import React, { useState } from 'react'
import { Layout, Menu, Row, Col, Button } from 'antd'
import { ExportOutlined } from '@ant-design/icons'
import d from './Dashboard.module.css'
import TopHeader from '../../components/Header/Header'
import MainTable from '../../components/MainTable/MainTable'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { AppContext } from '../../context/context'
import AppRouter from '../../components/AppRouter/AppRouter'
import MenuItem from 'antd/lib/menu/MenuItem'

const Dashboard = () => {
  const { Header, Content, Footer, Sider } = Layout
  const { SubMenu } = Menu
  const { isAuth, setIsAuth } = useContext(AppContext)
  const itemsMemu = [
    { name: 'Все пользователи', route: 'user/users' },
    { name: 'Модули', route: 'user/modules' },
    { name: 'Теория', route: 'user/theory' },
    { name: 'Задачи', route: 'user/tasks' },
    { name: 'Чеклисты', route: 'user/checklists' }
  ]

  const logOut = () => {
    localStorage.clear()
    setIsAuth(false)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider  >
        <div className={d.logo}>
          <h2>ReactDevelopers</h2>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {itemsMemu &&
            itemsMemu.map(({ name, route, subItems }, index) =>
              subItems ? (
                <SubMenu key="sub1" title={name}>
                  {subItems &&
                    subItems.map(({ name, route }, index) =>
                      <MenuItem>
                        {name}
                      </MenuItem>
                    )

                  }
                </SubMenu>
              ) : (
                <MenuItem>

                </MenuItem>
              ),
            )}
          <SubMenu key="sub1" title="Все пользователи">
            <Menu.Item key="1">Динамика студентов</Menu.Item>
            <Menu.Item key="2">Рейтинг благодарности</Menu.Item>
          </SubMenu>
          <Menu.Item key="3" title="Модули">Модули<Link to='/user/modules' /></Menu.Item>
          <Menu.Item key="4" title="Теория">Теория</Menu.Item>
          <Menu.Item key="5" title="Задачи">Задачи</Menu.Item>
          <Menu.Item key="6" title="Чеклисты">Чеклисты</Menu.Item>
        </Menu>
        <Button className={d.button} icon={<ExportOutlined />} onClick={() => logOut()}>Выйти</Button>
      </Sider>
      <Layout className={d.siteLayout}>
        <Header className={d.siteLayoutBackground}>
          <TopHeader />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Row>
            <Col xs={24} md={{ span: 20, offset: 2 }}>
              <MainTable />
              <AppRouter />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made by ©DIR</Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard