

import React from 'react'
import { useState } from 'react';
import './quizstyle.css'


const QuizComp = () => {
    var Questionbank = [
        {
          Question: "IIITA was established in which year?",
          Answers: [
              { Answer: "1999", isCorrect: true },
              { Answer: "2000", isCorrect: false },
              { Answer: "2001", isCorrect: false },
              { Answer: "2002", isCorrect: false }
            ],
        },
        {
            Question: "what is the full form of GDSC",
            Answers: [
                { Answer: "Google developer student club", isCorrect: true },
                { Answer: "Google doodle student club", isCorrect: false },
                { Answer: "Game developer student club", isCorrect: false },
                { Answer: "Google developer state club", isCorrect: false }
            ]
        }, {
            Question:" which is the professional platform for networking?" ,
            Answers: [
                { Answer: "linkedin", isCorrect: true },
                { Answer: "tiktok", isCorrect: false },
                { Answer: "whatsapp", isCorrect: false },
                { Answer: "telegram", isCorrect: false }
            ]
        },
        {
            Question: "which  engineering branch is available in IIITA",
            Answers: [
                
                { Answer: "IT", isCorrect: false },
                { Answer: "ITBI", isCorrect: false },
                { Answer: "ECE", isCorrect: false },
                { Answer: "all Of the above", isCorrect: true }
            ]
        },
        {
            Question: "In which college you are studying right now?",
            Answers: [
                { Answer: "IIT K", isCorrect: false },
                { Answer: "NIT A", isCorrect: false },
                { Answer: "IIITA", isCorrect: true },
                { Answer: "IIT BHU", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default QuizComp;