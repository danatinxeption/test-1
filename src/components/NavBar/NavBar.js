import logo from 'assets/logo.png'
import classnames from './NavBar.module.css'

const NavBar = (props) => {
    return (
        <nav className={classnames.navbar}>
            <section>
                <img className={classnames.img} src={logo} alt="logo" />
            </section>
            <ul className={classnames.menu}>
                <li><a href="#link1" >Link</a></li>
                <li><a href="#link2" >Link</a></li>
            </ul>
        </nav>
    )
}

export default NavBar