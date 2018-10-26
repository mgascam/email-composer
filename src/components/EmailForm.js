import React, { Component } from 'react';
import AttachmentList from './AttachmentList';

class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: "",
            cc: "",
            bcc: "",
            toValid: false,
            ccValid: true,
            bccValid: true,
            subject: "",
            message: "",
            attachments: [],
            formValid: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.onRemoveAttachment = this.onRemoveAttachment.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        }, () => { this.validateField(name, value)});
    }
    handleFileChange(event) {
        const newAttachment = {
            id: `attachment-${this.state.attachments.length + 1}`,
            url: URL.createObjectURL(event.target.files[0])
        };
        this.setState({
            attachments: [...this.state.attachments, newAttachment]
        });
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    // TODO extract function & ut
    validateEmailList(commaSeparatedString){
        const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        return commaSeparatedString.split(',').every(val => val.trim().match(emailRegex));
    }
    validateField(fieldName, value) {
        const isValidEmailList = this.validateEmailList(value);
        let isValid;
        switch(fieldName) {
            case 'to':
                isValid = isValidEmailList;
            break;
            case 'cc':
            case 'bcc':
                isValid = value.length > 0 ? isValidEmailList : true;
            break;
            case 'subject':
                isValid = value.length > 0 && value.length <= 100;
            break;
            case 'message':
                isValid = value.length > 0;
            break;
            default:
            break;
        }
        this.setState({ ...this.state, [`${fieldName}Valid`]: isValid}, this.validateForm);
    }
    validateForm() {
        this.setState({ formValid: this.isFormValid() });
    }
    isFormValid() {
        return this.state.toValid 
            && this.state.ccValid 
            && this.state.bccValid 
            && this.state.subjectValid 
            && this.state.messageValid;
    }
    onRemoveAttachment(event){
        const attachments = this.state.attachments.filter(att => att.id !== event.target.id);
        this.setState({
            attachments
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        className={`form-control ${!this.state.toValid ? 'is-invalid': ''}` }
                        name="to" 
                        type="text" 
                        value={this.state.to} 
                        onChange={this.handleInputChange} 
                        placeholder="To" /> 
                </div>
                <div className="form-group">
                    <input
                        className={`form-control ${!this.state.ccValid ? 'is-invalid': ''}` }
                        name="cc" 
                        type="text" 
                        value={this.state.cc} 
                        onChange={this.handleInputChange} 
                        placeholder="CC" />
                </div>
                <div className="form-group">
                    <input
                        className={`form-control ${!this.state.bccValid ? 'is-invalid': ''}` }
                        name="bcc" 
                        type="text" 
                        value={this.state.bcc} 
                        onChange={this.handleInputChange} 
                        placeholder="BCC"/>
                </div>
                <div className="form-group">
                    <input
                        className={`form-control ${!this.state.subjectValid ? 'is-invalid': ''}` } 
                        name="subject" 
                        type="text" 
                        value={this.state.subject} 
                        onChange={this.handleInputChange} 
                        placeholder="Subject"/>
                </div>
                <div className="form-group">
                    <textarea
                        className={`form-control ${!this.state.messageValid ? 'is-invalid': ''}` }
                        name="message" 
                        placeholder="Message" 
                        value={this.state.message} 
                        onChange={this.handleInputChange}>
                    </textarea>
                </div>
                <input type="file" onChange={this.handleFileChange} />
                <AttachmentList 
                    attachments={this.state.attachments} 
                    removeAttachment={this.onRemoveAttachment}  />
                <button
                    type="submit" className="btn btn-primary" 
                    disabled={!this.state.formValid}>Sign up</button>
            </form>
        )
    }
}

export default EmailForm;
