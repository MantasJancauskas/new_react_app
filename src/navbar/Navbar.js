import './NavbarC.css'

function Navbar() {
    return (
        <ul>
            <li><a className="active" href="#home">Titulinis</a></li>
            <li><a href="#news">Naujienos</a></li>
            <li><a href="#contact">Kontaktai</a></li>
            <li><a href="#about">Apie mus</a></li>
        </ul>
    )
}

export default Navbar;