import "./index.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>300){
                setUpBtn(true)
            }else{
                setUpBtn(false)
            }
        })
    },[])
    let [UpBtn,setUpBtn] = useState(false)
    return (
        <div className="container" id="up">
            <Header />
            <div className="line"/>
            <Hero />
            <div className="line"/>
            <Main />
            <div className="line"/>
            <Contact />
            <div className="line"/>
            <Footer />
            <a href="#up" style={{opacity: UpBtn ? 1 : 0 ,transition: "1s"}}>
                <button className="icon-keyboard_arrow_up"/>
            </a>
        </div>
    );
}

export default App;
