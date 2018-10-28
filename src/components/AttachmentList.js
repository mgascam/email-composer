import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default (props) => {
    const mode = props.mode || 'edit';
    const attachmentList = props.attachments.map((attachment, i) => {
        return (
            <div className={`thumbnail ${ mode === 'edit' ? 'thumbnail-edit' : ''}`}
                style={{backgroundImage: `url(${attachment.url})`}}
                onClick={props.removeAttachment}
                id={attachment.id}
                key={`key-${i}`}>
                    <div className="circle-container">
                        <FontAwesomeIcon 
                            icon={faTrash}
                            inverse/>
                    </div>
                </div>
        )
    });
    const attachedFiles = <p>Attached files</p>;
    return (
        <div>
            {props.attachments.length > 0 && mode === 'edit' ? attachedFiles : ''}
            <div className="thumbnails">
                {attachmentList}
            </div>
        </div>
    )
}