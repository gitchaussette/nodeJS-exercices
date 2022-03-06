const fs = require('fs');
const { resolve } = require('path');
const path = require('path')
const filename = path.resolve('./data/users.json')

function getUsers() {
    return new Promise((resolve) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            let users = []
            try {
                users = JSON.parse(data)
            } catch (e) {
                //do nothing
            }
            resolve(users)
        })
    })
}

function saveUsers(users) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, JSON.stringify(users), (err) => {
            if (err) {
                reject(err)
                return
            }
            resolve(users)
        })
    })
}

module.exports = {
    getUsers,
    saveUsers
}