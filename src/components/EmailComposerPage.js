import React from 'react';
import Section from './Section';
import EmailComposer from '../containers/EmailComposer';

export default () => {
    return (
        <Section classNames="email-composer-wrapper">
            <div className="card">
                <div className="card-header">
                    <h1>Send E-mail</h1>
                </div>
                <div className="card-body">
                    <EmailComposer />
                </div>
            </div>
        </Section>
    );
};