import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { useRef } from "react"
import noteAction from "../../redux/noteSlice"
import { token, URL } from "../../Api/variables"

const AddNote = (props) => {

    const dispatch = useDispatch()
    const inputRef = useRef('')
    const textareaRef = useRef('')
    const selectorRef = useRef('')
    //
    const submitHandler = (e) => {
        e.preventDefault()
        const note = {
            title: inputRef.current.value,
            description: textareaRef.current.value,
            type: selectorRef.current.value
        }
        addNote(note)
        props.setFormModelState(false)
    }
    // add task to database and add the response (Task + its id) to redux (taskSlice)
    const addNote = (note) => {
        fetch(`${URL}/api/notes`, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then((data) => data.json()).then((res) => {
            if (res.status == 'ok') {
                dispatch(noteAction.addNote(res.note))
                console.log(res)
            }
        })
    }
    return (
        <>
            { props.formModelState && <div className="form-bg" onClick={ () => props.setFormModelState(false) }></div> }
            { props.formModelState && <form className="form" onSubmit={ submitHandler }>
                <div className="btn_close_form"><FontAwesomeIcon className="icon" icon={ faXmark } onClick={ () => props.setFormModelState(false) } /></div>
                <input ref={ inputRef } className="input mb-1" type="text" placeholder="Note Title" />
                <textarea ref={ textareaRef } className="input textarea mb-1" name="Task description" placeholder="Note Description"></textarea>
                <div className="btns-flex">
                    <select name="learn" ref={ selectorRef } defaultValue={ 'learn' }>
                        <option value="learn">learn</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                    </select>
                    <div className="btn-form btn-send" onClick={ submitHandler }>Add</div>
                    <div className="btn-form btn-cancle" onClick={ () => props.setFormModelState(false) }>Cancle</div>
                </div>
            </form> }
        </>
    )
}
export default AddNote