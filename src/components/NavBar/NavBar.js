import classnames from './NavBar.module.css'

const NavBar = (props) => {
    return (
        <nav className={classnames.navbar}>
            <section className={classnames.logo}>
                Logo
            </section>
            <section className={classnames.menu}>
                Menu
            </section>
        </nav>
    )
}

export default NavBar