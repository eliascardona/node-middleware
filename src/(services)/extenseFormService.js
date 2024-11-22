const AJV = require('ajv')
const ajv = new AJV()
const formExpectedSchemas = require('../schemas/AJVextenseFormSchema.js')

const processExtenseForm = async (formData) => {
  const validate = ajv.compile(formExpectedSchemas)
  const valid = validate(formData)

  if (valid) {
    const result = { message: 'Todo estuvo OK' }
    return result
  }

  throw new Error(`-- AJV detected:  ${ajv.errorsText(validate.errors)}}`)
}

module.exports = { processExtenseForm }