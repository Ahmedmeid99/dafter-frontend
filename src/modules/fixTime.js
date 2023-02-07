const fixTime = (updatedAt) => {
    let updatedAt_time = 'few moments ago'
    if (updatedAt) {
        const oldDate = updatedAt
        const dateArr = oldDate.replace(/T/, ' ').replace(/\..+/, '').split(' ')
        const date = dateArr[0].split('-')
        const time = dateArr[1].split(':')
        updatedAt_time = `${date[2]}/${date[1]}/${date[0]}  ${time[0]}:${time[1]}`
        return updatedAt_time
    } else {
        return updatedAt_time
    }
}

export default fixTime