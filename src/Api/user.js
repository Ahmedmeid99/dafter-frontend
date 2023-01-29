import { token, URL } from "./variables"


export const updateUser = (updatedUserInfo) => {
    fetch(`${URL}/api/users/me`, {
        method: 'PUT',
        body: JSON.stringify(updatedUserInfo),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}
export const logoutUser = () => {
    fetch(`${URL}/api/users/me`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}
export const deleteUser = () => {
    fetch(`${URL}/api/users/me`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}
export const addUserAvater = (img) => {
    fetch(`${URL}/api/users/me/avater`, {
        method: 'POST',
        body: JSON.stringify(img),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}