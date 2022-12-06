import { token, URL } from "./variables"

export const deleteNote = (id) => {
    fetch(`${URL}/api/notes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}

/////////////////////////////////////////////////////////
export const updateNote = ({ id, note }) => {
    fetch(`${URL}/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then((data) => data.json()).then((res) => console.log(res))
}
/////////////////////////////////////////////////////////
