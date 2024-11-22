const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { corsMiddleware } = require('./middlewares/cors.js')
const { inputValidationMiddleware } = require('./middlewares/inputValidationMiddleware.js')
const mainRouter = require('./routes/mainRouter.js')
/*   BEGIN of the middlewares code   */
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(function(req, res, next) {
	corsMiddleware(req, res)
	next()
})
// app.use(function(req, res, next) {
// 	inputValidationMiddleware(req, res)
// 	next()
// })
/*   END of middlewares code   */

app.use('/endpoint', mainRouter)


app.use((err, req, res, next) => res.status(500).json({ message: `-- SERVER ERROR  ${err.message}`}))
app.listen(8082, () => {
    console.log(`Servicio MVC en puerto 8080`)
})