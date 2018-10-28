import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default (props) => {
    const attachmentList = props.attachments.map((attachment, i) => {
        return (
            <div className="thumbnail"
                style={{backgroundImage: `url(${attachment.url})`}}
                onClick={props.removeAttachment}
                id={attachment.id}
                key={`key-${i}`}
                >
                    <div className="circle-container">
                        <FontAwesomeIcon 
                            icon={faTrash}
                            inverse
                            />
                    </div>
                </div>
        )
    });
    const attachedFiles = <p>Attached files</p>;
    return (
        <div>
            {props.attachments.length > 0 ? attachedFiles : ''}
            <div className="thumbnails">
                {attachmentList}
            </div>
        </div>
    )
}