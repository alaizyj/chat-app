import render from './view';
import state from './state';

const messages = {
    'network-error': 'Please check your Internet connection!',
    'auth-missing': 'Your session expires, please login first!',
    'required-username': 'Username cannot be empty, and should consist of only numbers and digits!',
    'auth-insufficient': 'Sorry dogs, please try another username!',
    'required-message': 'Please input your message!',
    default: 'Something went wrong, please try again later!',
};

function handleError(err) {
    state.error = messages[err.error] || messages.default;
    render();
}

export default handleError;