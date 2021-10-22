import { Table, Tag, Space } from 'antd'

const MainTable = () => {

    let users = [
        {
            id: Date.now(),
            name:'pokemon',
            Telegram: '@pokemon',
            Instagram:'@pokemon',
            date: '31.12.2021',
            login:'pokemon.tut',
            module:['React']
        },
        {
            id: Date.now(),
            name:'okemon',
            Telegram: '@okemon',
            Instagram:'@okemon',
            login:'okemon.tut',
            date: '31.12.2021',
            module:['NodeJS']
        }
    ]

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
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Дата старта',
          dataIndex: 'date',
          key: 'date',
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
        <Table
          columns = {columns}
          dataSource = {users}
        />
    )
}

export default MainTable
