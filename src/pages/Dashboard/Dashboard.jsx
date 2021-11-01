import React, { useEffect, useState } from 'react'
import { Layout, Menu, Row, Col } from 'antd'
import d from './Dashboard.module.css'
import TopHeader from '../../components/Header/Header'
import MainTable from '../../components/MainTable/MainTable'
import { Link } from 'react-router-dom'
import { instance } from '../../services/instance'



const Dashboard = () => {
  const { Header, Content, Footer, Sider } = Layout
  const { SubMenu } = Menu
  const [collapsed, onCollapse] = useState(false)
  const [students, setStudents] = useState([])
  const [serchName, setSearchName] = useState('')
  console.log(serchName)

  useEffect(() => {
    getStudents()
  }, [])

  useEffect(() => {
    getStudentByName()
  }, [serchName]) 

  async function getStudents() {
    try {
      const response = await instance.get(`/students`)
      setStudents(response.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  async function getStudentByName(serchName) {
    try {
      const response = await instance.get(`/students/search`,{serchName})
      setStudents(response.data)
    }
    catch (e) {
      console.log(e)
    }
    
  }

  return (
    <Layout style={{minWidth:"300px", minHeight: '100vh' }}>
      <Sider style={{ backgroundColor:"#29625f" }}collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className={d.logo}>
          <h2>ReactDevelopers</h2>
        </div>
        <Menu style={{backgroundColor:"#29625f" }} theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="0" ></Menu.Item>
          <SubMenu key="sub1" title="Все пользователи">
            <Menu.Item key="1">Динамика студентов</Menu.Item>
            <Menu.Item key="2">Рейтинг благодарности</Menu.Item>
          </SubMenu>
          <Menu.Item key="3" title="Модули">Модули<Link to='/modules' /></Menu.Item>
          <Menu.Item key="4" title="Теория">Теория</Menu.Item>
          <Menu.Item key="5" title="Задачи">Задачи</Menu.Item>
          <Menu.Item key="6" title="Чеклисты">Чеклисты</Menu.Item>
        </Menu>
      </Sider>
      <Layout className={d.siteLayout}>
        <Header className={d.siteLayoutBackground}>
          <TopHeader />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Row>
            <Col xs={24} md={{ span: 20, offset: 2 }}>
              <MainTable
                students={students}
                setStudents={setStudents}
                setSearchName={setSearchName}
              />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made by ©DIR</Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard
