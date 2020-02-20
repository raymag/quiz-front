import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';

export default function Home(){
    const [questions, setQuestions] = useState([]);
    const [questionInView, setQuestionInView] = useState({});

    function getQuestion(){
        let randomIndex = Math.floor(Math.random()*questions.length);
        setQuestionInView(questions[randomIndex]);
    }

    async function loadQuestions(){
        const response = await api.get('/questions');
        setQuestions(response.data);
    }
    useEffect(()=>{
        loadQuestions();
    }, []);
    return (
        <>
        <h1>Quizz App</h1>
        <section id="game">
            <div id="info">
                <h2>{questionInView.description}</h2>
                <ul id="question-alternatives">
                    {
                        questionInView.alternatives ? 
                        questionInView.alternatives.map((alternative, index) => (
                            <li key={index}>
                                {
                                    alternative.isCorrect ? 
                                    <button className="correct">{alternative.text}</button>:
                                    <button>{alternative.text}</button>

                                }
                                </li>
                        )) : ''
                    }
                </ul>
            </div>
            <button id="get" onClick={getQuestion}>Get Question</button>
        </section>
        </>
    )
}