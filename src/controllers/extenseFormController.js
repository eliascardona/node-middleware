const { processExtenseForm } = require('../(services)/extenseFormService.js')

const extenseFormController = async (req, res) => {
  try {
    const formData = req.body
    const result = await processExtenseForm(formData)

    if (result != null) {
      res.status(200).json(result)
    }
    return res.status(500).json({message: 'ALGO RARO HA SUCEDIDO'})

  } catch(err) {
    return res.status(500).json({message: `${err.message}`})
  }
}

module.exports = { extenseFormController }