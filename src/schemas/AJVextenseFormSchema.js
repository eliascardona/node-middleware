const EXPECTED_INPUT_SCHEMA = {
  section1: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'identification' },
      employeeId: { type: 'string' },
      name: { type: 'string' },
      age: { type: 'number', minimum: 18 },
    },
    required: ['sectionId', 'employeeId', 'name', 'age'],
    additionalProperties: false,
  },
  section2: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'workCharacteristics' },
      jobSatisfaction: { type: 'number', minimum: 0, maximum: 10 },
      workEnvironment: { type: 'string' },
    },
    required: ['sectionId', 'jobSatisfaction', 'workEnvironment'],
    additionalProperties: false,
  },
  section3: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'familySystemFactors' },
      familySupport: { type: 'string' },
      numberOfDependents: { type: 'number', minimum: 0 },
    },
    required: ['sectionId', 'familySupport', 'numberOfDependents'],
    additionalProperties: false,
  },
  section4: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'socioCulturalEconomicFactors' },
      income: { type: 'number', minimum: 0 },
      educationLevel: { type: 'string' },
      employmentStatus: { type: 'string' },
    },
    required: ['sectionId', 'income', 'educationLevel', 'employmentStatus'],
    additionalProperties: false,
  },
  section5: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'generalHealthStatus' },
      healthStatus: { type: 'string' },
      chronicConditions: { type: 'array', items: { type: 'string' } },
      recentHospitalization: { type: 'boolean' },
    },
    required: ['sectionId', 'healthStatus', 'chronicConditions', 'recentHospitalization'],
    additionalProperties: false,
  },
  section6: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'universalSelfCare' },
      selfCareHabits: { type: 'string' },
      sleepQuality: { type: 'string' },
    },
    required: ['sectionId', 'selfCareHabits', 'sleepQuality'],
    additionalProperties: false,
  },
  section7: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'cardiovascularSystem' },
      heartCondition: { type: 'string' },
      bloodPressure: { type: 'number', minimum: 0 },
    },
    required: ['sectionId', 'heartCondition', 'bloodPressure'],
    additionalProperties: false,
  },
  section8: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'nutrition' },
      dailyFruitVegetableIntake: { type: 'number', minimum: 0 },
      waterIntake: { type: 'string' },
    },
    required: ['sectionId', 'dailyFruitVegetableIntake', 'waterIntake'],
    additionalProperties: false,
  },
  section9: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'lifestyle' },
      activityLevel: { type: 'string' },
      restQuality: { type: 'string' },
    },
    required: ['sectionId', 'activityLevel', 'restQuality'],
    additionalProperties: false,
  },
  section10: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'auditoryVisualSystem' },
      hearingCondition: { type: 'string' },
      visionCondition: { type: 'string' },
    },
    required: ['sectionId', 'hearingCondition', 'visionCondition'],
    additionalProperties: false,
  },
  section11: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'lifeThreateningRiskPrevention' },
      smokingStatus: { type: 'string' },
      alcoholConsumption: { type: 'string' },
    },
    required: ['sectionId', 'smokingStatus', 'alcoholConsumption'],
    additionalProperties: false,
  },
  section12: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'environmentalFactors' },
      workEnvironmentQuality: { type: 'string' },
      noiseLevel: { type: 'string' },
    },
    required: ['sectionId', 'workEnvironmentQuality', 'noiseLevel'],
    additionalProperties: false,
  },
  section13: {
    type: 'object',
    properties: {
      sectionId: { type: 'string', const: 'promotionOfHumanFunctioning' },
      mentalHealth: { type: 'string' },
      socialInteractionLevel: { type: 'string' },
    },
    required: ['sectionId', 'mentalHealth', 'socialInteractionLevel'],
    additionalProperties: false,
  },
}


module.exports = { EXPECTED_INPUT_SCHEMA }