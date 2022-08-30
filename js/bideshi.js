const userFace =() =>{
  fetch ('https://randomuser.me/api/?results=10')
  .then (res => res.json())
  .then (data => displayUsers(data.results))
}

const displayUsers = user =>{
  const showUser =document.getElementById('user-container');
  for (const users of user){
    console.log(user)
  const insertUser = document.createElement('div');
  insertUser.classList.add('user')
  insertUser.innerHTML =`
  <h3>User Name: ${users.name.title} ${users.name.first} ${users.name.last}</h3>
  <p>User Email: ${users.email}</p>
  <p>User Info: ${users.location.city} ${users.location.country}</p>
  `;
  showUser.appendChild(insertUser);
  }

}

userFace();