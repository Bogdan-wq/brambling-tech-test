import React from 'react';
import {MDBBox} from "mdbreact";

const Loading = () => {
    return (
        <MDBBox display="flex" className="mt-2" justifyContent="center" flex="column" alignItems="center">
            <div className="spinner-border fast" role="status" />
            <MDBBox tag="span" className="mt-1">Loading...</MDBBox>
        </MDBBox>

    )
}

export default Loading;