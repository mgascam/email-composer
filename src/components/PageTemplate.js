import React from 'react';

export default ({children}) => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )   
}