import React, { useState } from 'react'
import { Table, Tag, Space, Typography, Input, Button, Modal } from 'antd'
import t from './MainTable.module.css'
import CreateStudent from '../CreateStudent/CreateStudent'
const { Search } = Input

const MainTable = ({students}) => {

  const onSearch = value => console.log(value)
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
            if (tag === 'React') {
              color = 'cyan';
            }
            if (tag === 'JS') {
              color = 'violet';
            }
            if (tag === 'Node') {
              color = 'green';
            }
            if (tag === 'Базы данных') {
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
          text: 'Node',
          value: 'Node'
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
            <Search placeholder="Поиск" onSearch={onSearch} style={{ width: 200 }} />
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
        <CreateStudent />
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
