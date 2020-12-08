import React from "react";
import {MDBBox} from "mdbreact";

const NoItems = () => {
    return (
        <MDBBox display="flex" justifyContent="center" className="lead mt-2">
            No matching data found
        </MDBBox>
    )
}

export default NoItems;