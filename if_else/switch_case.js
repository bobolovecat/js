const getColor = color => {
    switch (color.toLowerCase()) {
        case 'red':
            return '#ff0000'
        case 'yellow':
            return '#ffff00'
        case 'green':
            return '#008000'
        case 'blue':
            return '#0000ff'
        case 'purple':
            return '#800080'

        default:
            return 'color not found'
    }
}