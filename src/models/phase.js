import mongoose,{Schema} from "mongoose";
import { Project } from "./project.js";

const phaseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    monitor: { type: String, required: true },
    ProjectId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    status: { type: String, enum: ['not started', 'in progress', 'completed'], default: 'not started' },
    completionDate: { type: Date },
    isOnTime: { type: Boolean, default: true },
    deadline: { type: Date }, 
    timeDifference: { type: String },
  },{timestamps:true});
  
  export const Phase = mongoose.model('Phase', phaseSchema);