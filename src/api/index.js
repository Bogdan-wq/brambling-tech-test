const getMediaAPI = (value) => {
    return fetch(`http://43.240.103.34/api.shadhin/api/search?keyword=${value}`)
        .then(res => res.json())
}

export default getMediaAPI;