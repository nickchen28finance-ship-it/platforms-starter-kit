export interface Lesson {
  id: string;
  title: string;
  content: string;
  quiz?: {
    questions: {
      question: string;
      choices: string[];
      answer: number;
    }[];
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}