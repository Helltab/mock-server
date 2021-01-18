function combinePath(...paths) {
    let path = ''
    paths.forEach(p => {
        path += p.substr(0, 1) === '/' ? p : '/' + p
    })
    path = path.replace(/\/\//g, '/')
    return path
}

module.exports = {combinePath}