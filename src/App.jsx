import { useContext, useEffect, useState } from 'react'
import Login from './components/auth/login'
import EmployeDashboard from './components/dashboard/employeDashboard'
import AdminDashboard from './components/dashboard/adminDashboard'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  const [user, setUser] = useState(null)
  const [LoggInDataUser, setLoggInDataUser] = useState(null)

  const AuthData = useContext(AuthContext)
  useEffect(() => {
    if (AuthData) {
      const LogInData = localStorage.getItem("LoggInUser")
      if (LogInData) {
        const UserData = JSON.parse(LogInData)
        setUser(UserData.role)
        setLoggInDataUser(UserData.data)


      }
    }


  }, [AuthData])


  const LoginHandeler = (email, password) => {
    if (email == 'admin@gmail.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('LoggInUser', JSON.stringify({ role: 'admin'}))
    }
    else if (AuthData) {
      const employee = AuthData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {

        setUser('employee')
        setLoggInDataUser(employee)
        localStorage.setItem('LoggInUser', JSON.stringify({ role: 'employee', data: employee }))
      }

    }

    else {
      alert("invalid crdantial")

    }


  }

  return (

    <>

      {!user ? <Login LoginHandeler={LoginHandeler} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeDashboard changeUser={setUser} data={LoggInDataUser} /> : null)}
      {/* <EmployeDashboard /> */}
      {/* <AdminDashboard /> */}



    </>
  )
}

export default App
