import React from 'react';
import PageTemplate from './PageTemplate';
import EmailComposer from '../containers/EmailComposer';

export default (props) => {
    return (
        <PageTemplate>
            <section className="email-composer-wrapper">
                <div className="card">
                    <div className="card-header">
                        <h1>Send E-mail</h1>
                    </div>
                    <div className="card-body">
                        <EmailComposer />
                    </div>
                </div>
            </section>
        </PageTemplate>
    );
};