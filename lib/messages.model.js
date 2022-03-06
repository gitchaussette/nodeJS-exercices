const fs = require('fs');
const { resolve } = require('path');
const path = require('path')
const filename = path.resolve('./data/messages.json')

function getMessages() {
    return new Promise((resolve) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            let messages = []
            try {
                messages = JSON.parse(data)
            } catch (e) {
                //do nothing
            }
            resolve(messages)
        })
    })
}

function saveMessages(messages) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, JSON.stringify(messages), (err) => {
            if (err) {
                reject(err)
                return
            }
            resolve(messages)
        })
    })
}

module.exports = {
    getMessages,
    saveMessages
}