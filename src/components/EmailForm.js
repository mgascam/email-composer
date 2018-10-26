import React, { Component } from 'react';
import PageTemplate from './PageTemplate';

class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: "",
            cc: "",
            bcc: "",
            subject: "",
            message: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <PageTemplate>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="to" 
                        type="text" 
                        value={this.state.to} 
                        onChange={this.handleInputChange} 
                        placeholder="To" /> 
                    <input 
                        name="cc" 
                        type="text" 
                        value={this.state.cc} 
                        onChange={this.handleInputChange} 
                        placeholder="CC" />
                    <input 
                        name="bcc" 
                        type="text" 
                        value={this.state.bcc} 
                        onChange={this.handleInputChange} 
                        placeholder="BCC"/>
                    <input 
                        name="subject" 
                        type="text" 
                        value={this.state.subject} 
                        onChange={this.handleInputChange} 
                        placeholder="Subject"/>
                    <textarea 
                        name="message" 
                        placeholder="Message" 
                        value={this.state.message} 
                        onChange={this.handleInputChange}>
                    </textarea>
                    <input type="submit" value="Submit" />
                </form>
            </PageTemplate>
        )
    }
}

export default EmailForm;
