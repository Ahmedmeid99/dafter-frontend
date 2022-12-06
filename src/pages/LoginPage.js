import { useState, useRef, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Login = () => {
    // 
    const [isLogin, setIsLogin] = useState(true)
    const nameInput = useRef('')
    const emailInput = useRef('')
    const passwordInput = useRef('')
    const navigate = useNavigate()
    const toggleHandler = () => setIsLogin(!isLogin)

    //////////////////////////////////////
    const URL = "https://dafter-backend-production.up.railway.app"
    //////////////////////////////////////
    const submitHandler = async (e) => {
        e.preventDefault()
        if (isLogin) {
            const response = await fetch(`${URL}/api/users/login`, {
                method: 'POST',
                body: JSON.stringify({ email: emailInput.current.value, password: passwordInput.current.value }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            if (data.status === "ok") {
                localStorage.setItem('token', `Bearer ${data.user.token}`)
                console.log(data.user)
                navigate('/profile')

            } else { console.log('error :(') }
        } else {
            const response = await fetch(`${URL}/api/users/signup`, {
                method: 'POST',
                body: JSON.stringify({ name: nameInput.current.value, email: emailInput.current.value, password: passwordInput.current.value }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json()
            if (data.status === "ok") {
                setIsLogin(true)
                console.log('good work :)')
                localStorage.setItem('user', JSON.stringify(data.user))
            } else { console.log('error :(') }
        }
    }
    useEffect(() => {
        if (localStorage.getItem('user') && localStorage.getItem('token')) {
            navigate('/profile')
        } else {
            navigate('/')
        }
    }, [])
    return (<form className='form' onSubmit={ submitHandler }>
        <h3 className='form-title'>{ isLogin ? 'Sign in' : 'Sign up' }</h3>
        { !isLogin && <input ref={ nameInput } className={ 'input mb-3' } type="text" placeholder='name' /> }
        <input ref={ emailInput } className={ 'input mb-3' } type="email" placeholder='email' />
        <input ref={ passwordInput } className={ 'input mb-3' } type="password" placeholder='password' />
        <div className="action">
            <button className='btn-form btn-send'>{ !isLogin ? 'sign up' : 'sign in' }</button>
            { !isLogin && <p onClick={ toggleHandler } className="toggle-text">Do you want to sign in ? </p> }
            { isLogin && <p onClick={ toggleHandler } className="toggle-text">Do you want to sign up ? </p> }
        </div>
    </form>)
}

export default Login