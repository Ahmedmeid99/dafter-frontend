import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical, faCheck, faXmark, faTrash, faEye, faPen } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import classes from "./Task.module.css"
import { useState, useRef, useEffect } from "react";
import taskAction from "../../redux/taskSlice";
import Form from "../../Ui/form/Form";
import Input from "../../Ui/form/Input";
import Textarea from "../../Ui/form/Textarea";
import fixTime from "../../modules/fixTime";
const Task = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(taskAction.getCompletedCount())
    }, []);
    const [itemListState, setItemListState] = useState(false);
    /////////////////////////////////////////////////////////
    // form for edit item
    const [formModelState, setFormModelState] = useState(false);
    const [listBgState, setListBgState] = useState(false);
    const closeForm = () => {
        setFormModelState(false)
    }
    const openItemList = () => {
        setListBgState(true)
        setItemListState(true)
    }
    const closeItemList = () => {
        setListBgState(false)
        setItemListState(false)
    }
    let inputRef = useRef('')
    let textareaRef = useRef('')
    const openEditeForm = () => {
        setFormModelState(true)
        setItemListState(false)
    }
    const openDetailsBox = () => {
        setTaskDetailsState(true)
        setItemListState(false)
    }
    const updateHandler = () => {
        const task = {
            title: inputRef.current.value,
            description: textareaRef.current.value,
            completed: props.item.completed,
            type: ''
        }
        dispatch(taskAction.updateTask({ id: props.item._id, task }))
        closeForm()
    }
    /////////////////////////////////////////////////////////
    const [taskDetailsState, setTaskDetailsState] = useState(false);

    /////////////////////////////////////////////////////////
    const toggleCompleted = () => {
        dispatch(taskAction.toggleComplete(props.item._id))
        dispatch(taskAction.getCompletedCount())
    }
    const deleteItem = () => dispatch(taskAction.removeTask(props.item._id))
    /////////////////////////////////////////////////////////

    const updatedAt = fixTime(props.item.updatedAt)
    return (
        <>
            {/* *************************** */ }
            {/* form for update task*/ }
            {/* *************************** */ }
            { formModelState && <div className="form-bg" onClick={ closeForm }></div> }
            { formModelState &&
                <Form
                    submitHandler={ updateHandler }
                    closeForm={ closeForm }
                    formType={ 'Update' }
                >
                    <Input
                        type='text'
                        placeholder="Task Title"
                        input_ref={ inputRef }
                        defaultValue={ props.item.title }
                    />
                    <Textarea
                        type='text'
                        name="Task description"
                        placeholder="Task Description"
                        textarea_ref={ textareaRef }
                        defaultValue={ props.item.description }
                    />
                </Form>
            }
            {/* *************************** */ }
            {/* *************************** */ }
            {/* Task details (show)*/ }
            {/* *************************** */ }
            { taskDetailsState && <div className="form-bg" onClick={ () => setTaskDetailsState(false) }></div> }
            { taskDetailsState && <div className={ classes['show-task'] }>
                <h3>{ props.item.title }</h3>
                <p>{ props.item.description }</p>
            </div> }
            {/* *************************** */ }
            {/* transparent background for close itemList*/ }
            { listBgState && <div className="list-bg" onClick={ closeItemList }></div> }
            {/* *************************** */ }
            <li className={ `${classes.item}  ${props.item.completed ? classes['item-completed'] : ''}` }>
                <div className={ `${classes.check} ${props.item.completed ? classes['check-completed'] : ''}` } onClick={ toggleCompleted }>
                    { props.item.completed && <FontAwesomeIcon className={ classes.icon } icon={ faCheck } /> }
                </div>
                <div className={ classes.text }>{ props.item.title }</div>
                <FontAwesomeIcon onClick={ openItemList } className={ classes.icon } icon={ faEllipsisVertical } />
                <div className={ classes.date }>{ updatedAt }</div>
                { itemListState && <ul className={ classes["item-list"] }>
                    <li onClick={ openDetailsBox }>
                        <FontAwesomeIcon icon={ faEye } />
                        <div>show</div>
                    </li>
                    <li onClick={ openEditeForm }>
                        <FontAwesomeIcon icon={ faPen } />
                        <div >Edite</div>
                    </li>
                    <li onClick={ deleteItem }>
                        <FontAwesomeIcon icon={ faTrash } />
                        <div >Delete</div>
                    </li>
                </ul> }
            </li>
        </>
    )
}
export default Task