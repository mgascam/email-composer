import React from 'react';
import PageTemplate from './PageTemplate';
import EmailRenderer from '../containers/EmailRenderer';

export default () => {
    return (
        <PageTemplate>
            <section className="form-wrapper">
                <div className="card">
                    <div className="card-body">
                        <EmailRenderer />
                    </div>
                </div>
            </section>
        </PageTemplate>
    );
};