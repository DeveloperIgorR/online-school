import React from "react"
import { Redirect, Route, Switch } from "react-router"
import { useContext } from "react/cjs/react.development"
import { AppContext } from "../../context/context"
import { privateRoutes, publicRoutes } from "./routes"
import { Layout, Menu, Row, Col, Button } from 'antd'
import { ExportOutlined } from '@ant-design/icons'
import d from '../../pages/Dashboard/Dashboard.module.css'
import { Link } from 'react-router-dom'
import TopHeader from '../../components/Header/Header'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const AppRouter = () => {

  const { isAuth, setIsAuth } = useContext(AppContext)

  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null
  }

  const logOut = () => {
    localStorage.clear()
    setIsAuth(false)
  }

  return (
    isAuth || isAuthenticated()
      ?
      <Layout style={{ minHeight: '100vh' }}>
        <Sider  >
          <div className={d.logo}>
            <h2>ReactDevelopers</h2>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" title="Все пользователи">
              <Menu.Item key="1">Динамика студентов</Menu.Item>
              <Menu.Item key="2">Рейтинг благодарности</Menu.Item>
            </SubMenu>
            <Menu.Item key="3" title="Модули">Модули<Link to='/modules' /></Menu.Item>
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
                <Switch>
                  {privateRoutes.map(route =>
                    <Route
                      component={route.component}
                      path={route.path}
                      exact={route.exact}
                      key={route.path} />
                  )}
                  <Redirect to='/' />
                </Switch>
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Made by ©DIR</Footer>
        </Layout>
      </Layout>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path} />
        )}
        <Redirect to='/auth' />
      </Switch>
  )
}

export default AppRouter
