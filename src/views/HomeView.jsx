import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Main from "../components/Main"
import Intro from "../components/Intro"
import Diary from "../components/Diary"
import Log from "../components/Log"
import Profile from "../components/Profile"

const HomeView = () => {
    return (
    <>
        <Header />
            <Main>
                <Intro />
                <Diary />
                <Log />
                <Profile />
            </Main>
        <Footer />
    </>
    );
};

export default HomeView;