import { Schema, model, Document } from 'mongoose';

export interface IFood extends Document {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  servingSize: number;
  servingUnit: string;
  category: string;
  satiationScore: number;
}

const foodSchema = new Schema<IFood>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  fiber: {
    type: Number,
    required: true,
  },
  servingSize: {
    type: Number,
    required: true,
  },
  servingUnit: {
    type: String,
    required: true,
    enum: ['g', 'ml', 'unit'],
  },
  category: {
    type: String,
    required: true,
    enum: ['protein', 'carb', 'fat', 'vegetable', 'fruit', 'dairy', 'other'],
  },
  satiationScore: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

// Index for searching foods
foodSchema.index({ name: 'text' });

export default model<IFood>('Food', foodSchema);
