import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical, faCheck, faXmark, faTrash, faEye, faPen } from "@fortawesome/free-solid-svg-icons"
import classes from "./Profile.module.css"
import bg_photo from "../../assets/images/pexels-1.jpg"
import photo from "../../assets/images/skills-01.jpg"
import { useSelector } from "react-redux"
import Welcome from "../../Ui/welcome/Welcome"
import { useState } from "react"

const Profile = () => {
    const userData = useSelector((state) => state.user.user)
    const tasks = useSelector((state) => state.tasks.tasks)
    const notes = useSelector((state) => state.notes.notes)
    const diaries = useSelector((state) => state.diaries.diaries)
    const tasksCount = tasks.length
    const notesCount = notes.length
    const diariesCount = diaries.length
    const [welcomeState, setWelcomeState] = useState(true);
    const closeWelcomeMessage = () => {
        setWelcomeState(false)
    }
    return (
        <>
            <div className={ classes.profile_page }>
                {/* { welcomeState && <Welcome close={ closeWelcomeMessage }>{ userData.name }</Welcome> } */ }
                <div style={ { backgroundImage: `url(${bg_photo})` } } className={ classes.profile_landing }>
                    <div className={ classes.options_icon }>
                        <FontAwesomeIcon className={ classes.icon } icon={ faEllipsisVertical } />
                    </div>

                    <div style={ { backgroundImage: `url(${photo})` } } className={ classes.user_photo }></div>
                </div>
                <div className={ classes.profile_info }>
                    <h2>احصائيات</h2>
                    <div className={ classes.boxes }>
                        <div className={ classes.box }>
                            <h3>Diaries</h3>
                            <span>{ diariesCount || '0' }</span>
                            <p>diary</p>
                        </div>

                        <div className={ classes.box }>
                            <h3>Tasks</h3>
                            <span>{ tasksCount || '0' }</span>
                            <p>task</p>
                        </div>
                        <div className={ classes.box }>
                            <h3>Notes</h3>
                            <span>{ notesCount || '0' }</span>
                            <p>note</p>
                        </div>

                        <div className={ classes.box }>
                            <h3>Gallery</h3>
                            <span>{ '0' }</span>
                            <p>image</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile