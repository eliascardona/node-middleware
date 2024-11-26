const { calculateScore, determineCategoryScore } = require('./(utils)/calculationHelpers.js')


const scoreCalculation = async (sectionKey, sectionId, trustedDataFields) => {
    switch (sectionId) {
        case 'workCharacteristics': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 100)
            }
        }
        case 'familySystemFactors': {

        }
        case 'socioCulturalEconomicFactors': {

        }
        case 'generalHealthStatus': {

        }
        case 'universalSelfCare': {

        }
        case 'cardiovascularSystem': {

        }
        case 'nutrition': {

        }
        case 'lifestyle': {

        }
        case 'auditoryVisualSystem': {

        }
        case 'lifeThreateningRiskPrevention': {

        }
        case 'environmentalFactors': {

        }
        case 'promotionOfHumanFunctioning': {

        }
        default:
            return 'sin calificación'
    }
}


module.exports = { scoreCalculation }