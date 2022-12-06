import { token, URL } from "./variables"

/////////////////////////////////////////////////////////
export const deleteDiary = (id) => {
    fetch(`${URL}/api/diaries/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}

/////////////////////////////////////////////////////////
export const updateDiary = ({ id, diary }) => {
    fetch(`${URL}/api/diaries/${id}`, {
        method: 'PUT',
        body: JSON.stringify(diary),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}
/////////////////////////////////////////////////////////
