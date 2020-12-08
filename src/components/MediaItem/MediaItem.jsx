import React from "react";
import PropTypes from 'prop-types';
import {MDBRow, MDBCol, MDBView, MDBMask, MDBBox} from "mdbreact";

import './MediaItem.scss';

const MediaItem = (props) => {

    const {
        image,
        title,
        PlayUrl,
        Artist,
        AlbumId,
        ContentID,
        ContentType,
        Type,
        inputValue,
    } = props;

    const idx = title.toLowerCase().indexOf(inputValue.toLowerCase())
    const markedTitle = idx > -1
        ? [
            title.substring(0,idx),
            <span className="font-weight-bold">{title.substring(idx, idx + inputValue.length)}</span>,
            title.substring(idx + inputValue.length)
        ]
        : title

    return (
        <MDBRow className="mb-4">
            <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                    <img className="img" src={image.replace('<$size$>','300')} alt=""/>
                    <MDBMask overlay="white-slight" />
                </MDBView>
            </MDBCol>
            <MDBCol lg="7">
                <h3 className="mb-3 p-0 text-truncate">{markedTitle}</h3>
                <MDBBox display="flex" flex="column">
                    <span className="text-truncate"><b>Artist:</b> {Artist}</span>
                    <span className="text-truncate"><b>Album id:</b> {AlbumId}</span>
                    <span className="text-truncate"><b>Content id:</b> {ContentID}</span>
                    <span className="text-truncate"><b>Content type:</b> {ContentType}</span>
                    <span className="text-truncate"><b>Type:</b> {Type}</span>
                    <span className="text-truncate"><b>Play url:</b> <a href={PlayUrl}>{PlayUrl}</a></span>
                </MDBBox>

            </MDBCol>
        </MDBRow>
    )
}

MediaItem.propTypes = {
    image:PropTypes.string,
    title:PropTypes.string,
    PlayUrl:PropTypes.string,
    Artist:PropTypes.string,
    AlbumId:PropTypes.string,
    ContentID:PropTypes.string,
    ContentType:PropTypes.string,
    Type:PropTypes.string,
    inputValue:PropTypes.string,
}

export default MediaItem;