import { NUTRITION_UNITS } from '../config/constants';

export interface NutritionCalculation {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export const calculateTDEE = (
  weight: number,
  height: number,
  age: number,
  activityLevel: number,
  gender: 'male' | 'female'
): number => {
  // Basic BMR calculation using Harris-Benedict equation
  let bmr;
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  // Activity factor multiplication
  return bmr * activityLevel;
};

export const calculateSatiationScore = (
  calories: number,
  fiber: number,
  volume: number
): number => {
  // Simple satiation score based on fiber content and volume relative to calories
  const fiberScore = (fiber / calories) * 1000;
  const volumeScore = (volume / calories) * 100;
  
  return (fiberScore + volumeScore) / 2;
};
