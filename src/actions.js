import { redirect } from "react-router-dom";

const URL = "https://project4-backend.onrender.com"

// CREATE
export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newItem = {
        title: formData.get("title"),
        description: formData.get("description"),
        img: formData.get("img")
    }

    await fetch(URL + "/bookmarks", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    })

    return redirect("/")
}

// UPDATE
export const updateAction = async ({request, params}) =>{
    const formData = await request.formData()

    const id = params.id

    const updatedItem = {
        title: formData.get("title"),
        description: formData.get("description"),
        img: formData.get("img")
    }

    await fetch (URL + `/bookmarks/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedItem)
    })

    return redirect(`/bookmarks/${id}`)
}

// DELETE
export const deleteAction = async ({params}) => {

    const id = params.id

    await fetch(URL + `/bookmarks/${id}/`, {
            method: "delete",
        })
    
    return redirect("/")
}