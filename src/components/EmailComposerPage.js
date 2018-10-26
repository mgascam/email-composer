import React from 'react';
import PageTemplate from './PageTemplate';
import EmailComposer from '../containers/EmailComposer';

export default () => {
    return (
        <PageTemplate>
            <section className="form-wrapper">
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