//Variables for scores 
let currentQuestionIndex = 0;
let EFScore = 0;
let ETScore = 0;
let ENScore = 0;
let ESScore = 0;
let IFScore = 0;
let ITScore = 0;
let INScore = 0;
let ISScore = 0;


let scores = [EFScore, ETScore, ENScore, ESScore, IFScore, ITScore, INScore, ISScore]
let scoreNames = ["EF", "ET", "EN", "ES", "IF", "IT", "IN", "IS"]





function displayQuiz() {
    const questions = [
        {
            question: "What information do you place more value on?",
            choices: ["Information from the outside world: other people, ideas, and sensations", "Information from my own thoughts, feelings, and sensations"],
            weights: [
                {EFScore: +1, ETScore: +1, ENScore: +1, ESScore: +1, IFScore: 0, ITScore: 0, INScore: 0, ISScore: 0  }, // Weight for first choice
                {IFScore: +1, ITScore: +1, INScore: +1, ISScore: +1, EFScore: 0, ETScore: 0, ENScore: 0, ESScore: 0}, // Weight for second choice
            ]
        },
        {
            question: "How do you make sense of what's 'unreasonable'?",
            choices: ["By using direct evidence & reasoning based on external standards", "By being harmonious with others since it aligns with the world's ideals"],
            weights: [
                {ETScore: +1, EFScore: 0 }, // Weight for first choice
                {EFScore: +1, ETScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "How do you focus on life and its outcomes?",
            choices: ["By being tuned into my environment", "By searching for advancements and discoveries in regarding its future"],
            weights: [
                {ESScore: +1, ENScore: 0 }, // Weight for first choice
                {ENScore: +1, ESScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "How do you base your reasoning on your own standards?",
            choices: ["By creating my own well thought out rules", "By aligning my actions with my ideal"],
            weights: [
                {ITScore: +1, IFScore: 0 }, // Weight for first choice
                {IFScore: +1, ITScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "How do you express yourself through your actions and life?",
            choices: ["By placing my focus on my internal physical senses", "By perceiving all events as part of an abstract pattern"],
            weights: [
                {ISScore: +1, INScore: 0 }, // Weight for first choice
                {INScore: +1, ISScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "What do you tend to place more value on?",
            choices: ["Comparisons and differences", "Perception and properties"],
            weights: [
                {ITScore: +1, ETScore: +1, ISScore: 0, ESScore: 0 }, // Weight for first choice
                {ISScore: +1, ESScore: +1, ITScore:0, ETScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "What do you tend to place more value on?",
            choices: ["Agreement and concordance", "Lack and possibilities"],
            weights: [
                {IFScore: +1, EFScore: +1, INScore: 0, ENScore: 0 }, // Weight for first choice
                {INScore: +1, ENScore: +1, IFScore: 0, EFScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Which do you have more skill in?",
            choices: ["Social topics (such as listening to others, understanding their views, and being able to communicate with a variety of individuals)", "Existential topics (such as questioning one's existence, thinking about thinking (metacognition), and finding meaning in the world)"],
            weights: [
                {EFScore: +1, INScore: 0 }, // Weight for first choice
                {INScore: +1, EFScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Which do you have more skill in?",
            choices: ["Practical topics (knowledge application, completing tasks, and taking action in the real world)", "Topics about my past self (your past interests, ideas, patterns, etc)"],
            weights: [
                {ETScore: +1, ISScore: 0 }, // Weight for first choice
                {ISScore: +1, ETScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Which do you have more skill in?",
            choices: ["Natural topics (the environment around you, the present, and realism)", "Critical thinking (deductive thinking, logical reasoning, and their own knowledge)"],
            weights: [
                {ESScore: +1, ITScore: 0 }, // Weight for first choice
                {ITScore: +1, ESScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Which do you have more skill in?",
            choices: ["Identifying patterns", "Intrapersonal areas (how you feel, think, your motivations/values)"],
            weights: [
                {ENScore: +1, IFScore: 0 }, // Weight for first choice
                {IFScore: +1, ENScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "When reasoning, what trap do you tend to fall into?",
            choices: ["I find myself trying to place defined expectations on my thinking in order to get results", "I find myself working towards impossible goals because I don't consider circumstances"],
            weights: [
                {ETScore: +1, ITScore: 0 }, // Weight for first choice
                {ITScore: +1, ETScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "What do you find yourself doing in terms of emotion?",
            choices: ["Maintaining the social mood because that's correct", "Sticking to my own ideals because that's what I feel"],
            weights: [
                {EFScore: +1, IFScore: +0 }, // Weight for first choice
                {IFScore: +1, EFScore: +0 }, // Weight for second choice
            ]
        },
        {
            question: "What do you find yourself doing in terms of sensation?",
            choices: ["Gotta go with my urges that stem from the world around me", "Maybe I should stick to what my mind and body are telling me to do"],
            weights: [
                {ESScore: +1, ISScore: 0 }, // Weight for first choice
                {ISScore: +1, ESScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "What do you find yourself doing when considering possibilities?",
            choices: ["I start by observing many different possibilities and situations outside of me", "I start by looking at one situation and considering its possibilities"],
            weights: [
                {ENScore: +1, INScore: 0 }, // Weight for first choice
                {INScore: +1, ENScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Why would you underestimate yourself?",
            choices: ["Because I can't see myself doing something new", "Because it seems unreasonable for me to succeed in something new"],
            weights: [
                {ESScore: +1, ETScore: 0 }, // Weight for first choice
                {ETScore: +1, ESScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "How would you describe your values and principles?",
            choices: ["I focus on my own preferences and how I feel", "I feel one way or the other, not allowing for neutrality"],
            weights: [
                {IFScore: +1, INScore: 0 }, // Weight for first choice
                {INScore: +1, IFScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "How do you organize your 'internal state'?",
            choices: ["By categorizing my past experiences (ex: painful, felt great, neutral, etc)", "By creating inner conditional statements for myself (ex: If speak out, then I will be ignored; if I eat oranges, I'll get good luck)"],
            weights: [
                {ISScore: +1, ITScore: 0 }, // Weight for first choice
                {ITScore: +1, ISScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Which type of 'relationships' give you more drive?",
            choices: ["Emotional relationships with other people (how close am I with my coworker?)", "Relationships between different aspects of the world (how are pie and rocket science related?)"],
            weights: [
                {EFScore: +1, ENScore: 0 }, // Weight for first choice
                {ENScore: +1, EFScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "When do you tend to be more critical?",
            choices: ["During stress", "Regularly"],
            weights: [
                {EFScore: +1, ITScore: 0 }, // Weight for first choice
                {ITScore: +1, EFScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "When do you tend to be more cautious?",
            choices: ["During stress", "Regularly"],
            weights: [
                {ENScore: +1, ISScore: 0 }, // Weight for first choice
                {ISScore: +1, ENScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "When do you tend to be impulsive?",
            choices: ["During stress", "Regularly"],
            weights: [
                {INScore: +1, ESScore: 0 }, // Weight for first choice
                {ESScore: +1, INScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "When do you tend to be competitive?",
            choices: ["During stress", "Regularly"],
            weights: [
                {IFScore: +1, ETScore: 0 }, // Weight for first choice
                {ETScore: +1, IFScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "How do you avoid external influence?",
            choices: ["By focusing on my own emotions and preferences", "By focusing on my own experiences and reactions"],
            weights: [
                {IFScore: +1, ISScore: 0 }, // Weight for first choice
                {ISScore: +1, IFScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "When making a decision, which do you tend to value more?",
            choices: ["Real deal > prospects", "Common consensus > individual thought"],
            weights: [
                {ESScore: +1, EFScore: 0 }, // Weight for first choice
                {EFScore: +1, ESScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "What trap do you tend to fall into?",
            choices: ["Creating ideas that are disconnected from reality", "Failing to realize the connection between my judgements and myself"],
            weights: [
                {ITScore: +1, INScore: 0 }, // Weight for first choice
                {INScore: +1, ITScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "When working on a task, which do you tend to place more value on?",
            choices: ["Starting and taking the initiative", "Completing and seeing it to the end"],
            weights: [
                {ENScore: +1, ETScore: 0 }, // Weight for first choice
                {ETScore: +1, ENScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "What trap do you tend to fall into?",
            choices: ["Putting on a facade until I feel comfortable with someone", "Giving into worldly temptations"],
            weights: [
                {IFScore: +1, ESScore: 0 }, // Weight for first choice
                {ESScore: +1, IFScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Which of these patterns do you find more in your daily life?",
            choices: ["Feeling a certain way about something/someone because it corresponds with the situation", "Having difficulty distinguishing reality from fantasy"],
            weights: [
                {EFScore: +1, ISScore: 0 }, // Weight for first choice
                {ISScore: +1, EFScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "How would you describe your thought process when making a decision?",
            choices: ["My thinking starts from me and ends with me, I don't like to be influenced in this aspect", "My thought process is very flexible, as I prefer this process to have many potentials"],
            weights: [
                {ITScore: +1, ENScore: 0 }, // Weight for first choice
                {ENScore: +1, ITScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Which do you prefer doing?",
            choices: ["Setting defined expectations for myself and the people around me", "Recognizing what's not actually present in the real world (ex: 'vibes')"],
            weights: [
                {ETScore: +1, INScore: 0 }, // Weight for first choice
                {INScore: +1, ETScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "How do you feel about structure in our world?",
            choices: ["I prefer to correct aspects of our world that make no sense", "I prefer to not focus on coordination and alignment to systems"],
            weights: [
                {EFScore: +1, ETScore: +1, ENScore: 0, ESScore:0 }, // Weight for first choice
                {ENScore: +1, ESScore: +1, EFScore:0, ETScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Which is closer to your method of reasoning?",
            choices: ["My reasoning is based on my own standards", "My reasoning doesn't center around myself, but the world around me"],
            weights: [
                {IFScore: +1, ITScore: +1, EFScore: 0, ETScore: 0 }, // Weight for first choice
                {EFScore: +1, ETScore: +1, IFScore: 0, ITScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "How do you 'live your life?",
            choices: ["In a way that expresses myself better than my words do", "By focusing on the external rather than my views"],
            weights: [
                {INScore: +1, ISScore: +1, ENScore: 0, ESScore: 0 }, // Weight for first choice
                {ENScore: +1, ESScore: +1, INScore: 0, ISScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Which is closer to your beliefs?",
            choices: ["I don't need to focus on making sense out of what goes around me, just enjoy life!", "My thought process is based on my principles and systems, which I place at a high value"],
            weights: [
                {ENScore: +1, ESScore: +1, IFScore: 0, ITScore: 0 }, // Weight for first choice
                {IFScore: +1, ITScore: +1, ENScore: 0, ESScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "How do you view 'reality'?",
            choices: ["As something that I should look into to create conclusions", "As something I have a hard time differentiating from the abstract"],
            weights: [
                {EFScore: +1, ETScore: +1, ISScore: 0, INScore: 0 }, // Weight for first choice
                {INScore: +1, ISScore: +1, EFScore: 0, ETScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "Which of these do you find harder to do?",
            choices: ["Expressing my desires and thoughts in a way that aligns with others", "Finding the value in the world around me"],
            weights: [
                {IFScore: +1, ITScore: +1, INScore: 0, ISScore: 0 }, // Weight for first choice
                {INScore: +1, ISScore: +1, IFScore: 0, ITScore:0 }, // Weight for second choice
            ]
        },
        
    ]










document.getElementById('jungstart').addEventListener('click', function() {
    document.getElementById('junghome').style.display = 'none';
    document.getElementById('jungquizpage').style.display = 'block';
});

    //Function to display the current question and choices
    function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('jungquestion');
        const choiceContainers = document.getElementById('jungchoices');
        
        choiceContainers.innerHTML = '';
        
        questionElement.textContent = currentQuestion.question;
        
      

        currentQuestion.choices.forEach((choice, index) => {
                //Buttons for choices
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('jungchoices');
            button.addEventListener('click', () => handleChoiceClick(index));
            choiceContainers.appendChild(button);
        });
        }


        //Function to handle choice click
    function handleChoiceClick(choiceIndex) {
        // Update scores based on user response
        const currentQuestion = questions[currentQuestionIndex];
        const selectedChoiceWeight = currentQuestion.weights[choiceIndex];
        console.log("Selected choice weight:", selectedChoiceWeight);

                //Update scores based on weight of selected choice
                if (selectedChoiceWeight.hasOwnProperty('EFScore')) {
                    EFScore += selectedChoiceWeight.EFScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('ETScore')) {
                    ETScore += selectedChoiceWeight.ETScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('ENScore')) {
                    ENScore += selectedChoiceWeight.ENScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('ESScore')) {
                    ESScore += selectedChoiceWeight.ESScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('IFScore')) {
                    IFScore += selectedChoiceWeight.IFScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('ITScore')) {
                    ITScore += selectedChoiceWeight.ITScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('INScore')) {
                    INScore += selectedChoiceWeight.INScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('ISScore')) {
                    ISScore += selectedChoiceWeight.ISScore;
                }

            //Move to the next question
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayCurrentQuestion();
            } else {
                calculateMBTITypeAndDisplayImage();
            }
        }

         //Function to calculate MBTI type based on scores and display image
        function calculateMBTITypeAndDisplayImage() {
        //Calculate result
        scores[0] += EFScore;
        scores[1] += ETScore;
        scores[2] += ENScore;
        scores[3] += ESScore;
        scores[4] += IFScore;
        scores[5] += ITScore;
        scores[6] += INScore;
        scores[7] += ISScore;
        
        const highestScore = Math.max(...scores);
        let highestIndex = scores.indexOf(highestScore)
        let jungianResult = scoreNames[highestIndex]

        console.log("Jungian Type:", jungianResult);

        document.getElementById('jungresults').style.display = 'none';
        document.getElementById('jungquizpage').style.display = 'none'
        
        //Remove quiz-related elements from the DOM
        const questionElement = document.getElementById('jungquestion');
        const choiceContainers = document.getElementById('jungchoices');
        const quizContainer = document.getElementById('jungquiz');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();
       

        displayImage(jungianResult);

        document.getElementById('jungresults').style.display = 'block'
    }

  //Function to calculate MBTI type and return image URL 
  function getJungImageUrl(jungianResult) {
    const jungImageUrls = {
        "EF": "EF.PNG",
        "ET": "ET.PNG",
        "ES": "ES.PNG",
        "EN": "EN.PNG",
        "IF": "IF.PNG",
        "IT": "IT.PNG",
        "IS": "IS.PNG",
        "IN": "IN.PNG"
        
    
    };
    return jungImageUrls[jungianResult] || ""
}

//Display image
function displayImage(jungianResult) {
    const imageURL = getJungImageUrl(jungianResult);
    const jungImageContainer = document.getElementById('jung-image');
    const imageElement = document.createElement('img');
    imageElement.src = imageURL;
    imageElement.id = 'jungimg';


    jungImageContainer.appendChild(imageElement);

}







    //Display the first question when the quiz starts
        displayCurrentQuestion();
        document.addEventListener('DOMContentLoaded', () => {
        const choiceContainers = document.querySelectorAll('.choice-container');
        choiceContainers.forEach((container) => {
            const choices = container.querySelectorAll('button');
            choices.forEach((choice, choiceIndex) => {
                choice.addEventListener('click', () => {
                    handleChoiceClick(choiceIndex);
                });
            });
        });
    });
}

//Call function to start the quiz
displayQuiz();
