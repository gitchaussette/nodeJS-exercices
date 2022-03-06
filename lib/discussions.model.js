const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path')
const filename = path.resolve('./data/discussions.json')

function getDiscussions() {
    return new Promise((resolve) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            let discussions = []
            try {
                discussions = JSON.parse(data)
            } catch (e) {


            }
            resolve(discussions)
        })
    })
}

function saveDiscussions(discussions) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, JSON.stringify(discussions), (err) => {
            if (err) {
                reject(err)
                return
            }
            resolve(discussions)
        })
    })
}

module.exports = {
    getDiscussions,
    saveDiscussions
}