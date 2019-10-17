import React from "react";
import Header from "../components/Header";
import StartButton from "../components/StartButton";
import Welcome from "../components/Welcome";
import "./Home.css";



function Home (){
    return(
        <>
        <Header />
        <StartButton />
        <Welcome />
        </>
    )
}

export default Home;