const URL = "https://project4-backend.onrender.com"

export const indexLoader = async () => {
    const response = await fetch(URL + "/bookmarks/")
    const bookkmarks = await response.json()
    return bookkmarks
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/bookmarks/${params.id}/`)
    const bookmark = await response.json()
    return bookmark
}