import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Diaries from "../components/diaries/Diaries";

import Layout from "../layout/Layout";

const DiariesPage = () => {
    const navigate = useNavigate()
    const isLogedin = localStorage.getItem('user')
    useEffect(() => {
        if (!isLogedin) {
            navigate('/')
        }
    }, []);
    const content = (
        <Layout>
            <Diaries />
        </Layout>
    )
    return isLogedin && content
};
export default DiariesPage