import mongoose, { Document, Schema } from 'mongoose';

export interface ILead extends Document {
  name: string;
  companyName?: string;
  email: string;
  phone?: string;
  serviceOfInterest: string;
  message: string;
}

const leadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true },
    companyName: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    serviceOfInterest: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Lead = mongoose.model<ILead>('Lead', leadSchema);
