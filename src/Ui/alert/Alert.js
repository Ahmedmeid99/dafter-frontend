import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons"
import classes from "./Alert.module.css"
const Alert = (props) => {
    return (
        <div className={ classes.alert }>
            <FontAwesomeIcon icon={ faTriangleCircleSquare } />
            { props.children }
        </div>
    )
}
export default Alert