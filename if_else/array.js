import array from "./passwordArr.js"

const checkPassword = password => {
    // const array = [
    //     [
    //         password => password.length < 8, 
    //         () => {
    //             // ...
    //         }
    //     ],
    //     [
    //         password => password.search(/[a-z]/) < 0, 
    //         () => {
    //             // ...
    //         }
    //     ],
    //     [
    //         password => password.search(/[A-Z]/) < 0, 
    //         () => {
    //             // ...
    //         }
    //     ],
    //     [
    //         password => password.search(/[0-9]/) < 0, 
    //         () => {
    //             // ...
    //         }
    //     ],
    // ];
    const check = array.find((item) => item[0](password))

    check ? check[1]() : console.log('submit')
}