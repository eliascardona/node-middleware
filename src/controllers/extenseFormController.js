const { processExtenseForm } = require('../(services)/extenseFormService.js');

const extenseFormController = async (req, res) => {
  try {
    const formData = req.body
    const result = await processExtenseForm(formData)
    const responseFmt = JSON.stringify({SERVER_BODY: result})
    console.log(responseFmt)

    return res.status(200).send(responseFmt)

  } catch (err) {
    let fmt = JSON.stringify({ SERVER_ERR: `${err}` })
    console.log(fmt)
    return res.status(500).send(fmt)
  }
}


module.exports = { extenseFormController }