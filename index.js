const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { getUsers, saveUsers } = require('./lib/users.model')
const { getMessages, saveMessages } = require('./lib/messages.model')
const { getDiscussions, saveDiscussions } = require('./lib/discussions.model')
const cookieParser = require('cookie-parser')

app.use(bodyParser.json())
app.use(cookieParser())

// create an user
app.post('/users', async (req, res) => {
    if (!req.body.username ||
        !req.body.password ||
        typeof req.body.username !== "string" ||
        typeof req.body.password !== "string") {
        res.status(400).send({
            message: 'bad request'
        })
        return
    }

    const users = await getUsers()
    for (const user of users) {
        if (user.username === req.body.username) {
            res.status(402).send({
                message: 'conflict'
            })
            return
        }
    }
    const newUser = {
        username: req.body.username,
        password: req.body.password
    }
    users.push(newUser)
    try {
        await saveUsers(users)
        res.status(201).send({
            user: newUser
        })
    } catch (e) {
        res.status(500).send(e)
    }
})

// authorize an user
app.post('/auth', async (req, res) => {
    if (!req.body.username ||
        !req.body.password ||
        typeof req.body.username !== "string" ||
        typeof req.body.password !== "string") {
        res.status(400).send({
            message: 'bad request'
        })
        return
    }
    const users = await getUsers()
    const user = users.find((user) => user.username === req.body.username)
    if (!user) {
        res.status(404).send({
            message: 'not-found'
        })
        return
    }
    if (user.password !== req.body.password) {
        res.status(400).send({
            message: 'bad-password'
        })
        return
    }
    res.cookie('auth', user.username, { expire: 360000 + Date.now() });
    res.send({
        user
    })
})

// create a message
app.post('/messages', async (req, res) => {
    const messages = await getMessages()

    const newMessage = req.body.message

    var currentDate = new Date()
    var year = currentDate.getFullYear()
    var month = currentDate.getMonth()
    var day = currentDate.getDate()
    var hour = currentDate.getHours()
    var minutes = currentDate.getMinutes()
    var seconds = currentDate.getSeconds()
    var dateString = day + '/' + month + '/' + year + ', ' + hour + ':' + minutes + ':' + seconds

    messages.push(newMessage)
    try {
        await saveMessages(messages)
        res.status(201).send({
            author: req.cookies.auth,
            message: newMessage,
            createdAt: dateString
        })
    } catch (e) {
        res.status(500).send(e)
    }

    // res.send({
    //     message
    // })
})

// create a discussion
app.post('/discussions', async (req, res) => {
    const messages = await getMessages()
    const discussions = await getDiscussions()
})

// get current user
app.get('/users/me', (req, res) => {
    res.send({
        user: req.cookies.auth
    })
})

// get every message
app.get('/messages', async (req, res) => {
    const messages = await getMessages()
    res.send({
        message: messages
    })
})

// get every discussions
app.get('/discussions', (req, res) => {

})

app.listen(port, () => {
    console.log(`app started on the following url http://localhost:${port}`)
})