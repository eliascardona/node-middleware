const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { corsMiddleware } = require('./middlewares/cors.js')
const mainRouter = require('./routes/mainRouter.js')


/*  middleware code   */
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(function(req, res, next) {
	corsMiddleware(req, res)
	next()
})
/*  middleware code's END */

app.use('/', mainRouter)


app.use((err, req, res, next) => {
	console.error('Middleware de error:', err.message)
	return res.status(500).json({ message: `-- GLOBAL SERVER ERROR ${err.message}` })
})

app.listen(8085, () => {
    console.log(`Servicio MVC en puerto 8085`)
})
