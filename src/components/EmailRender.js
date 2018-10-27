import React from 'react';
import AttachmentList from './AttachmentList';

export default (props) => {
    const { email } = props;
    const gotEmail = email.to.length > 0;
    if (gotEmail) {
        return (
            <div className="card-body">
                <h3>{email.subject}</h3>
                <p><span className="font-weight-bold">to</span> {email.to}</p>
                <p><span className="font-weight-bold">cc</span> {email.cc}</p>
                <p><span className="font-weight-bold"> bcc</span> {email.bcc}</p>
                <p>{email.message}</p>
                <AttachmentList attachments={email.attachments} />
            </div>
        )
    }
    return <p>No email!</p>

}