import { Table, Tag, Space } from 'antd'

const MainTable = () => {

    let users = [
        {
            id: Date.now(),
            name:'pokemon',
            Telegram: '@pokemon',
            Instagram:'@pokemon',
            date: '01.11.2019',
            login:'pokemon.tut',
            module:['HTML/CSS']
        },
        {
            id: Date.now(),
            name:'pokemon',
            Telegram: '@pokemon',
            Instagram:'@pokemon',
            date: '11.12.2020',
            login:'pokemon.tut',
            module:['React','JS','HTML/CSS']
        },
        {
            id: Date.now(),
            name:'okemon',
            Telegram: '@okemon',
            Instagram:'@okemon',
            login:'okemon.tut',
            date: '05.12.2021',
            module:['Node','Базы данных']
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
                let color = tag.length > 6 ? 'volcano' : 'grey';                  
                if (tag === 'React') {
                  color = 'geekblue';
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
              text:'HTML/CSS',
              value:'HTML/CSS'
            },
            {
              text:'JS',
              value:'JS'
            },
            {
              text:'React',
              value:'React'
            },
            {
              text:'Node',
              value:'Node'
            },
            {
              text:'Базы данных',
              value:'Базы данных'
            }            
          ],
          onFilter: (value, item) => item.module.includes(value)
        },
        {
          title: 'Дата старта',
          dataIndex: 'date',
          key: 'date',
          sorter:(a,b) => new Date(a.date).getTime()- new Date(b.date).getTime()
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
