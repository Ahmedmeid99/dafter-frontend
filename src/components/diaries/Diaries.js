import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faBook } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import classes from "./Diaries.module.css"
import Diary from "./Diary";
import AddDiary from "./AddDiary";
const Diaries = () => {
    const diaries = useSelector((state) => state.diaries.diaries)
    console.log(diaries)
    /* **************************** */
    const [formModelState, setFormModelState] = useState(false);
    return (
        <>
            <div className={ classes['section-info'] }>
                <div className={ classes['section-title'] }><h2>Diaries</h2><span>{ `(${diaries.length}) ` }</span></div>
                <FontAwesomeIcon icon={ faBook } className={ classes.icon } />
            </div>
            <div className="container">
                <AddDiary formModelState={ formModelState } setFormModelState={ setFormModelState } />
                { diaries.length === 0 && <h3 className="no-data">No diaries</h3> }
                <ul className={ classes.list }>
                    { diaries && diaries.map((item) => <Diary key={ item._id } item={ item } />) }
                    <div className="icon-new"><FontAwesomeIcon className="icon" icon={ faPlus } onClick={ () => setFormModelState(true) } /></div>
                </ul>
            </div>
        </>
    )
}
export default Diaries