import { useDispatch } from "react-redux"
import { useRef } from "react"
import noteAction from "../../redux/noteSlice"
import { token, URL } from "../../Api/variables"
import Form from "../../Ui/form/Form"
import Input from "../../Ui/form/Input"
import Textarea from "../../Ui/form/Textarea"

const AddNote = (props) => {
    const dispatch = useDispatch()
    const inputRef = useRef('')
    const textareaRef = useRef('')
    const selectorRef = useRef('')
    //
    const submitHandler = (e) => {
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
    const closeForm = () => {
        props.setFormModelState(false)
    }
    return (
        <>
            { props.formModelState && <div className="form-bg" onClick={ () => props.setFormModelState(false) }></div> }
            { props.formModelState &&
                <Form
                    submitHandler={ submitHandler }
                    closeForm={ closeForm }
                    formType={ 'Add' }
                >
                    <Input
                        type='text'
                        placeholder="Note Title"
                        input_ref={ inputRef }
                    />
                    <Textarea
                        type='text'
                        name="Note description"
                        placeholder="Note Description"
                        textarea_ref={ textareaRef }
                    />
                    <select className="select" name="learn" ref={ selectorRef } defaultValue={ 'learn' }>
                        <option value="learn">learn</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                    </select>
                </Form> }

        </>
    )
}
export default AddNote