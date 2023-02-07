import React from "react"
import classes from "./Form.module.css"
const Input = (props) => {
    return (
        <input
            className={ `${classes.input} mb-1` }
            type={ props.type }
            placeholder={ props.placeholder }
            ref={ props.input_ref }
            defaultValue={ props.defaultValue }
        />
    )
}

export default Input