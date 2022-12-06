import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { useRef } from "react"
import taskAction from "../../redux/taskSlice"
import { token, URL } from "../../Api/variables"

const AddTask = (props) => {

    const dispatch = useDispatch()
    const inputRef = useRef('')
    const textareaRef = useRef('')
    //
    const submitHandler = (e) => {
        e.preventDefault()
        const task = {
            title: inputRef.current.value,
            description: textareaRef.current.value,
            type: ''
        }
        addTask(task)
        props.setFormModelState(false)
    }
    // add task to database and add the response (Task + its id) to redux (taskSlice)
    const addTask = (task) => {
        fetch(`${URL}/api/tasks`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then((data) => data.json()).then((res) => {
            if (res.status == 'ok') {
                dispatch(taskAction.addTask(res.task))
                console.log(res)
            }
        })
    }
    return (
        <>
            { props.formModelState && <div className="form-bg" onClick={ () => props.setFormModelState(false) }></div> }
            { props.formModelState && <form className="form" onSubmit={ submitHandler }>
                <div className="btn_close_form"><FontAwesomeIcon className="icon" icon={ faXmark } onClick={ () => props.setFormModelState(false) } /></div>
                <input ref={ inputRef } className="input mb-1" type="text" placeholder="Task Title" />
                <textarea ref={ textareaRef } className="input textarea mb-1" name="Task description" placeholder="Task Description"></textarea>
                <div className="btns-flex">
                    <div className="btn-form btn-send" onClick={ submitHandler }>Add</div>
                    <div className="btn-form btn-cancle" onClick={ () => props.setFormModelState(false) }>Cancle</div>
                </div>
            </form> }
        </>
    )
}
export default AddTask