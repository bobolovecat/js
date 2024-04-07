const getColor = color => ({
    'red': '#ff0000',
    'yellow': '#ffff00',
    'green': '#008000',
    'blue': '#0000ff',
    'purple': '#800080',
}[color.toLowerCase()] || 'color not found');
