const express = require('express')

const app = express()
//adding static files
app.use(express.static('public'))

app.get('/', (request, response)=>{
    response.send(`
    <html>
        <head>
            <link rel="stylesheet" href="/styles/styles.css"/>
        </head>
        <body>
            <div>
               lol
            </div>
        </body>
    </html>
    `)
})

app.get('/trump',(req, res)=>{
    res.sendFile(__dirname + '/views/trump.html')
})

app.get('/perro', (request, response)=>{
    response.send('Saca las chelas')
})



app.listen(3000,()=>{
    console.log('Running express app on port 3000')
})