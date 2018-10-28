import React from 'react';
import PageTemplate from './PageTemplate';

export default (props) => {
    return (
        <PageTemplate>
            <section className={props.classNames}>
                {props.children}
            </section>
        </PageTemplate>
    );
}