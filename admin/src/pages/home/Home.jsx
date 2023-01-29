import React from 'react'
import "./Home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import NavBar from "../../components/navbar/Navbar"
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'  
import Chart from '../../components/chart/Chart'
import TableList from '../../components/table/TableList'

const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <NavBar />
          <div className="widgets">
            <Widget type="user" />
            <Widget  type="order"/>
            <Widget  type="earning"/>
            <Widget  type="balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart aspect={2 / 1} title="Last 6 Months (revenue)"/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <TableList />
          </div>
        </div>
    </div>
  )
}

export default Home