import { Table, Tag, Space } from 'antd'

const MainTable = () => {

    let users = [
        {
            id: Date.now(),
            name:'pokemon',
            Telegram: '@pokemon',
            Instagram:'@pokemon',
            date: '31.12.2021',
            module:['React']
        },
        {
            id: Date.now(),
            name:'okemon',
            Telegram: '@okemon',
            Instagram:'@okemon',
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
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
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
