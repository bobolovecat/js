
const getColor = color => {
    if (color.toLowerCase() === 'red') {
        return '#ff0000'
    } else if (color.toLowerCase() === 'yellow') {
        return '#ffff00'
    } else if (color.toLowerCase() === 'green') {
        return '#008000'
    } else if (color.toLowerCase() === 'blue') {
        return '#0000ff'
    } else if (color.toLowerCase() === 'purple') {
        return '#800080'
    }

    return 'color not found'
}

const checkPassword = password => {
    if (password.length < 8) {
        // ...
    } else if (password.search(/[a-z]/) < 0) {
        // ...
    } else if (password.search(/[A-Z]/) < 0) {
        // ...
    } else if (password.search(/[0-9]/) < 0) {
        // ...
    } else {
        // ...
    }
}


