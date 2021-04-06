import classes from './Header.module.css'
const Header = () => {
    return (
            <header className={classes.header}>
                <a href="#"><img src="https://i.pinimg.com/originals/11/83/99/1183997537de71649495430d2a14219b.png" alt="logo" className={classes.header__logo}/></a>
                <h3 className={classes.title}>development by Khoropchanu Alex</h3>
            </header>
    );
}

export default Header;
