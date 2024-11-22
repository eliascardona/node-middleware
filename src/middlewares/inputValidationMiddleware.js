const AJV = require('ajv');
const ajv = new AJV();
const { EXPECTED_INPUT_SCHEMA } = require('../schemas/AJVextenseFormSchema.js')

const inputValidationMiddleware = (req, res) => {
  const { sectionId, ...sectionData } = req.body;

  if (EXPECTED_INPUT_SCHEMA[sectionId]) {
    const validate = ajv.compile(EXPECTED_INPUT_SCHEMA[sectionId])
    const valid = validate(sectionData)

    if (!valid) {
      return res.status(400).json({
        message: `Internal Server Error via AJV ${validate.errors}`,
      })
    }
    const OK_SERVER_LOG = {
      LOG_MESSAGE: 'we recieved a valid request body',
      REQUEST_BODY: sectionData != null ? sectionData['section1'].sectionId : 'malo',
    }
    console.log(JSON.stringify(OK_SERVER_LOG))
    
  }
}

module.exports = { inputValidationMiddleware }