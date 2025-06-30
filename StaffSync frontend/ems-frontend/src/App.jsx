import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import DepartmentComponent from './components/DepartmentComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* url: http://localhost:3000 */}
          <Route path='/' element= {<ListEmployeeComponent/>} ></Route>

          {/* url: http://localhost:3000/employees */}
          {/* <Route path='/employees' element= {<ListEmployeeComponent/>} ></Route> */}

          {/* url: http://localhost:3000/add-employee */}
          <Route path='/add-employee' element= {<EmployeeComponent/>} ></Route>

          {/* url: http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element= {<EmployeeComponent/>} ></Route>

          {/* url: http://localhost:3000/departments */}
          <Route path='/departments' element= {<ListDepartmentComponent/>} ></Route>

          {/* url: http://localhost:3000/departments/add-department */}
          <Route path='/add-department' element= {<DepartmentComponent/>} ></Route>

          {/* url: http://localhost:3000/departments/edit-department/1 */}
          <Route path='/edit-department/:id' element= {<DepartmentComponent/>} ></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
