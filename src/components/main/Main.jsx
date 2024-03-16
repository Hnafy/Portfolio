import { useState } from "react";
import "./main.css";
import { AnimatePresence,motion } from "framer-motion";
import data from "../data";

export default function Main() {
    let [active, setActive] = useState("all");
    let [content, setContent] = useState(data);
    function handelClick(categoryBtn) {
        setActive(categoryBtn);
        const newArr = content.filter((item) => {
            const category = item.category.find((cat) => {
                return cat === categoryBtn;
            });
            return category === categoryBtn;
        });
        setContent(newArr);
    }
    return (
        <main>
            <div className="left-section">
                <button
                    onClick={() => {
                        setActive("all");
                        setContent(data);
                    }}
                    className={active === "all" ? "btn-active" : null}
                >
                    All Projects
                </button>
                <button
                    onClick={() => handelClick("css")}
                    className={active === "css" ? "btn-active" : null}
                >
                    HTML & CSS
                </button>
                <button
                    onClick={() => handelClick("tw")}
                    className={active === "tw" ? "btn-active" : null}
                >
                    tailwind
                </button>
                <button
                    onClick={() => handelClick("js")}
                    className={active === "js" ? "btn-active" : null}
                >
                    JavaScript
                </button>
                <button
                    onClick={() => handelClick("react")}
                    className={active === "react" ? "btn-active" : null}
                >
                    React
                </button>
            </div>
            <div className="right-section">
                <AnimatePresence>
                    {content.map((item) => {
                        return (
                            <motion.article
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                exit={{ transform: "scale(0)" }}
                                transition={{ type: 'spring',damping:8,stiffness:50 }}
                                className="card"
                                key={item.id}
                            >
                                <div
                                    style={{
                                        backgroundImage: `url("${item.img}")`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        width: "100%",
                                        height: "300px",
                                        borderRadius: "4px",
                                    }}
                                    className="card_image"
                                    onClick={()=>window.open(item.page,'_blank')}
                                />
                                <div className="content">
                                    <h2 className="title">{item.title}</h2>
                                    <p className="sub-title">{item.body}</p>
                                    <div className="more">
                                        <div className="right">
                                            <a href="https://github.com/Hnafy">
                                                <i className="icon-github" />
                                            </a>
                                        </div>
                                        <div className="left">
                                            <a href="https://github.com/Hnafy" className="link" target="_blank">
                                                <span>more</span>{" "}
                                                <i className="icon-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </div>
        </main>
    );
}
