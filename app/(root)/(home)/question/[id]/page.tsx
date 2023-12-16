import { getQuestionById } from "@/lib/actions/question.action";
import React from "react";

const QuestionDetailPage = async ({ params }: { params: { id: string } }) => {
  const { question } = await getQuestionById({ questionId: params.id });
  const {
    title,
    content,
    tags,
    views,
    upwotes,
    downwotes,
    author,
    answers,
    createdAt,
  } = question;

  return <div>{title}</div>;
};

export default QuestionDetailPage;
