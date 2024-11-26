const ENTITIES_ENUM = {
    section1: {
        sectionId: 'identification',
        employeeId: "12345",
        name: "John Doe",
        age: 35,
    },
    section2: {
        sectionId: 'workCharacteristics',
        jobSatisfaction: 8,
        workEnvironment: 8,
    },
    section3: {
        sectionId: 'familySystemFactors',
        familySupport: 3,
        numberOfDependents: 3,
    },
    section4: {
        sectionId: 'socioCulturalEconomicFactors',
        income: 4500,
        educationLevel: 5,
        employmentStatus: 2,
    },
    section5: {
        sectionId: 'generalHealthStatus',
        healthStatus: 3,
        chronicConditions: [1, 2, 3],
        recentHospitalization: 1,
    },
    section6: {
        sectionId: 'universalSelfCare',
        selfCareHabits: 2,
        sleepQuality: 2,
    },
    section7: {
        sectionId: 'cardiovascularSystem',
        heartCondition: 10,
        bloodPressure: 3,
    },
    section8: {
        sectionId: 'nutrition',
        dailyFruitVegetableIntake: 5,
        waterIntake: 1,
    },
    section9: {
        sectionId: 'lifestyle',
        activityLevel: 2,
        restQuality: 2,
    },
    section10: {
        sectionId: 'auditoryVisualSystem',
        hearingCondition: 2,
        visionCondition: 2,
    },
    section11: {
        sectionId: 'lifeThreateningRiskPrevention',
        smokingStatus: 2,
        alcoholConsumption: 2,
    },
    section12: {
        sectionId: 'environmentalFactors',
        workEnvironmentQuality: 2,
        noiseLevel: 2,
    },
    section13: {
        sectionId: 'promotionOfHumanFunctioning',
        mentalHealth: 4,
        socialInteractionLevel: 4,
    }
}

const determineCategoryScore = (totalScore, maxScore) => {
    const thresholds = {
        excellent: maxScore * 0.95,
        good: maxScore * 0.75,
        regular: maxScore * 0.5
    }

    if (totalScore >= thresholds.excellent) return 'excelente'
    if (totalScore >= thresholds.good) return 'bueno'
    if (totalScore >= thresholds.regular) return 'regular'
    return 'deficiente'
}

const calculateScore = (originalSectionIdentifier, trustedDataFields) => {
    let targetScores = []

    const attrbs = ENTITIES_ENUM[originalSectionIdentifier]

    for (let [k, v] of Object.entries(attrbs)) {
        if (k === 'income') {
            continue
        }
        if (trustedDataFields[k] != null) {
            targetScores.push(trustedDataFields[k])
        }
    }
    let total = 0

    if (targetScores.length) {
        targetScores.forEach((el, i) => {
            if(typeof el === 'number') {
                total += el
            }
            if (Array.isArray(el)) {
                el.map((el, i, arr) => {
                    if (arr.length > 6) {
                        total -= 5
                    }
                })
            }
        })
    }    

    return total
}


module.exports = { determineCategoryScore, calculateScore }