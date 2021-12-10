import classes from './css/header.module.css'

// where the title goes
const Header = () => {
    return (
        <div className={classes.header}>
            <h1 className={`${classes.heading} ${classes.title}`}>Breath of the Wild Character Quiz</h1>
            <h2 className={`${classes.heading} ${classes.intro}`}>Who Are You?</h2>
            <h4 className={`${classes.heading} ${classes.prompt}`}>Take the Quiz Below!</h4>
            <img src="/img/banner.png" alt="image" className={classes.banner} />
        </div>
    )
}

export default Header
