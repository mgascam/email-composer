import { SEND_EMAIL } from '../actions';

const initialState = {
    email: {
        to: '',
        cc: '',
        bcc: '',
        subject: '',
        message: '',
        attachments: []
    }
}

function EmailComposerApp(state = initialState, action) {
    switch(action.type) {
        case SEND_EMAIL:
            return Object.assign({}, state, { email: action.email });
        default:
            return state;
    }
}

export default EmailComposerApp;