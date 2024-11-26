const { calculateScore, determineCategoryScore } = require('./(utils)/calculationHelpers.js')


const scoreCalculation = (sectionKey, sectionId, trustedDataFields) => {
    switch (sectionId) {
        case 'workCharacteristics': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'familySystemFactors': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'socioCulturalEconomicFactors': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'generalHealthStatus': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'universalSelfCare': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'cardiovascularSystem': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'nutrition': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'lifestyle': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'auditoryVisualSystem': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'lifeThreateningRiskPrevention': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'environmentalFactors': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        case 'promotionOfHumanFunctioning': {
            const originalSectionIdentifier = typeof sectionKey === 'string' ? sectionKey : undefined
            if (originalSectionIdentifier != null) {
                const obtainedScore = calculateScore(originalSectionIdentifier, trustedDataFields)
                return determineCategoryScore(obtainedScore, 10)
            }
        }
        default:
            return 'sin calificación'
    }
}


module.exports = { scoreCalculation }
