import React, { useEffect, useState } from 'react'
import MainTable from '../../components/MainTable/MainTable'
import { instance } from '../../services/instance'
import { useContext } from 'react/cjs/react.development'
import { AppContext } from '../../context/context'

const Dashboard = () => {
  
  const [students, setStudents] = useState([])
  const [serchName, setSearchName] = useState('')
  const { isAuth, setIsAuth } = useContext(AppContext)

  useEffect(() => {
    getStudents()
  }, [])

  useEffect(() => {
    getStudentByName(serchName)
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
      const response = await instance.get(`/students/search/${serchName.length !== 0 ? serchName : null}`)
      setStudents(response.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  const logOut = () => {
    localStorage.clear()
    setIsAuth(false)
  }

  return (
    <MainTable
      students={students}
      setStudents={setStudents}
      setSearchName={setSearchName}
    />
  )
}

export default Dashboard