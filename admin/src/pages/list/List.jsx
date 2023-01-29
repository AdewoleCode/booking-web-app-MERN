import React from 'react'
import NavBar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Datatable from '../../components/datatable/DataTable'
import "../../pages/list/List.scss"

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <NavBar />
        <Datatable />
      </div>
    </div>
  )
}

export default List