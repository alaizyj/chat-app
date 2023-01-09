import state from './state';

function generateUsersLists() {
    const userListHTML = state.users
        .map(
            (user) => `<li class="single-user"> 
        <img src="/img/${user.imgID}.png" class="user-avatar" />
        <span class="user-name">${user.username}</span>
        </li>`
        )
        .join('');

    return userListHTML;
}

export default generateUsersLists;