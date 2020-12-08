import React from "react";
import {MDBBox} from "mdbreact";

const Error = () => {
    return (
        <MDBBox display="flex" justifyContent="center" className="mt-2">
            <span className="lead text-danger">Something goes wrong requesting data</span>
        </MDBBox>
    )
}

export default Error;