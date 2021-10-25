import { Table, Tag, Space, Typography, Input, Button} from 'antd'
import t from './MainTable.module.css'
const { Search } = Input

const MainTable = () => {

  const onSearch = value => console.log(value)

  let users = [
    {
      id: Date.now(),
      name: 'pokemon',
      Telegram: '@pokemon',
      Instagram: '@pokemon',
      date: '01.11.2019',
      login: 'pokemon.tut',
      module: ['HTML/CSS']
    },
    {
      id: Date.now() + 18,
      name: 'pokemon',
      Telegram: '@pokemon',
      Instagram: '@pokemon',
      date: '11.12.2020',
      login: 'pokemon.tut',
      module: ['React', 'JS', 'HTML/CSS']
    },
    {
      id: Date.now() + 17,
      name: 'pokemon',
      Telegram: '@pokemon',
      Instagram: '@pokemon',
      date: '11.12.2020',
      login: 'pokemon.tut',
      module: ['React', 'JS', 'HTML/CSS']
    },
    {
      id: Date.now() + 16,
      name: 'pokemon',
      Telegram: '@pokemon',
      Instagram: '@pokemon',
      date: '11.12.2020',
      login: 'pokemon.tut',
      module: ['React', 'JS', 'HTML/CSS']
    },
    {
      id: Date.now() + 15,
      name: 'pokemon',
      Telegram: '@pokemon',
      Instagram: '@pokemon',
      date: '11.12.2020',
      login: 'pokemon.tut',
      module: ['React', 'JS', 'HTML/CSS']
    },
    {
      id: Date.now() + 14,
      name: 'pokemon',
      Telegram: '@pokemon',
      Instagram: '@pokemon',
      date: '11.12.2020',
      login: 'pokemon.tut',
      module: ['React', 'JS', 'HTML/CSS']
    },
    {
      id: Date.now() + 13,
      name: 'pokemon',
      Telegram: '@pokemon',
      Instagram: '@pokemon',
      date: '11.12.2020',
      login: 'pokemon.tut',
      module: ['React', 'JS', 'HTML/CSS']
    },
    {
      id: Date.now() + 12,
      name: 'pokemon',
      Telegram: '@pokemon',
      Instagram: '@pokemon',
      date: '11.12.2020',
      login: 'pokemon.tut',
      module: ['React', 'JS', 'HTML/CSS']
    },
    {
      id: Date.now() + 11,
      name: 'pokemon',
      Telegram: '@pokemon',
      Instagram: '@pokemon',
      date: '11.12.2020',
      login: 'pokemon.tut',
      module: ['React', 'JS', 'HTML/CSS']
    },
    {
      id: Date.now() + 2,
      name: 'okemon',
      Telegram: '@okemon',
      Instagram: '@okemon',
      login: 'okemon.tut',
      date: '05.12.2021',
      module: ['Node', 'Базы данных']
    }
  ]

  const dataSource = users.map(item => ({ ...item, key: item.id }))

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
        <Button type="primary">Добавить студента</Button>
        <Space direction="vertical">
          <Search placeholder="Поиск" onSearch={onSearch} style={{ width: 200 }} />
        </Space>
        </div>        
      </div>
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
