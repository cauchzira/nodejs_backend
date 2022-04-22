const express = require('express')
const { use } = require('express/lib/router')
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 7000

const app = express()

app.use(express.json())
app.use('/api', userRouter)



app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})