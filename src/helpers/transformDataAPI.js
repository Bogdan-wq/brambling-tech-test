const transformDataAPI = (mediaObject) => {

    const {
        image,
        title,
        PlayUrl,
        Artist,
        AlbumId,
        ContentID,
        ContentType,
        Type
    } = mediaObject;

    return {
        image,
        title,
        PlayUrl,
        Artist,
        AlbumId,
        ContentID,
        ContentType,
        Type,
    }
}

export default transformDataAPI;