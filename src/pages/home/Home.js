import React from 'react'
import Coursel from '../../components/couresel/Coursel'
import Topbar from '../../components/topbar/Topbar'
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="navbartop">

            
             <Topbar />
            </div>
             <div className="carouseltop">
             <Coursel/>
             </div>
          
          <div className="heading__top">
              Top Rated
          </div>
            
        </div>
    )
}

export default Home
