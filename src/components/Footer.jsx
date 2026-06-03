import { Link } from "react-router-dom";

export const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-box">
                <Link className="footer-link" to="/">Home</Link>
                <Link className="footer-link" to="/about">About</Link>
            </div>
            <div className="footer-img-box">
                <p>Yummy App 2026</p>
                <a href="https://github.com/adrien-duchossoy/yummy-app">
                    <img className="footer-img" src="../img/githubimg.png" />
                </a>
            </div>
        </div>
    )
}