import { connect } from 'react-redux';
import EmailRender from '../components/EmailRender';

const mapStateToProps = state => {
    return {
        email: state.email
    }
};

const EmailRenderer = connect(
    mapStateToProps
)(EmailRender);

export default EmailRenderer;