import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { useRef } from "react"
import { token, URL } from "../../Api/variables"
import diaryAction from "../../redux/diariesSlice"

const AddDiary = (props) => {

    const dispatch = useDispatch()
    const inputRef = useRef('')
    const textareaRef = useRef('')
    const subTitleRef = useRef('')
    //
    const submitHandler = (e) => {
        e.preventDefault()
        const diary = {
            title: inputRef.current.value,
            subTitle: subTitleRef.current.value,
            description: textareaRef.current.value,
            points: []
        }
        addDiary(diary)
        props.setFormModelState(false)
    }
    // add task to database and add the response (Task + its id) to redux (taskSlice)
    const addDiary = (diary) => {
        fetch(`${URL}/api/diaries`, {
            method: 'POST',
            body: JSON.stringify(diary),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then((data) => data.json()).then((res) => {
            if (res.status == 'ok') {
                dispatch(diaryAction.addDiary(res.diary))
                console.log(res)
            }
        })
    }
    return (
        <>
            { props.formModelState && <div className="form-bg" onClick={ () => props.setFormModelState(false) }></div> }
            { props.formModelState && <form className="form" onSubmit={ submitHandler }>
                <div className="btn_close_form"><FontAwesomeIcon className="icon" icon={ faXmark } onClick={ () => props.setFormModelState(false) } /></div>
                <input ref={ inputRef } className="input mb-1" type="text" placeholder="Diary Title" />
                <input ref={ subTitleRef } className="input mb-1" type="text" placeholder="Diary subTitle" />
                <textarea ref={ textareaRef } className="input textarea mb-1" name="Diary description" placeholder="Diary Description"></textarea>
                <div className="btns-flex">
                    <div className="btn-form btn-send" onClick={ submitHandler }>Add</div>
                    <div className="btn-form btn-cancle" onClick={ () => props.setFormModelState(false) }>Cancle</div>
                </div>
            </form> }
        </>
    )
}
export default AddDiary