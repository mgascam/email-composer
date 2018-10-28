import React from 'react';

export default (props) => {
    const attachmentList = props.attachments.map((attachment, i) => {
        return (
            <div className="thumbnail">
                <img class="img-fluid" 
                    src={attachment.url}  
                    onClick={props.removeAttachment} 
                    id={attachment.id}
                    alt="" />
            </div>
        )
    });
    return(
        <div className="thumbnails">
            {attachmentList}
        </div>
    )
}