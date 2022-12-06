import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Notes from "../components/notes/Notes";

import Layout from "../layout/Layout";

const NotesPage = () => {
    const navigate = useNavigate()
    const isLogedin = localStorage.getItem('user')
    useEffect(() => {
        if (!isLogedin) {
            navigate('/')
        }
    }, []);
    const content = (
        <Layout>
            <Notes />
        </Layout>
    )
    return isLogedin && content
};
export default NotesPage