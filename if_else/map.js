const getColor = color => (new Map([
    ['red', '#ff0000'],
    ['yellow', '#ffff00'],
    ['green', '#008000'],
    ['blue', '#0000ff'],
    ['purple', '#0000ff'],
]).get(color.toLowerCase()) || 'color not found')

const notifier = notification => {
    const map = new Map([
        ['verifySignup', () => {
            // ...
        }],
        ['resendVerifySignup', () => {
            // ...
        }],
        ['emailConfirmed', () => {
            // ...
        }]
    ])

    map.get(notification) ? map.get(notification)() : console.error('Your method does not exist')
}