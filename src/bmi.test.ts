import { describe, expect, it } from 'vitest';
import { calculateBmi, getBmiCategory } from './bmi';

describe('calculateBmi', () => {
  it('calculates BMI from metric height and weight rounded to one decimal', () => {
    expect(calculateBmi({ heightCm: 175, weightKg: 72 })).toBe(23.5);
  });

  it('rejects impossible or missing measurements', () => {
    expect(() => calculateBmi({ heightCm: 0, weightKg: 72 })).toThrow('height');
    expect(() => calculateBmi({ heightCm: 175, weightKg: -4 })).toThrow('weight');
  });
});

describe('getBmiCategory', () => {
  it.each([
    [18.4, 'Underweight'],
    [18.5, 'Healthy range'],
    [24.9, 'Healthy range'],
    [25, 'Overweight'],
    [30, 'Obesity range'],
  ])('returns the expected category for BMI %s', (bmi, label) => {
    expect(getBmiCategory(bmi).label).toBe(label);
  });
});
