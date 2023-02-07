import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from "./Form.module.css"
const Form = (props) => {
    const submitHandler = (e) => {
        e.preventDefault()
        props.submitHandler()
    }
    const closeForm = () => {
        props.closeForm()
    }
    return (
        <form className={ classes.form } onSubmit={ submitHandler }>
            <div className={ classes.btn_close_form }><FontAwesomeIcon className={ classes.icon } icon={ faXmark } onClick={ closeForm } /></div>
            {/* (children) input & textarea */ }
            { props.children }
            <div className={ classes["btns-flex"] }>
                <div className={ `${classes["btn-form"]} ${classes["btn-send"]}` } onClick={ submitHandler }>{ props.formType }</div>
                <div className={ `${classes["btn-form"]} ${classes["btn-cancle"]}` } onClick={ closeForm }>Cancle</div>
            </div>
        </form>
    )
}
export default Form