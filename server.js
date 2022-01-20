// server port
let port = 3000

// express server
let express = require('express')
const app = express()

// serve frontend files (built)
app.use(express.static('./www'));


// start av webbservern
app.listen(port, async () => {
    console.log(`http://localhost:${port}/`)
    console.log('server running on port ' + port)
})