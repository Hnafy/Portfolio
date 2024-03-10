import "./hero.css";
import Lottie from "lottie-react";
import heroAnimation from "./../../animation/animationHero.json";
import { useRef } from "react";

export default function Hero() {
    const lottieRef = useRef();
    return (
        <section className="hero">
            <div className="left-section">
                <div className="logo">
                    <img
                        src="./../../../public/myPhotoCircle.png"
                        alt="avatar"
                        className="avatar"
                    />
                    <i className="icon-verified" />
                </div>
                <h1 className="title">
                    Software designer, Full Stack Developer, and Freelancer.
                </h1>
                <p className="sub-title">
                    I’m Ahmed Naser, A Professional specializing in Software
                    Design, Full Stack Development, and Freelance Expertise,
                    operating from Egypt. My comprehensive skill set and
                    extensive experience equip me to provide unparalleled
                    assistance in crafting digital solutions tailored to enhance
                    profitability. Whether it's refining existing platforms or
                    developing new platforms
                </p>
                <div className="icons">
                    <i className="icon-twitter" />
                    <i
                        className="icon-instagram"
                        onClick={() =>
                            window.open(
                                "https://www.instagram.com/_a7med.07/",
                                "_blank"
                            )
                        }
                    />
                    <i
                        className="icon-github"
                        onClick={() =>
                            window.open("https://github.com/Hnafy", "_blank")
                        }
                    />
                    <i className="icon-linkedin" />
                </div>
            </div>
            <div className="right-section">
                <Lottie
                    animationData={heroAnimation}
                    className="heroAnimation"
                    lottieRef={lottieRef}
                    onLoadedImages={() => {
                        lottieRef.current.setSpeed(0.5);
                    }}
                />
            </div>
        </section>
    );
}
