//Variables for scores 
let currentQuestionIndex = 0;
let sangScore = 0;
let cholScore = 0;
let phlegmScore = 0;
let melScore = 0;
let tempImageUrls;

let scores = [sangScore, cholScore, phlegmScore, melScore]
let scoreNames = ["sanguine", "choleric", "phlegmatic", "melancholic"]

function displayQuiz() {
    const questions = [
        {
            question: "As you open your eyes, you realize that it's already 7:20! You're going to be late to class! What do you do?",
            choices: ["Just a few more minutes...anything for my sleep...", "HUH??!?!?! OH NONONOOOOO!!! At least I prepared last night but still..."],
            weights: [
                {sangScore: +1, phlegmScore: +1}, // Weight for first choice
                {cholScore: +1, melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Time for some breakfast! What are you having?",
            choices: ["Something sweet to boost my mood~~", "Definitely a healthier option."],
            weights: [
                {sangScore: +1, phlegmScore: +1}, // Weight for first choice
                {cholScore: +1, melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "As you rush out of the door, what's going through your head?",
            choices: ["How could I oversleep? I even slept really early last night to avoid this.", "I guess I'm going to be late. I wonder what the teacher's going to say today."],
            weights: [
                {melScore: +1}, // Weight for first choice
                {phlegmScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "What's that? Was that a small unicorn?",
            choices: ["Huh? It must be the oversleeping I did...", "Hey where'd it go? I want to bring it with me!"],
            weights: [
                {phlegmScore: +1}, // Weight for first choice
                {sangScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Ignoring that, now your teacher's yelling at you! I mean, how could you be 40 minutes late?",
            choices: ["Can she hurry up? I have better things to do than listen to insignificant lectures.", "Wait, am I going to be punished for this? Oh no, what am I going to do?"],
            weights: [
                {cholScore: +1}, // Weight for first choice
                {melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "You take a seat, what does your desk setup look like?",
            choices: ["The same as it always does, it's nice to be consistent ", "Who cares? Isn't it better if it's different everyday anyways?"],
            weights: [
                {phlegmScore: +1}, // Weight for first choice
                {sangScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Your teacher is asking everyone to pay attention, but you're more focused on the unicorn...",
            choices: ["Am I going insane? I should probably get this checked with a professional...", "I'll deal with this later, I need to focus on something else."],
            weights: [
                {melScore: +1}, // Weight for first choice
                {cholScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "All of a sudden, you see yourself in a large green forest. The same unicorn can be seen from a distance.",
            choices: ["Ok wow. This is obviously a dream. I'll go towards it anyways...", "Woah, that unicorn looks so interesting. I wanna touch it!"],
            weights: [
                {cholScore: +1}, // Weight for first choice
                {sangScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "You walk towards the mystical animal, and it begins talking to you. 'Why must you forget yourself?'",
            choices: ["I'm sorry, I don't really remember what you're talking about", "Excuse me?! I know who I am, and you're not even real! "],
            weights: [
                {phlegmScore: +1}, // Weight for first choice
                {cholScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "'You're not who you think you are...so forgetful...' the unicorn says as it disappears.",
            choices: ["Where are you going? Please don't leave, you're the love of my life!!", "Why'd it disappear? I wonder what this could mean about me..."],
            weights: [
                {sangScore: +1}, // Weight for first choice
                {melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "As you open your eyes, you see your entire class looking at you, and your teacher is standing right next to your desk.",
            choices: ["Did she already finish class? Finally...", "Do they need something from me? I wonder what it is."],
            weights: [
                {cholScore: +1}, // Weight for first choice
                {phlegmScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "You realized you fell asleep, and you think...",
            choices: ["That was so embarrassing...I just wanna hide after that...", "Oh well! It was a nice dream anyways."],
            weights: [
                {melScore: +1}, // Weight for first choice
                {sangScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Finally class is over! What are you doing?",
            choices: ["Staying after school to hang out with my friends", "Going home right away, I need alone time!"],
            weights: [
                {sangScore: +1, cholScore: +1}, // Weight for first choice
                {phlegmScore: +1, melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Now it's time to leave, but as you walk home, you see the unicorn again!",
            choices: ["I need to see if this is real or not.", "I'll follow you...please don't report me!"],
            weights: [
                {cholScore: +1, phlegmScore: +1}, // Weight for first choice
                {sangScore: +1, melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "This time you're not losing it, you chase it until you reach a suspicious alleyway.",
            choices: ["That's a bit concerning...I'm definitely not going in there.", "Who cares? Let's just go!!!"],
            weights: [
                {phlegmScore: +1, melScore: +1}, // Weight for first choice
                {sangScore: +1, cholScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Is that...a monster? And it's attacking someone?!",
            choices: ["Ehhh...I didn't see anything, right?", "What's going on?! Are they alright???"],
            weights: [
                {cholScore: +1, phlegmScore: +1}, // Weight for first choice
                {sangScore: +1, melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "'That doesn't matter! All of this is totally real!!!' says the unicorn.",
            choices: ["You're right! I can't back down now!!", "I can see that, but I guess I'll play along with you anyways.", "Yes! That's why I'm going to stay here safely! ", "Ugh...I wish it wasn't."],
            weights: [
                {sangScore: +1}, // Weight for first choice
                {cholScore: +1}, // Weight for second choice
                {phlegmScore: +1}, // Weight for third choice
                {melScore: +1}, // Weight for fourth choice
            ]
        },
        {
            question: "The unicorn tells you to look into your heart and remember who you are. You finally remember! You're...",
            choices: ["a fun-loving yet impulsive hero", "an ambitious yet uptight hero", "a peaceful yet lazy hero", "a detail-oriented yet pessimistic hero"],
            weights: [
                {sangScore: +1}, // Weight for first choice
                {cholScore: +1}, // Weight for second choice
                {phlegmScore: +1}, // Weight for third choice
                {melScore: +1}, // Weight for fourth choice
            ]
        },
        {
            question: "To get rid of the monster you pull out your signature weapon...",
            choices: ["a magical staff, doesn't it make me look cool?", "a gun, it finishes the job quickly", "a sledgehammer...it's easy for me", "a sword for a clean ending"],
            weights: [
                {sangScore: +1}, // Weight for first choice
                {cholScore: +1}, // Weight for second choice
                {phlegmScore: +1}, // Weight for third choice
                {melScore: +1}, // Weight for fourth choice
            ]
        },
        {
            question: "'You did it, you saved the day! Hey, you should choose a hero name!' the unicorn whispers to you.",
            choices: ["No way am I doing that! I need to see if this person's okay, I should talk to them..", "Hell no, I'm going home."],
            weights: [
                {sangScore: +1, cholScore: +1}, // Weight for first choice
                {phlegmScore: +1, melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Why would you interact with a group?",
            choices: ["So people can like and accept me", "To achieve my personal goals"],
            weights: [
                {sangScore: +1}, // Weight for first choice
                {cholScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Why do you feel as if you lack ambition?",
            choices: ["Because I prefer to search for pleasure and new possibilities", "Because I feel like I'll be unsafe by going into the unknown"],
            weights: [
                {sangScore: +1}, // Weight for first choice
                {phlegmScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "How does your sensitivity manifest in stressful situations?",
            choices: ["I become impulsive and shameless", "I become depressed and pessimistic"],
            weights: [
                {sangScore: +1}, // Weight for first choice
                {melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Which is closer to your interactions with others?",
            choices: ["I try to influence others with my own choices", "I try to get influenced by others with their choices"],
            weights: [
                {cholScore: +1}, // Weight for first choice
                {phlegmScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Which are you more prone to?",
            choices: ["Anger", "Depression"],
            weights: [
                {cholScore: +1}, // Weight for first choice
                {melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Why would you prefer smaller social circles?",
            choices: ["Because it gives me a sense of familiarity", "Because others can understand me easier"],
            weights: [
                {phlegmScore: +1}, // Weight for first choice
                {melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "Which of these brings you more energy?",
            choices: ["Being around others", "Being by myself"],
            weights: [
                {sangScore: +1, cholScore: +1}, // Weight for first choice
                {phlegmScore: +1, melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "How would you describe yourself when making a decision?",
            choices: ["I stick to a choice once I've made it", "I'm more indecisive and tend to change my mind"],
            weights: [
                {cholScore: +1, phlegmScore: +1}, // Weight for first choice
                {sangScore: +1, melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "How would you describe yourself in terms of productivity?",
            choices: ["I'm not very organized and usually procrastinate", "I complete what I need to ASAP, I value my organizational skills"],
            weights: [
                {sangScore: +1, phlegmScore: +1}, // Weight for first choice
                {cholScore: +1, melScore: +1}, // Weight for second choice
            ]
        },
        {
            question: "What's your biggest flaw?",
            choices: ["I only want to do things that interest me, which sometimes leads to poor decision making on my end", "I force others to align to my standards, which leads to not understanding those around me", "I avoid change, which leads to me remaining stagnant and not experiencing new things", "I have obsessive and perfectionistic tendencies, which leads to me feeling extremely dejected"],
            weights: [
                {sangScore: +1}, // Weight for first choice
                {cholScore: +1}, // Weight for second choice
                {phlegmScore: +1}, // Weight for third choice
                {melScore: +1}, // Weight for fourth choice
            ]
        },
        

        
    ]










document.getElementById('tempstart').addEventListener('click', function() {
    document.getElementById('temphome').style.display = 'none';
    document.getElementById('tempquizpage').style.display = 'block';
});

    //Function to display the current question and choices
    function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('tempquestion');
        const choiceContainers = document.getElementById('tempchoices');
        
        choiceContainers.innerHTML = '';
        
        questionElement.textContent = currentQuestion.question;
        
      

        currentQuestion.choices.forEach((choice, index) => {
                //Buttons for choices
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('tempchoices');
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
                if (selectedChoiceWeight.hasOwnProperty('sangScore')) {
                    sangScore += selectedChoiceWeight.sangScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('cholScore')) {
                    cholScore += selectedChoiceWeight.cholScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('phlegmScore')) {
                    phlegmScore += selectedChoiceWeight.phlegmScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('melScore')) {
                    melScore += selectedChoiceWeight.melScore;
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
        scores[0] += sangScore;
        scores[1] += cholScore;
        scores[2] += phlegmScore;
        scores[3] += melScore;

        const highestScore = Math.max(...scores);
        let highestIndex = scores.indexOf(highestScore)
        let temperamentResult = scoreNames[highestIndex]
        console.log("Temperament:",temperamentResult);
    
        document.getElementById('tempresults').style.display = 'none';
        //Remove quiz-related elements from the DOM
        const questionElement = document.getElementById('tempquestion');
        const choiceContainers = document.getElementById('tempchoices');
        const quizContainer = document.getElementById('tempquiz');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();
       

        displayImage(temperamentResult);

        document.getElementById('tempresults').style.display = 'block'
        document.getElementById('tempquiz').style.display = 'none'
    }

    //Function to calculate MBTI type and return image URL 
  function getTempImageUrl(temperamentResult) {
    tempImageUrls = {
        "sanguine": "sanguine.png",
        "choleric": "choleric.png",
        "phlegmatic": "phlegmatic.png",
        "melancholic": "melancholic.png"
        
    
    };
    return tempImageUrls[temperamentResult] || ""
}

//Display image
function displayImage(temperamentResult) {
    const imageURL = getTempImageUrl(temperamentResult);
    const tempImageContainer = document.getElementById('temp-image');
    const imageElement = document.createElement('img');
    imageElement.src = imageURL;

    tempImageContainer.appendChild(imageElement);

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
