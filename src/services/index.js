class API {
    login = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve({
                accessToken: 'xdxd'
            }), 1000)
        })
    }
}

export default new API();