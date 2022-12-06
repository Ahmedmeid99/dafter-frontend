import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical, faCheck, faXmark, faTrash, faEye, faPen } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import classes from "./Diary.module.css"
import { useState, useRef, useEffect } from "react";
import diaryAction from "../../redux/diariesSlice";
const Diary = (props) => {
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
    let subTitleRef = useRef('')
    let textareaRef = useRef('')
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
        const diary = {
            title: inputRef.current.value,
            subTitle: subTitleRef.current.value,
            descriptio: textareaRef.current.value,
            points: []
        }
        dispatch(diaryAction.updateDiary({ id: props.item._id, diary }))
        setFormModelState(false)
    }
    /////////////////////////////////////////////////////////
    const [taskDetailsState, setTaskDetailsState] = useState(false);

    /////////////////////////////////////////////////////////
    const deleteItem = () => dispatch(diaryAction.removeDiary(props.item._id))
    /////////////////////////////////////////////////////////
    const fixTime = () => {
        let updatedAt = 'few moments ago'
        if (props.item.updatedAt) {
            const oldDate = props.item.updatedAt
            const dateArr = oldDate.replace(/T/, ' ').replace(/\..+/, '').split(' ')
            const date = dateArr[0].split('-')
            const time = dateArr[1].split(':')
            updatedAt = `${date[2]}/${date[1]}/${date[0]} ${time[0]}:${time[1]}`
            return updatedAt
        } else {
            return updatedAt
        }
    }
    const updatedAt = fixTime()

    return (
        <>
            {/* *************************** */ }
            {/* form for update task*/ }
            {/* *************************** */ }
            { formModelState && <div className="form-bg" onClick={ () => setFormModelState(false) }></div> }
            { formModelState && <form className="form" onSubmit={ updateHandler }>
                <div className="btn_close_form"><FontAwesomeIcon className="icon" icon={ faXmark } onClick={ () => setFormModelState(false) } /></div>
                <input ref={ inputRef } defaultValue={ props.item.title } className="input mb-1" type="text" placeholder="Diary Title" />
                <input ref={ subTitleRef } defaultValue={ props.item.subTitle } className="input mb-1" type="text" placeholder="Diary SubTitle" />
                <textarea
                    ref={ textareaRef }
                    defaultValue={ props.item.descriptio }
                    className="input textarea mb-1"
                    placeholder="Diary Description" ></textarea>
                <div className="btns-flex">
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

                </div>
                <p>{ props.item.descriptio }</p>
            </div> }
            {/* *************************** */ }
            {/* transparent background for close itemList*/ }
            { listBgState && <div className="list-bg" onClick={ closeItemList }></div> }
            {/* *************************** */ }
            <li className={ classes.item } >
                <div className={ classes.img }>
                    <FontAwesomeIcon onClick={ openItemList } className={ classes.icon } icon={ faEllipsisVertical } />
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
                </div>
                <div className={ classes.text }>
                    <h3>{ props.item.title }</h3>
                    <h4>{ props.item.subTitle }</h4>
                </div>
                <div className={ classes.date }>{ updatedAt }</div>
            </li>
        </>
    )
}
export default Diary