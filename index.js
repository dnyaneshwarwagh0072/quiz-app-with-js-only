document.addEventListener("DOMContentLoaded", function () {
    let quizData = {
        sections: [

            {
                sectionTitle: "General Knowledge",
                questions: [
                    {
                        questionType: "mcq",
                        question: "What is the capital of Australia?",
                        options: [
                            "Sydney",
                            "Melbourne",
                            "Canberra",
                            "Perth"
                        ],
                        answer: "Canberra"
                    },
                    {
                        questionType: "mcq",
                        question: "Who is known as the 'Father of Computers'?",
                        options: [
                            "Charles Babbage",
                            "Alan Turing",
                            "Tim Berners-Lee",
                            "Bill Gates"
                        ],
                        answer: "Charles Babbage"
                    },
                    {
                        questionType: "mcq",
                        question: "Which planet is known as the 'Red Planet'?",
                        options: [
                            "Venus",
                            "Mars",
                            "Jupiter",
                            "Saturn"
                        ],
                        answer: "Mars"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the chemical symbol for sodium?",
                        options: [
                            "Na",
                            "So",
                            "Sn",
                            "Nb"
                        ],
                        answer: "Na"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the largest mammal in the world?",
                        options: [
                            "Elephant",
                            "Blue Whale",
                            "Giraffe",
                            "Hippopotamus"
                        ],
                        answer: "Blue Whale"
                    },
                    {
                        questionType: "mcq",
                        question: "Which country is known as the 'Land of the Rising Sun'?",
                        options: [
                            "Japan",
                            "China",
                            "South Korea",
                            "India"
                        ],
                        answer: "Japan"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the chemical symbol for gold?",
                        options: [
                            "Au",
                            "Ag",
                            "Fe",
                            "Cu"
                        ],
                        answer: "Au"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the tallest mammal in the world?",
                        options: [
                            "Giraffe",
                            "Elephant",
                            "Horse",
                            "Lion"
                        ],
                        answer: "Giraffe"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the largest continent by land area?",
                        options: [
                            "Asia",
                            "Africa",
                            "North America",
                            "Europe"
                        ],
                        answer: "Asia"
                    },
                    {
                        questionType: "mcq",
                        question: "Who wrote the play 'Romeo and Juliet'?",
                        options: [
                            "William Shakespeare",
                            "Jane Austen",
                            "Emily Bronte",
                            "Charles Dickens"
                        ],
                        answer: "William Shakespeare"
                    }
                ]
            },
            {
                sectionTitle: "Science",
                questions: [
                    {
                        questionType: "mcq",
                        question: "What is the chemical symbol for water?",
                        options: [
                            "H2O",
                            "CO2",
                            "O2",
                            "NaCl"
                        ],
                        answer: "H2O"
                    },
                    {
                        questionType: "mcq",
                        question: "Which gas is most abundant in Earth's atmosphere?",
                        options: [
                            "Nitrogen",
                            "Oxygen",
                            "Carbon Dioxide",
                            "Argon"
                        ],
                        answer: "Nitrogen"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the atomic number of carbon?",
                        options: [
                            "5",
                            "6",
                            "7",
                            "8"
                        ],
                        answer: "6"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the unit of electric current?",
                        options: [
                            "Volt",
                            "Watt",
                            "Ampere",
                            "Ohm"
                        ],
                        answer: "Ampere"
                    },
                    {
                        questionType: "mcq",
                        question: "Which planet is known as the 'Morning Star'?",
                        options: [
                            "Venus",
                            "Mars",
                            "Jupiter",
                            "Saturn"
                        ],
                        answer: "Venus"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the smallest bone in the human body?",
                        options: [
                            "Femur",
                            "Tibia",
                            "Stapes",
                            "Radius"
                        ],
                        answer: "Stapes"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the process by which plants make their food?",
                        options: [
                            "Photosynthesis",
                            "Respiration",
                            "Transpiration",
                            "Pollination"
                        ],
                        answer: "Photosynthesis"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the study of earthquakes called?",
                        options: [
                            "Meteorology",
                            "Seismology",
                            "Volcanology",
                            "Geology"
                        ],
                        answer: "Seismology"
                    },
                    {
                        questionType: "mcq",
                        question: "Which element has the highest melting point?",
                        options: [
                            "Gold",
                            "Iron",
                            "Platinum",
                            "Tungsten"
                        ],
                        answer: "Tungsten"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the process by which water vapor turns into liquid water?",
                        options: [
                            "Evaporation",
                            "Condensation",
                            "Sublimation",
                            "Freezing"
                        ],
                        answer: "Condensation"
                    }
                ]
            },
            {
                sectionTitle: "Mathematics",
                questions: [
                    {
                        questionType: "number",
                        question: "What is the value of 2 + 2 * 2?",
                        options: [
                            "4",
                            "6",
                            "8",
                            "10"
                        ],
                        answer: "6"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the square root of 64?",
                        options: [
                            "4",
                            "6",
                            "8",
                            "10"
                        ],
                        answer: "8"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the value of π (pi) rounded to two decimal places?",
                        options: [
                            "3.12",
                            "3.14",
                            "3.16",
                            "3.18"
                        ],
                        answer: "3.14"
                    },
                    {
                        questionType: "number",
                        question: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
                        options: [
                            "10",
                            "12",
                            "14",
                            "16"
                        ],
                        answer: "10"
                    },
                    {
                        questionType: "number",
                        question: "What is the product of 7 multiplied by 9?",
                        options: [
                            "54",
                            "63",
                            "72",
                            "81"
                        ],
                        answer: "63"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the sum of angles in a triangle?",
                        options: [
                            "90 degrees",
                            "120 degrees",
                            "180 degrees",
                            "360 degrees"
                        ],
                        answer: "180 degrees"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the area of a square with side length 5 units?",
                        options: [
                            "20 square units",
                            "25 square units",
                            "30 square units",
                            "35 square units"
                        ],
                        answer: "25 square units"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the value of 3 to the power of 4?",
                        options: [
                            "9",
                            "12",
                            "27",
                            "81"
                        ],
                        answer: "81"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the sum of the first 10 positive integers?",
                        options: [
                            "45",
                            "50",
                            "55",
                            "60"
                        ],
                        answer: "55"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the circumference of a circle with radius 5 units?",
                        options: [
                            "10π",
                            "15π",
                            "20π",
                            "25π"
                        ],
                        answer: "10π"
                    }
                ]
            },
            {
                sectionTitle: "Indian History",
                questions: [
                    {
                        questionType: "mcq",
                        question: "Who was the first President of India?",
                        options: [
                            "Dr. Rajendra Prasad",
                            "Jawaharlal Nehru",
                            "Sardar Vallabhbhai Patel",
                            "Indira Gandhi"
                        ],
                        answer: "Dr. Rajendra Prasad"
                    },
                    {
                        questionType: "mcq",
                        question: "When did India gain independence from British rule?",
                        options: [
                            "1945",
                            "1947",
                            "1950",
                            "1962"
                        ],
                        answer: "1947"
                    },
                    {
                        questionType: "mcq",
                        question: "Who built the Red Fort in Delhi?",
                        options: [
                            "Shah Jahan",
                            "Akbar",
                            "Aurangzeb",
                            "Bahadur Shah II"
                        ],
                        answer: "Shah Jahan"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the last ruler of the Maurya dynasty?",
                        options: [
                            "Chandragupta Maurya",
                            "Bindusara",
                            "Ashoka",
                            "Brihadratha"
                        ],
                        answer: "Brihadratha"
                    },
                    {
                        questionType: "mcq",
                        question: "Who founded the city of Kolkata (Calcutta)?",
                        options: [
                            "Robert Clive",
                            "Job Charnock",
                            "Warren Hastings",
                            "Lord Dalhousie"
                        ],
                        answer: "Job Charnock"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Mughal emperor was known as 'Jahangir'?",
                        options: [
                            "Akbar",
                            "Shah Jahan",
                            "Aurangzeb",
                            "Muhammad bin Tughluq"
                        ],
                        answer: "Akbar"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the first Indian woman to become the President of the Indian National Congress?",
                        options: [
                            "Sarojini Naidu",
                            "Indira Gandhi",
                            "Vijaya Lakshmi Pandit",
                            "Annie Besant"
                        ],
                        answer: "Annie Besant"
                    },
                    {
                        questionType: "mcq",
                        question: "Which battle is considered as the turning point of the Indian Rebellion of 1857?",
                        options: [
                            "Battle of Plassey",
                            "Battle of Buxar",
                            "Battle of Jhansi",
                            "Battle of Delhi"
                        ],
                        answer: "Battle of Delhi"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the first Sultan of Delhi?",
                        options: [
                            "Qutb-ud-din Aibak",
                            "Iltutmish",
                            "Razia Sultan",
                            "Balban"
                        ],
                        answer: "Qutb-ud-din Aibak"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was known as the 'Iron Man of India'?",
                        options: [
                            "Jawaharlal Nehru",
                            "Sardar Vallabhbhai Patel",
                            "Subhas Chandra Bose",
                            "B.R. Ambedkar"
                        ],
                        answer: "Sardar Vallabhbhai Patel"
                    }
                ]
            },
        ]
    };
    // console.log(quizData);
    initSection();

    function initSection() {
        let sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
            section.addEventListener("click", () => {
                let sectionNumber = parseInt(section.getAttribute("data-section"));
                // console.log(sectionNumber);
                startQuiz(sectionNumber);
            })
        })
    }

    function startQuiz(sectionNumber) {
        let currentQuestion = quizData.sections[sectionNumber].questions;
        // console.log(currentQuestion);

        let currentQuestionIndex = 0;
        let score = 0;
        let answerSelected = false;

        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("question-container").style.display = "block";
        document.getElementById("question-container").innerHTML =
            `<p id="score">Score:0</p>
         <div id="question"></div>
         <div id="options"></div>
         <button id="next-button">Next</button>
        `;
        showQuestions();

        function showQuestions() {
            let question = currentQuestion[currentQuestionIndex];
            // console.log(question);

            let questionElement = document.getElementById("question");
            let optionsElement = document.getElementById("options");

            questionElement.textContent = question.question;
            optionsElement.innerHTML = "";

            if (question.questionType === "mcq") {
                question.options.forEach((option, index) => {
                    const optionElement = document.createElement('div');
                    optionElement.textContent = option;
                    optionElement.addEventListener('click', function () {
                        if (!answerSelected) {
                            answerSelected = true;
                            optionElement.classList.add("selected-option");
                            checkAnswer(option, question.answer);
                        }
                    });
                    optionsElement.appendChild(optionElement);
                })
            } else {
                const inputElement = document.createElement("input");
                inputElement.type = question.questionType === 'number' ? 'number' : 'text';
                const submitButton = document.createElement("button");
                submitButton.textContent = 'Submit Answer';
                submitButton.className = "submit-answer";

                submitButton.onclick = () => {
                    if (!answerSelected) {
                        answerSelected = true;
                        checkAnswer(inputElement.value.toString(), question.answer.toString());
                    }
                };
                optionsElement.appendChild(inputElement);
                optionsElement.appendChild(submitButton);
            }
        }

        function checkAnswer(givenAnswer, correctAnswer) {
            const feedbackElement = document.createElement("div");
            feedbackElement.id = "feedback";
            if (givenAnswer === correctAnswer) {
                score++;
                feedbackElement.textContent = "Correct answer";
                feedbackElement.style.color = "green";
            } else {
                feedbackElement.textContent = `Wrong!....correct answer is = ${correctAnswer}`;
                feedbackElement.style.color = "red";
            }
            const optionElement = document.getElementById("options");
            optionElement.appendChild(feedbackElement);
            updateScore();
        }

        function updateScore() {
            document.getElementById("score").textContent = "Score : " + score;
        }

        function quizOver() {
            const questionContainer = document.getElementById("question-container");
            const quizContainer = document.getElementById("quiz-container");

            questionContainer.innerHTML =
                `<h1>QUIZ COMPLETE!</h1>
                 <p>Your finale score is : ${score}/${currentQuestion.length}</p>
                 <button id="home-button">Go To Home</button>
            `;
            document.getElementById("home-button").addEventListener('click', function () {
                quizContainer.style.display = "grid";
                questionContainer.style.display = "none";
            })
        }

        document.getElementById("next-button").addEventListener("click", () => {
            if (currentQuestionIndex >= currentQuestion.length - 1) {
                quizOver();
            } else {
                answerSelected = false;
                currentQuestionIndex++;
                showQuestions();
            }
        });
    }
});

