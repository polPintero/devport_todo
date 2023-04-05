export default function(key = 'favorites'){
    let data = window.localStorage.getItem(key)
    if (!data) return []
    return JSON.parse(data)
}