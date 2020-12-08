import React from 'react';
import PropTypes from 'prop-types';
import {MDBCloseIcon, MDBBox} from "mdbreact";

const SearchInput = (props) => {

    const {
        value,
        onChange,
        onReset
    } = props;

    return (
        <MDBBox display="flex" alignItems="center">
            <div className="form-group mb-0 mr-4 flex-grow-1">
                <input type="text"
                       value={value}
                       onChange={onChange}
                       className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                       placeholder="Search..."/>
            </div>
            <MDBCloseIcon onClick={onReset}/>
        </MDBBox>
    )
}

SearchInput.propTypes = {
    value:PropTypes.string,
    onChange:PropTypes.func,
    onReset:PropTypes.func,
}



export default SearchInput;