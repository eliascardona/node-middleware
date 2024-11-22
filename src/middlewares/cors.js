const corsMiddleware = (req, res) => {
	if(req.method === 'OPTIONS') {
		res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
		res.set('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE')
		res.set('Access-Control-Allow-Headers', 'Content-Type')
		return res.status(200).json({ message: 'CORS properly passed' })
	}
}


module.exports = { corsMiddleware }