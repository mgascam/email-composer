import React from 'react';
//import AttachmentList from './AttachmentList';

export default (props) => {
    const gotEmail = props.email.to.length > 0;
    if (gotEmail) {
        return (
            <p>Email sent{JSON.stringify(props)}</p>
        )
    }
    return <p>No email!</p>

}