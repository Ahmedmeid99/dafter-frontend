import { token, URL } from "./variables"

export const deleteTask = (id) => {
    fetch(`${URL}/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}

/////////////////////////////////////////////////////////
export const updateTask = ({ id, task }) => {
    fetch(`${URL}/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}
/////////////////////////////////////////////////////////
export const toggleCompletTask = ({ id, completed }) => {
    fetch(`${URL}/api/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed: completed }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}