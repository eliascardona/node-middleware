const corsMiddleware = (req, res, next) => {
	if(req.method === 'OPTIONS') {
		res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE')
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
		return res.status(200)
	}
	if (req.method === 'POST') {
		res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE')
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	}
}


module.exports = { corsMiddleware }