class API {
    login = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve({
                token: 'xdxd'
            }), 1000)
        })
    }
}

export default new API();