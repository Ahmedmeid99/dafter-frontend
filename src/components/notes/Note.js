import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical, faCheck, faXmark, faTrash, faEye, faPen } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import classes from "./Note.module.css"
import { useState, useRef, useEffect } from "react";
import noteAction from "../../redux/noteSlice";
const Note = (props) => {
    const dispatch = useDispatch()
    const [itemListState, setItemListState] = useState(false);
    /////////////////////////////////////////////////////////
    // form for edit item
    const [formModelState, setFormModelState] = useState(false);
    const [listBgState, setListBgState] = useState(false);

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
    const selectorRef = useRef('')
    const openEditeForm = () => {
        setFormModelState(true)
        setItemListState(false)
        setListBgState(false)
    }
    const openDetailsBox = () => {
        setTaskDetailsState(true)
        setItemListState(false)
        setListBgState(false)
    }
    const updateHandler = (e) => {
        e.preventDefault()
        const note = {
            title: inputRef.current.value,
            description: textareaRef.current.value,
            type: selectorRef.current.value
        }
        dispatch(noteAction.updateNote({ id: props.item._id, note }))
        setFormModelState(false)
    }
    /////////////////////////////////////////////////////////
    const [taskDetailsState, setTaskDetailsState] = useState(false);

    /////////////////////////////////////////////////////////
    const deleteItem = () => dispatch(noteAction.removeNote(props.item._id))
    /////////////////////////////////////////////////////////
    const fixTime = () => {
        let updatedAt = 'few moments ago'
        if (props.item.updatedAt) {
            const oldDate = props.item.updatedAt
            const dateArr = oldDate.replace(/T/, ' ').replace(/\..+/, '').split(' ')
            const date = dateArr[0].split('-')
            const time = dateArr[1].split(':')
            updatedAt = `${date[2]}/${date[1]}/${date[0]}  ${time[0]}:${time[1]}`
            return updatedAt
        } else {
            return updatedAt
        }
    }
    const updatedAt = fixTime()
    let typeColor = ''
    if (props.item.type === 'learn') {
        typeColor = '#1176c1'
    } else if (props.item.type === 'work') {
        typeColor = '#bbc111'
    } else if (props.item.type === 'home') {
        typeColor = '#28c111'
    }
    return (
        <>
            {/* *************************** */ }
            {/* form for update task*/ }
            {/* *************************** */ }
            { formModelState && <div className="form-bg" onClick={ () => setFormModelState(false) }></div> }
            { formModelState && <form className="form" onSubmit={ updateHandler }>
                <div className="btn_close_form"><FontAwesomeIcon className="icon" icon={ faXmark } onClick={ () => setFormModelState(false) } /></div>
                <input ref={ inputRef } defaultValue={ props.item.title } className="input mb-1" type="text" placeholder="Note Title" />
                <textarea
                    ref={ textareaRef }
                    defaultValue={ props.item.description }
                    className="input textarea mb-1"
                    placeholder="Note Description" ></textarea>
                <div className="btns-flex">
                    <select name="learn" ref={ selectorRef } defaultValue={ props.item.type || 'learn' }>
                        <option value="learn">learn</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                    </select>
                    <div className="btn-form btn-send" onClick={ updateHandler }>Update</div>
                    <div className="btn-form btn-cancle" onClick={ () => setFormModelState(false) }>Cancle</div>
                </div>
            </form> }
            {/* *************************** */ }
            {/* *************************** */ }
            {/* Task details (show)*/ }
            {/* *************************** */ }
            { taskDetailsState && <div className="form-bg" onClick={ () => setTaskDetailsState(false) }></div> }
            { taskDetailsState && <div className={ classes['show-task'] }>
                <div className={ classes.flex }>
                    <h3>{ props.item.title }</h3>
                    <span style={ { background: typeColor } }>{ props.item.type }</span>
                </div>
                <p>{ props.item.description }</p>
            </div> }
            {/* *************************** */ }
            {/* transparent background for close itemList*/ }
            { listBgState && <div className="list-bg" onClick={ closeItemList }></div> }
            {/* *************************** */ }
            <li className={ classes.item }>
                <div className={ classes.type } style={ { background: typeColor } }><div style={ { "border-color": typeColor } } className={ classes.after }></div></div>
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
export default Note