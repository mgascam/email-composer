import React from 'react';

export default (props) => {
    const attachmentList = props.attachments.map((attachment, i) => {
        return (
            <div className="thumbnail"
                style={{'background-image': `url(${attachment.url})`}}
                onClick={props.removeAttachment}
                id={attachment.id}>
                
                </div>
        )
    });
    return(
        <div className="thumbnails">
            {attachmentList}
        </div>
    )
}