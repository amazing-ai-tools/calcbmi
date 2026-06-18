export type BmiCategory = {
  label: 'Underweight' | 'Healthy range' | 'Overweight' | 'Obesity range';
  description: string;
};

type BmiInput = {
  heightCm: number;
  weightKg: number;
};

export function calculateBmi({ heightCm, weightKg }: BmiInput): number {
  if (!Number.isFinite(heightCm) || heightCm <= 0) {
    throw new Error('height must be greater than zero');
  }

  if (!Number.isFinite(weightKg) || weightKg <= 0) {
    throw new Error('weight must be greater than zero');
  }

  const heightMeters = heightCm / 100;
  return Math.round((weightKg / heightMeters ** 2) * 10) / 10;
}

export function getBmiCategory(bmi: number): BmiCategory {
  if (bmi < 18.5) {
    return {
      label: 'Underweight',
      description: 'Below the standard adult BMI reference range.',
    };
  }

  if (bmi < 25) {
    return {
      label: 'Healthy range',
      description: 'Within the standard adult BMI reference range.',
    };
  }

  if (bmi < 30) {
    return {
      label: 'Overweight',
      description: 'Above the standard adult BMI reference range.',
    };
  }

  return {
    label: 'Obesity range',
    description: 'Well above the standard adult BMI reference range.',
  };
}
