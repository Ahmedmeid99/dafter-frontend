import { Link } from "react-router-dom"
import classes from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={ classes.footer }>
            <h3 className={ classes.title }>portfolio website</h3>

            <div className={ `${classes.pages} ${classes.flex}` }>
                <Link end to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/projects">projects</Link>
                <Link to="/contactus">contactus</Link>
            </div>
            <div className={ `${classes.links} ${classes.flex}` }>
                <div className={ classes.linktitle }>old portfolio</div>
                <a className={ classes.link } target='_blank' href="https://portfolio-js-pearl.vercel.app">https://portfolio-js-pearl.vercel.app</a>
            </div>
            <div className={ `${classes.copyright}` }>
                <h3 className={ `${classes.name}` }>Created by Ahmed Mohamed Eid</h3>
            </div>
        </div>
    )
}
export default Footer