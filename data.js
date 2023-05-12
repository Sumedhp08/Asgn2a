
const userList = document.getElementById('user-list');


const users = JSON.parse(localStorage.getItem('users')) || [];

users.forEach(user => {
  const listItem = document.createElement('li');
  listItem.textContent = `${user.name} (${user.email})`;
  userList.appendChild(listItem);
});
