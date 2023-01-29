import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical, faImages } from "@fortawesome/free-solid-svg-icons"
import classes from "./Profile.module.css"
import { get_random_img } from './random-img'
import photo from "../../assets/images/skills-01.jpg"
import { useSelector } from "react-redux"
// import { useState } from "react"

const bg_photo = get_random_img()
const Profile = () => {
    const userData = useSelector((state) => state.user.user)
    const tasks = useSelector((state) => state.tasks.tasks)
    const notes = useSelector((state) => state.notes.notes)
    const diaries = useSelector((state) => state.diaries.diaries)
    const tasksCount = tasks.length
    const notesCount = notes.length
    const diariesCount = diaries.length
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.files[0])
    }
    return (
        <>
            <div className={ classes.profile_page }>
                <div style={ { backgroundImage: `url(${bg_photo})` } } className={ classes.profile_landing }>
                    <div className={ classes.options_icon }>
                        <FontAwesomeIcon className={ classes.icon } icon={ faEllipsisVertical } />
                    </div>

                    <div style={ { backgroundImage: `url(${photo})` } } className={ classes.user_photo }></div>
                </div>
                {/* <form action='/'
                    onSubmit={ submitHandler }
                >
                    <input type="file" name="image" accept="image/*" src="" alt="" onChange={ submitHandler } />
                    <input type="submit" value="ok" />
                </form> */}
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