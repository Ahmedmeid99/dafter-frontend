import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import classes from "./Welcome.module.css"
const Welcome = (props) => {
    return (
        <div className={ classes.welcome }>
            <div className='container'>
                <div className={ classes.message }>
                    <FontAwesomeIcon icon={ faCheck } className={ classes.icon } />
                    <div className={ classes.welcome_text }>Welcome</div>
                    <div className={ classes.username }>{ props.children }</div>
                </div>
                <FontAwesomeIcon icon={ faXmark } className={ classes.icon } onClick={ () => props.close() } />
            </div>
        </div>
    )
}
export default Welcome