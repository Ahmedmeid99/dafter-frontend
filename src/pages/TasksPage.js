import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tasks from "../components/tasks/Tasks";

import Layout from "../layout/Layout";

const TasksPage = () => {
  const navigate = useNavigate()
  const isLogedin = localStorage.getItem('user')
  useEffect(() => {
    if (!isLogedin) {
      navigate('/')
    }
  }, []);
  const content = (
    <Layout>
      <Tasks />
    </Layout>
  )
  return isLogedin && content
};
export default TasksPage