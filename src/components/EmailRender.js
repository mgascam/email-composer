import React from 'react';
import AttachmentList from './AttachmentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default (props) => {
    const { email } = props;
    const gotEmail = email.to.length > 0;
    const renderRecipients = (field) => {
        const recipients = email[field];
        return recipients.length ? 
            <p><span className="font-weight-bold text-secondary">{field}</span> <span className="text-primary">{recipients.join(', ')}</span></p> : '';
    }
    if (gotEmail) {
        return (
            <div>
                <div className="card-header">
                    <div className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faCheckCircle} 
                                    size="8x"
                                    color="#61c195" />
                        
                    </div>
                    <h4 className="text-center my-4 text-secondary">Your email has been sent</h4>
                </div>
                <div className="card-body mt-4">
                    <h4>{email.subject}</h4>
                    {renderRecipients('to')}
                    {renderRecipients('cc')}
                    {renderRecipients('bcc')}
                    <p className="text-justify mt-3">{email.message}</p>
                    <AttachmentList attachments={email.attachments} />
                </div>
            </div>
        )
    }
    return <p>No email!</p>

}