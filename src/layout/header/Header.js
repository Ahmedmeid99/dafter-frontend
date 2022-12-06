import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faUser, faListCheck, faNoteSticky, faBook, faImage, faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux"
import classes from "./Header.module.css"
import { useEffect, useState } from "react";
import userAction from "../../redux/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import taskAction from "../../redux/taskSlice";
import { token, URL } from "../../Api/variables";
const Header = () => {
    // ////////////////////
    const userData = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // ////////////////////
    useEffect(() => {
        const data = localStorage.getItem('user')
        const user = JSON.parse(data)
        dispatch(userAction.resetUserInfo(user))
    }, [])
    const [menuState, setMenuState] = useState(false);
    const loggingOut = () => {
        dispatch(userAction.logoutUser())
        localStorage.setItem('token', '')
        navigate('/')
    }
    return (
        <div className={ classes.header }>
            <div className={ classes.navbar }>
                <div className={ `container ${classes.nav}` }>
                    <FontAwesomeIcon className={ classes.icon } icon={ faBars } onClick={ () => setMenuState(true) } />
                    <div className={ classes.logo }>
                        دفتر
                    </div>
                </div>
                {/* transparent background for close itemList*/ }
                { menuState && <div className="list-bg" onClick={ () => setMenuState(false) }></div> }
                <div className={ `${classes.menu} ${menuState ? classes['open-menu'] : classes['close-menu']}` } >
                    <div className={ classes['icon-close'] }> <FontAwesomeIcon className={ classes.icon } icon={ faXmark } onClick={ () => setMenuState(false) } /></div>
                    {/* <div className="icon-new"><FontAwesomeIcon className="icon" icon={ faPlus } /></div> */ }
                    <div className={ classes.profile }>
                        <div className={ classes.img }>{ userData.icon || '' }</div>
                        <div className={ classes.info }>
                            <div className={ classes.name }>{ userData.name || 'userName' }</div>
                            <div className={ classes.email }>{ userData.email || 'example@gmail.com' }</div>
                        </div>
                    </div>
                    <ul className={ classes['menu-list'] }>
                        <li><NavLink to="/profile" className={ ({ isActive }) => (isActive ? classes.active : '') }>
                            <FontAwesomeIcon className={ classes.icon } icon={ faUser } /> <span>Profile</span>
                        </NavLink>
                        </li>
                        <li><NavLink to="/tasks" className={ ({ isActive }) => (isActive ? classes.active : '') }>
                            <FontAwesomeIcon className={ classes.icon } icon={ faListCheck } /> <span>Tasks</span>
                        </NavLink>
                        </li>
                        <li><NavLink to="/notes" className={ ({ isActive }) => (isActive ? classes.active : '') }>
                            <FontAwesomeIcon className={ classes.icon } icon={ faNoteSticky } /> <span>Notes</span>
                        </NavLink>
                        </li>
                        <li><NavLink to="/diares" className={ ({ isActive }) => (isActive ? classes.active : '') }>
                            <FontAwesomeIcon className={ classes.icon } icon={ faBook } /> <span>Diaries</span>
                        </NavLink>
                        </li>
                        <li><NavLink to="/gallery" className={ ({ isActive }) => (isActive ? classes.active : '') }>
                            <FontAwesomeIcon className={ classes.icon } icon={ faImage } /> <span>Gallery</span>
                        </NavLink>
                        </li>
                        <div className={ `${classes.action_btn} btns-flex` }>
                            <button onClick={ loggingOut }
                                className={ `${classes.btn_logout}  btn-form` }>Logout</button>
                            <button onClick={ loggingOut }
                                className={ `${classes.btn_new_acount}  btn-form` }>+new acount</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header