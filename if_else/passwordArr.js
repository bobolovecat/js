export default array = [
    [
        password => password.length < 8, 
        () => {
            // ...
            console.log(1)
        }
    ],
    [
        password => password.search(/[a-z]/) < 0, 
        () => {
            // ...
        }
    ],
    [
        password => password.search(/[A-Z]/) < 0, 
        () => {
            // ...
        }
    ],
    [
        password => password.search(/[0-9]/) < 0, 
        () => {
            // ...
        }
    ],
]

