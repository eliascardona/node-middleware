const AJV = require('ajv')
const ajv = new AJV()
const { EXPECTED_INPUT_SCHEMA } = require('../schemas/ajv/extenseFormSchema')
const { scoreCalculation } = require('./extenseForm/scoreCalculation')
const { insertResultsCallback } = require('./database/insertResults')

const processExtenseForm = async (formData) => {
  const validatedResults = {}

  for (let [sectionKey, sectionData] of Object.entries(formData)) {
    let schema = EXPECTED_INPUT_SCHEMA[sectionKey]
    if (!schema) {
      validatedResults[sectionKey] = {
        status: 'error',
        message: `No existe un esquema para la sección "${sectionKey}"`
      }
      continue
    }

    let validate = ajv.compile(schema)
    let valid = validate(sectionData)

    if (valid) {
      let score = scoreCalculation(sectionKey, sectionData.sectionId, sectionData);
      validatedResults[sectionKey] = {
        status: 'valid',
        score,
      }

    } else {
      validatedResults[sectionKey] = validate.errors.map((err) => {
        switch (err.keyword) {
          case "minimum":
            return `Error: ${err.message}. El valor proporcionado fue ${err.data}.`
          case "type":
            return `Error: ${err.message}. Se esperaba un tipo ${err.params.type}.`
          case "required":
            return `Error: ${err.message}. La propiedad faltante es "${err.params.missingProperty}".`
          default:
            return `Error en ${err.keyword}: ${err.message}`
        }
      })
    }
  }
  insertResultsCallback(validatedResults)

  return validatedResults
}

module.exports = { processExtenseForm }