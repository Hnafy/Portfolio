import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Speaking</a>
                </li>
                <li>
                    <a href="">Uses</a>
                </li>
            </ul>
            <p>© {(new Date).getFullYear()} Spencer Sharp. All rights reserved.</p>
        </footer>
    );
}
