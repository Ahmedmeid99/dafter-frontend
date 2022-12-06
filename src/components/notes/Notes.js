import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import classes from "./Notes.module.css"
import Note from "./Note";
import AddNote from "./AddNote";
const Notes = () => {
    const notes = useSelector((state) => state.notes.notes)
    console.log(notes)
    /* **************************** */
    const [formModelState, setFormModelState] = useState(false);
    return (
        <>
            <div className={ classes['section-info'] }>
                <div className={ classes['section-title'] }><h2>Notes</h2><span>{ `(${notes.length}) ` }</span></div>
                <FontAwesomeIcon icon={ faBookOpen } className={ classes.icon } />
            </div>
            <div className="container">
                <AddNote formModelState={ formModelState } setFormModelState={ setFormModelState } />
                { notes.length === 0 && <h3 className="no-data">No Notes</h3> }
                <ul className={ classes.list }>
                    { notes && notes.map((item) => <Note key={ item._id } item={ item } />) }
                    <div className="icon-new"><FontAwesomeIcon className="icon" icon={ faPlus } onClick={ () => setFormModelState(true) } /></div>
                </ul>
            </div>
        </>
    )
}
export default Notes