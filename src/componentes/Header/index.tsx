import "./styles.css";
import Link from "../Link";
import Logo from "../../assets/images/logo-header.png";

export default function Header(){
    return(
        <header>
            <img src={Logo} alt="logo do dindin" />
            <nav>
                <Link text="Cursos" redirect="/cursos" />
                <Link text="Blog" redirect="/blog" />
                <Link text="Contato" redirect="/contato" />
            </nav>
        </header>
    );
}