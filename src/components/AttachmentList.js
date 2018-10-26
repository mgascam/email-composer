import React from 'react';

export default (props) => {
    const attachmentList = props.attachments.map((attachment, i) => {
        return (
            <li key={`attachment-${i}`}>
                <img src={attachment.url} 
                    alt="attachment" 
                    onClick={props.removeAttachment} 
                    id={attachment.id}
                    />
            </li>
        )
    });
    return(
        <ul>{attachmentList}</ul>
    )
}