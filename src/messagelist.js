import state from './state';

function generateMessagesList() {
    const messageListHTML =
        state.messages.length === 0 ?
        `<p class="empty-message">No messages, try send one!</p>` :
        state.messages
        .map(
            (message) => `<li class="single-message"> 
    <div class="message-info">
    <img src="/img/${message.imgID}.png" class="message-avatar" />
    <span class="message-username">${message.user}</span>
    </div>
    <span class="${
      message.user === state.username ? 'user-message' : 'message-content'
    }">${message.message}</span>
    </li>`
        )
        .join('');

    return messageListHTML;
}

export default generateMessagesList;