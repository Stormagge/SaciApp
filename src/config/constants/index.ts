export const APP_NAME = 'SaciApp';

export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

export const STORAGE_KEYS = {
  AUTH_TOKEN: '@SaciApp:token',
  USER_DATA: '@SaciApp:user',
  FOOD_PREFERENCES: '@SaciApp:foodPreferences',
};

export const NUTRITION_UNITS = {
  CALORIES: 'kcal',
  WEIGHT: 'g',
  VOLUME: 'ml',
};

export const SATISFACTION_LEVELS = {
  VERY_SATISFIED: 5,
  SATISFIED: 4,
  NEUTRAL: 3,
  UNSATISFIED: 2,
  VERY_UNSATISFIED: 1,
};
