import { useState, useEffect } from "react";
import { useGet } from "./useApi";
import { database_query, database_store } from "../services/database";

export function useQuestion() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const _questions = useGet("/questions", [], {
    isPublic: true,
    autoFetch: false,
  });

  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = () => {
    database_query("random_question").then((random_question) => {
      if (random_question) {
        setQuestions(random_question);
        setLoading(false);
      } else
        _questions.fetch().then((res) => {
          setQuestions(res);
          database_store({ random_question: res });
          setLoading(false);
        });
    });
  };

  return {
    loading,
    questions,
  };
}
