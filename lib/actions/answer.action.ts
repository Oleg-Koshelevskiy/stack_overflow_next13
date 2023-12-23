"use server";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import Answer from "@/database/answer.model";
import { CreateAnswerParams } from "./shared.types";
import Question from "@/database/question.model";

export async function createAnswer(params: CreateAnswerParams) {
  // eslint-disable-next-line no-empty
  try {
    connectToDatabase();
    const { content, author, question, path } = params;
    const newAnswer = new Answer({ content, author, question });

    // Add the answer to the question answers array
    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });

    // TODO: Add interaction
    revalidatePath(path);
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    throw error;
  }
}
