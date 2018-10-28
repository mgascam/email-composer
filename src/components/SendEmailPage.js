import React from 'react';
import Section from './Section';
import EmailRenderer from '../containers/EmailRenderer';

export default () => {
    return (
        <Section classNames="email-confirmation-wrapper">
            <div className="card">
                <div className="card-body">
                    <EmailRenderer />
                </div>
            </div>
        </Section>
    );
};