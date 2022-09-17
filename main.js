/// no 1
function listUser(number) {
    return fetch(`https://reqres.in/api/users?page=${number}`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err.error))
}
/// no 2
function singleUser(id) {
    
    const response = fetch(`https://reqres.in/api/users/${id}`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err.error))
   return response
}

///no 3
