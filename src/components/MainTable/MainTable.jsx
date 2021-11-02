import React, { useState } from 'react'
import { Table, Tag, Space, Typography, Input, Button, Modal } from 'antd'
import t from './MainTable.module.css'
import CreateStudent from '../CreateStudent/CreateStudent'
import { instance } from '../../services/instance'
const { Search } = Input

const MainTable = ({ students, setStudents, setSearchName }) => {

  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const [name, setName] = useState('')
  const [Telegram, setTelegram] = useState('')
  const [Instagram, setInstagram] = useState('')
  const [date, setDate] = useState('')
  const [login, setLogin] = useState('')
  const [modules, setModules] = useState([])

  console.log(name, Telegram, Instagram, date, login, module)

  async function handleOk() {
    setConfirmLoading(true)
    try {
      const response = await instance.post(`/students/create`, {
        name,
        Telegram,
        Instagram,
        date,
        login,
        module
      })
      setStudents(prev => [...prev, response.data])
    }
    catch (e) {
      console.log(e)
    }
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const dataSource = students.map(item => ({ ...item, key: item._id }))

  const columns = [
    {
      title: 'Имя Фамилия',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Telegram',
      dataIndex: 'Telegram',
      key: 'Telegram',
    },
    {
      title: 'Instagram',
      dataIndex: 'Instagram',
      key: 'Instagram',
    },
    {
      title: 'Логин',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'Название модуля',
      key: 'module',
      dataIndex: 'module',
      render: module => (
        <>
          {module.map(tag => {
            let color = tag.length > 6 ? 'volcano' : 'grey';
            if (tag === "React") {
              color = 'cyan';
            }
            if (tag === "JS") {
              color = 'violet';
            }
            if (tag === "NODE") {
              color = 'green';
            }
            if (tag === "Базы данных") {
              color = 'yellow';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      filters: [
        {
          text: 'HTML/CSS',
          value: 'HTML/CSS'
        },
        {
          text: 'JS',
          value: 'JS'
        },
        {
          text: 'React',
          value: 'React'
        },
        {
          text: 'NODE',
          value: 'NODE'
        },
        {
          text: 'Базы данных',
          value: 'Базы данных'
        }
      ],
      onFilter: (value, item) => item.module.includes(value)
    },
    {
      title: 'Дата старта',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    },
    {
      title: 'Действие',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Пригласить {record.name}</a>
          <a>Удалить</a>
        </Space>
      ),
    },
  ]

  return (
    <>
      <div className={t.top}>
        <Typography.Title level={3}>Таблица пользователей</Typography.Title>
        <div className={t.topRight} >
          <Button type="primary" onClick={() => setVisible(true)} >Добавить студента</Button>
          <Space direction="vertical">
            <Search placeholder="Поиск" onChange={event => setSearchName(event.target.value)} style={{ width: 200 }} />
          </Space>
        </div>
      </div>
      <Modal
        visible={visible}
        setVisible={setVisible}
        title="Добавить студента"
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText={'Отмена'}
        okText={'Готово'}
        width={350}
      >
        <CreateStudent
          name={name} setName={setName}
          Telegram={Telegram} setTelegram={setTelegram}
          Instagram={Instagram} setInstagram={setInstagram}
          date={date} setDate={setDate}
          login={login} setLogin={setLogin}
          modules={modules} setModules={setModules}
        />
      </Modal>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          defaultPageSize: '5',
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 15, 20],
          showQuickJumper: true,
        }
        }
      />
    </>
  )
}

export default MainTable