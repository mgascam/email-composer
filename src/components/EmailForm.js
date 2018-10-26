import React, { Component } from 'react';
import PageTemplate from './PageTemplate';

class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: "",
            cc: "",
            bcc: "",
            toValid: false,
            ccValid: false,
            bccValid: false,
            subject: "",
            message: "",
            formErrors: {to: "",  cc: "", bcc: ""},
            formValid: false
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
        }, () => { this.validateField(name, value)});
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    componentDidUpdate() {
        console.log(this.state);
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let toValid = this.state.toValid;
        let ccValid = this.state.ccValid;
        let bccValid = this.state.bccValid;
        const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

        switch(fieldName) {
          case 'to':
            toValid = value.match(emailRegex);
            break;
          case 'cc':
            ccValid = value.match(emailRegex);
            break;
          case 'bcc':
            bccValid = value.match(emailRegex);
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        toValid,
                        ccValid,
                        bccValid
                      }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: this.isFormValid() });
    }
    isFormValid() {
        return this.state.toValid && this.state.ccValid && this.state.bccValid;
    }
    render() {
        return (
            <PageTemplate>
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
                            className="form-control" 
                            name="subject" 
                            type="text" 
                            value={this.state.subject} 
                            onChange={this.handleInputChange} 
                            placeholder="Subject"/>
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="message" 
                            placeholder="Message" 
                            value={this.state.message} 
                            onChange={this.handleInputChange}>
                        </textarea>
                    </div>
                    <button
                        type="submit" className="btn btn-primary" 
                        disabled={!this.state.formValid}>Sign up</button>
                </form>
            </PageTemplate>
        )
    }
}

export default EmailForm;
