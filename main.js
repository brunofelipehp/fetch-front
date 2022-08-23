const url = "http://localhost:5510/api";

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error));
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then(data => {
      userName.textContent = data.name,
        userCity.textContent = data.city,
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error));
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error));
}

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error));
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      "content-type": "application/json; charset=utf-8",
    }
  })
  .then(response => response.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}

const newUser = {
  name: "Bruno Felipe",
  city: "São Paulo",
  avatar: "https://avatars.githubusercontent.com/u/28022475?v=4",
};

const updatedUser = {
  name: "Marcelo Smith",
  avatar: "https://picsum.photos/200/300",
  city: "Recife",
};

//updateUser(updatedUser, 1);

//addUser(newUser);
getUsers();
getUser(1);
deleteUser(3)
