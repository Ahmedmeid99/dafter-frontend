import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Profile from "../components/profile/Profile";
import Layout from "../layout/Layout";

const ProfilePage = () => {
    const navigate = useNavigate()
    const isLogedin = localStorage.getItem('user')
    useEffect(() => {
        if (!isLogedin) {
            navigate('/')
        }
    }, []);
    const content = (
        <Layout>
            <Profile />
        </Layout>
    )
    return isLogedin && content

};
export default ProfilePage