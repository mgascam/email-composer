import { connect } from 'react-redux';
import { sendEmail } from '../actions';
import EmailForm from '../components/EmailForm';

const mapStateToProps = state => {
    return {
        email: state.email
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSendEmail: email => dispatch(sendEmail(email))
    }
}

const EmailComposer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(EmailForm);

export default EmailComposer;