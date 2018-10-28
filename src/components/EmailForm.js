import React, { Component } from 'react';
import AttachmentList from './AttachmentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: "",
            cc: "",
            bcc: "",
            subject: "",
            message: "",
            attachments: [],
            toValid: false,
            ccValid: true,
            bccValid: true,
            formValid: false,
            touched: {
                to: false,
                cc: false,
                bcc: false,
                subject: false,
                message: false,
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
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
    handleBlur(event) {
        const target = event.target;
        const name = target.name;
        const newState = {
            touched: {
                ...this.state.touched,
                [name]: true 
            }
        }
        this.setState(newState);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSendEmail({
            to: this.state.to.split(',').map(email => email.trim()),
            cc: this.state.to.split(',').map(email => email.trim()),
            bcc: this.state.bcc.split(',').map(email => email.trim()),
            subject: this.state.subject,
            message: this.state.message,
            attachments: this.state.attachments
        });
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
    shouldMarkError(field) {
        const isValid = this.state[`${field}Valid`];
        const shouldShow = this.state.touched[field];
        return isValid ? false : shouldShow;
    }
    render() {
        return (
            <form className="email-composer-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        className={`form-control ${this.shouldMarkError('to') ? 'is-invalid': ''}` }
                        name="to" 
                        type="text" 
                        value={this.state.to} 
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        placeholder="To" /> 
                </div>
                <div className="form-group">
                    <input
                        className={`form-control ${this.shouldMarkError('cc') ? 'is-invalid': ''}` }
                        name="cc" 
                        type="text" 
                        value={this.state.cc} 
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        placeholder="CC" />
                </div>
                <div className="form-group">
                    <input
                        className={`form-control ${this.shouldMarkError('bcc')? 'is-invalid': ''}` }
                        name="bcc" 
                        type="text" 
                        value={this.state.bcc} 
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur} 
                        placeholder="BCC"/>
                </div>
                <div className="form-group">
                    <input
                        className={`form-control ${this.shouldMarkError('subject') ? 'is-invalid': ''}` } 
                        name="subject" 
                        type="text" 
                        value={this.state.subject} 
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur} 
                        placeholder="Subject"/>
                </div>
                <div className="form-group">
                    <textarea
                        className={`form-control ${this.shouldMarkError('message') ? 'is-invalid': ''}` }
                        name="message" 
                        placeholder="Message" 
                        value={this.state.message} 
                        onChange={this.handleInputChange}>
                        onBlur={this.handleBlur}
                    </textarea>
                </div>
                <div className="form-group">
                    <input type="file" onChange={this.handleFileChange} id="input-attachments" />
                    <label htmlFor="input-attachments" className="btn-attachments">
                        <FontAwesomeIcon 
                            icon={faPaperclip}
                            size="lg"
                            transform={{ rotate:-45 }}
                        />
                    </label>
                </div>
                <AttachmentList 
                    attachments={this.state.attachments} 
                    removeAttachment={this.onRemoveAttachment}  />
                <button
                    type="submit" 
                    className="btn btn-primary btn-send"
                    onMouseEnter={() => {this.setState({ touched: { to: true, subject: true, message: true }})}}
                    disabled={!this.state.formValid}>&rarr; Send</button>
            </form>
        )
    }
}

export default EmailForm;
