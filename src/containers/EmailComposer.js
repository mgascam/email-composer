import { connect } from 'react-redux';
import { sendEmail } from '../actions';
import { push } from 'connected-react-router'
import EmailForm from '../components/EmailForm';

const mapStateToProps = state => {
    return {
        email: state.email
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSendEmail: (email) => {
            dispatch(sendEmail(email));
            dispatch(push('/send-email'));
        }
    }
}

const EmailComposer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(EmailForm);

export default EmailComposer;