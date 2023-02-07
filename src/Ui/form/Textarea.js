import classes from "./Form.module.css"
const Textarea = (props) => {
    return (
        <textarea
            className={ `${classes.input} ${classes.textarea} mb-1` }
            type={ props.type }
            name={ props.name }
            placeholder={ props.placeholder }
            ref={ props.textarea_ref }
            value={ props.defaultValue }
        ></textarea>
    )
}
export default Textarea