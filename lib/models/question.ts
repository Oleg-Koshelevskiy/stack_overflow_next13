import mongoose, { Date } from 'mongoose';
const { Schema } = mongoose;

interface Question {
    title: string;
    details: string;
    tags: string[];
    creator: string;
    date: Date;
    upwotes: number;
    downwotes: number;
    viewers: string[];
}

const TagsSchema = new Schema({tag: String})
const ViewersSchema = new Schema({tag: String})

const QuestionSchema = new Schema<Question>({
    title: { type: String, required: true },
    details: { type: String, required: true },
    tags: { type: TagsSchema, required: true },
    creator: { type: String, required: true },
    date: { type: String, required: true },
    upwotes: Number,
    downwotes: Number,
    viewers: ViewersSchema
})