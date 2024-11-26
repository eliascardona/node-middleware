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
        workEnvironment: "Supportive",
    },
    section3: {
        sectionId: 'familySystemFactors',
        familySupport: "Good",
        numberOfDependents: 3,
    },
    section4: {
        sectionId: 'socioCulturalEconomicFactors',
        income: 4500,
        educationLevel: "Bachelor's",
        employmentStatus: "Full-time",
    },
    section5: {
        sectionId: 'generalHealthStatus',
        healthStatus: "Good",
        chronicConditions: ["None"],
        recentHospitalization: false,
    },
    section6: {
        sectionId: 'universalSelfCare',
        selfCareHabits: "Regular Exercise",
        sleepQuality: "Good",
    },
    section7: {
        sectionId: 'cardiovascularSystem',
        heartCondition: "None",
        bloodPressure: 120,
    },
    section8: {
        sectionId: 'nutrition',
        dailyFruitVegetableIntake: 5,
        waterIntake: "Adequate",
    },
    section9: {
        sectionId: 'lifestyle',
        activityLevel: "Moderate",
        restQuality: "Good",
    },
    section10: {
        sectionId: 'auditoryVisualSystem',
        hearingCondition: "Normal",
        visionCondition: "Normal",
    },
    section11: {
        sectionId: 'lifeThreateningRiskPrevention',
        smokingStatus: "Non-smoker",
        alcoholConsumption: "Occasional",
    },
    section12: {
        sectionId: 'environmentalFactors',
        workEnvironmentQuality: "Good",
        noiseLevel: "Low",
    },
    section13: {
        sectionId: 'promotionOfHumanFunctioning',
        mentalHealth: "Stable",
        socialInteractionLevel: "High",
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

    for (const [k] of Object.entries(attrbs)) {
        if (trustedDataFields[k] !== undefined) {
            targetScores.push(trustedDataFields[k])
        }
    }

    let total = 0
    targetScores.forEach((el, i) => {
        if(typeof el === 'number') {
            total += el
        }
    })

    return total
}


module.exports = { determineCategoryScore, calculateScore }