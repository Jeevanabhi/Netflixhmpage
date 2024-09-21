import React, { useState } from 'react'
import { action } from './assets/constants/constants'
import './App.css'
import Navbar from './navbar'
import Banner from './assets/banner'
import Poster from './assets/posters/poster'
import { Toprated ,Horror ,Thrillers} from './assets/constants/constants'



function App() {
 
return <>
        <Navbar></Navbar>
        <Banner/>
        <Poster url = {Toprated}title="Trending"/>
        <Poster url={action}title = "Action"/>
        <Poster url={Horror}title = "Horror"/>
        <Poster url={Thrillers}title = "Thriller"/>
        

        </>
}

export default App
