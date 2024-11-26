const section1 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'identification' },
    employeeId: { type: 'string' },
    name: { type: 'string' },
    age: { type: 'number', minimum: 18 },
  },
  required: ['sectionId', 'employeeId', 'name', 'age'],
  additionalProperties: false,
}
const section2 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'workCharacteristics' },
    jobSatisfaction: { type: 'number', minimum: 0, maximum: 10 },
    workEnvironment: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'jobSatisfaction', 'workEnvironment'],
  additionalProperties: false,
}
const section3 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'familySystemFactors' },
    familySupport: { type: 'number', minimum: 0 },
    numberOfDependents: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'familySupport', 'numberOfDependents'],
  additionalProperties: false,
}
const section4 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'socioCulturalEconomicFactors' },
    income: { type: 'number', minimum: 0 },
    educationLevel: { type: 'number', minimum: 0 },
    employmentStatus: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'income', 'educationLevel', 'employmentStatus'],
  additionalProperties: false,
}
const section5 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'generalHealthStatus' },
    healthStatus: { type: 'number', minimum: 0 },
    chronicConditions: { type: 'array', items: { type: 'number' } },
    recentHospitalization: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'healthStatus', 'chronicConditions', 'recentHospitalization'],
  additionalProperties: false,
}
const section6 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'universalSelfCare' },
    selfCareHabits: { type: 'number', minimum: 0 },
    sleepQuality: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'selfCareHabits', 'sleepQuality'],
  additionalProperties: false,
}
const section7 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'cardiovascularSystem' },
    heartCondition: { type: 'number', minimum: 0 },
    bloodPressure: { type: 'number', minimum: 0, minimum: 0 },
  },
  required: ['sectionId', 'heartCondition', 'bloodPressure'],
  additionalProperties: false,
}
const section8 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'nutrition' },
    dailyFruitVegetableIntake: { type: 'number', minimum: 0, minimum: 0 },
    waterIntake: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'dailyFruitVegetableIntake', 'waterIntake'],
  additionalProperties: false,
}
const section9 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'lifestyle' },
    activityLevel: { type: 'number', minimum: 0 },
    restQuality: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'activityLevel', 'restQuality'],
  additionalProperties: false,
}
const section10 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'auditoryVisualSystem' },
    hearingCondition: { type: 'number', minimum: 0 },
    visionCondition: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'hearingCondition', 'visionCondition'],
  additionalProperties: false,
}
const section11 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'lifeThreateningRiskPrevention' },
    smokingStatus: { type: 'number', minimum: 0 },
    alcoholConsumption: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'smokingStatus', 'alcoholConsumption'],
  additionalProperties: false,
}
const section12 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'environmentalFactors' },
    workEnvironmentQuality: { type: 'number', minimum: 0 },
    noiseLevel: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'workEnvironmentQuality', 'noiseLevel'],
  additionalProperties: false,
}
const section13 = {
  type: 'object',
  properties: {
    sectionId: { type: 'string', const: 'promotionOfHumanFunctioning' },
    mentalHealth: { type: 'number', minimum: 0 },
    socialInteractionLevel: { type: 'number', minimum: 0 },
  },
  required: ['sectionId', 'mentalHealth', 'socialInteractionLevel'],
  additionalProperties: false,
}

const EXPECTED_INPUT_SCHEMA = {
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
  section11,
  section12,
  section13
}


module.exports = { EXPECTED_INPUT_SCHEMA }