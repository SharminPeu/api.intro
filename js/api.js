function loadData()
{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
//  load users and display on the  website 
function loadUsers()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>displayUsers(data))
}

function displayUsers(users)
{
    // console.log(users);
    const ul=document.getElementById('user');
    for(const user of users)
    {
        const li=document.createElement('li');
        li.innerText=`name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}

function loadPosts()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>console(data))
}


const peu=JSON.stringify({name:"peus"})
console.log(peu.name)