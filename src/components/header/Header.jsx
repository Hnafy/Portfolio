import { useState } from "react";
import "./header.css";

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState("dark");
    if(window.localStorage.getItem("mode")){
        document.body.className = window.localStorage.getItem("mode")
    }
    return (
        <header>
            <button
                className="menu icon-menu"
                onClick={() => setShowModal((e) => !e)}
            />
            <div></div>
            <nav>
                <ul>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Articles</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Speaking</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
            {mode === "light" ? (
                <button className={window.localStorage.getItem("mode")==="light"?"icon-brightness-up":"icon-moon-o"} onClick={()=>{setMode("dark");window.localStorage.setItem("mode",mode)}} />
            ) : (
                <button className={window.localStorage.getItem("mode")==="dark"?"icon-moon-o":"icon-brightness-up"} onClick={()=>{setMode("light");window.localStorage.setItem("mode",mode)}}/>
            )}
            {showModal ? (
                <div className="modal">
                    <ul className="box">
                        <li className="closeModal">
                            <button
                                className="close icon-close"
                                onClick={() => setShowModal((e) => !e)}
                            />
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Articles</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Speaking</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            ) : (
                <></>
            )}
        </header>
    );
}
