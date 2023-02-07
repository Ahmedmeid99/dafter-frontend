import { useDispatch } from "react-redux"
import { useRef } from "react"
import taskAction from "../../redux/taskSlice"
import { token, URL } from "../../Api/variables"
import Form from "../../Ui/form/Form"
import Input from "../../Ui/form/Input"
import Textarea from "../../Ui/form/Textarea"

const AddTask = (props) => {
    const dispatch = useDispatch()
    const inputRef = useRef('')
    const textareaRef = useRef('')
    //
    const closeForm = () => {
        props.setFormModelState(false)
    }
    const submitHandler = () => {
        const task = {
            title: inputRef.current.value,
            description: textareaRef.current.value,
            type: ''
        }
        addTask(task)
        closeForm()
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
            { props.formModelState && <div className="form-bg" onClick={ closeForm }></div> }
            { props.formModelState &&
                <Form
                    submitHandler={ submitHandler }
                    closeForm={ closeForm }
                    formType={ 'Add' }
                >
                    <Input
                        type='text'
                        placeholder="Task Title"
                        input_ref={ inputRef }
                    />
                    <Textarea
                        type='text'
                        name="Task description"
                        placeholder="Task Description"
                        textarea_ref={ textareaRef }
                    />
                </Form> }
        </>
    )
}
export default AddTask