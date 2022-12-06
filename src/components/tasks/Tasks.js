import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import classes from "./Tasks.module.css"
import Task from "./Task";
import AddTask from "./AddTask";
const Tasks = () => {
    const list = useSelector((state) => state.tasks.tasks)
    const completedCount = useSelector((state) => state.tasks.completedCount)
    console.log(list)
    console.log(completedCount)
    /* **************************** */
    const [formModelState, setFormModelState] = useState(false);
    return (
        <>
            <div className={ classes['section-info'] }>
                <div className={ classes['section-title'] }><h2>Tasks</h2><span>{ `(${list.length}) ` }</span></div>
                <div className={ classes['tasks_info'] }>
                    <h3>Completed</h3>
                    <div className={ classes.circle }>
                        <span className="num_true">{ completedCount }</span>
                        <span className="icon_from">/</span>
                        <span className="num_false">{ list.length }</span>
                    </div>
                </div>
            </div>
            <div className="container">
                <AddTask formModelState={ formModelState } setFormModelState={ setFormModelState } />
                { list.length === 0 && <h3 className="no-data">No Tasks</h3> }
                <ul className={ classes.list }>
                    { list && list.map((item) => <Task key={ item._id } item={ item } />) }
                    <div className="icon-new"><FontAwesomeIcon className="icon" icon={ faPlus } onClick={ () => setFormModelState(true) } /></div>
                </ul>
            </div>
        </>
    )
}
export default Tasks