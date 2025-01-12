//Variables for scores 
let currentQuestionIndex = 0;
let soOneScore = 0;
let sxOneScore = 0;
let spOneScore = 0;
let soTwoScore = 0;
let sxTwoScore = 0;
let spTwoScore = 0;
let soThreeScore = 0;
let sxThreeScore = 0;
let spThreeScore = 0;
let soFourScore = 0;
let sxFourScore = 0;
let spFourScore = 0;
let soFiveScore = 0;
let sxFiveScore = 0;
let spFiveScore = 0;
let soSixScore = 0;
let sxSixScore = 0; 
let spSixScore = 0;
let soSevenScore = 0;
let sxSevenScore = 0;
let spSevenScore = 0;
let soEightScore = 0;
let sxEightScore = 0;
let spEightScore = 0;
let soNineScore = 0;
let sxNineScore = 0;
let spNineScore = 0;


let scores = [soOneScore, sxOneScore, spOneScore, soTwoScore, sxTwoScore, spTwoScore, soThreeScore, sxThreeScore, spThreeScore, soFourScore, sxFourScore, spFourScore,
    soFiveScore, sxFiveScore, spFiveScore, soSixScore, sxSixScore, spSixScore, soSevenScore, sxSevenScore, spSevenScore, soEightScore, sxEightScore, spEightScore, soNineScore,
    sxNineScore, spNineScore
]

let scoreNames = ["soOne", "sxOne", "spOne", "soTwo", "sxTwo", "spTwo", "soThree", "sxThree", "spThree", "soFour", "sxFour", "spFour", "soFive", "sxFive",
    "spFive", "soSix", "sxSix", "spSix", "soSeven", "sxSeven", "spSeven", "soEight", "sxEight", "spEight", "soNine", "sxNine", "spNine"]
function displayQuiz() {
    const questions = [
        {
            question: "How do you deal with your anger?",
            choices: ["Through my pursuit for justice, what goes around comes around!", "I don't...it's bothersome to me so I ignore it", "By judging the anger and getting rid of it, it's an unacceptable emotion"],
            weights: [
                {soEightScore: +1, sxEightScore: +1, spEightScore: +1, soNineScore: 0, sxNineScore: 0, spNineScore: 0, soOneScore: 0, sxOneScore: 0, spOneScore: 0}, // Weight for first choice
                {soNineScore: +1, sxNineScore: +1, spNineScore: +1, soEightScore: 0, sxEightScore: 0, spEightScore: 0, soOneScore: 0, sxOneScore: 0, spOneScore: 0}, // Weight for second choice
                {soOneScore: +1, sxOneScore: +1, spOneScore: +1, soEightScore: 0, sxEightScore: 0, spEightScore: 0, soNineScore: 0, sxNineScore: 0, spNineScore: 0}, // Weight for third choice
            ]
        },
        {
            question: "How do you deal with your shame?",
            choices: ["Through the positive attention of others", "By creating an ideal self to make me feel better", "I look for something or someone to help me find what's missing in myself"],
            weights: [
                {soTwoScore: +1, sxTwoScore: +1, spTwoScore: +1, soThreeScore: 0, sxThreeScore: 0, spThreeScore: 0, soFourScore: 0, sxFourScore: 0, spFourScore: 0}, // Weight for first choice
                {soThreeScore: +1, sxThreeScore: +1, spThreeScore: +1, soTwoScore: 0, sxTwoScore: 0, spTwoScore: 0, soFourScore: 0, sxFourScore: 0, spFourScore: 0}, // Weight for second choice
                {soFourScore: +1, sxFourScore: +1, spFourScore: +1,  soTwoScore: 0, sxTwoScore: 0, spTwoScore: 0, soThreeScore: 0, sxThreeScore: 0, spThreeScore: 0}, // Weight for third choice
            ]
        },
        {
            question: "How do you deal with your anxiety?",
            choices: ["Through learning of and controlling my 'environment' as an observer", "I think of the worst possible outcome for what I see", "By entertaining myself and thinking of fun possibilities"],
            weights: [
                {soFiveScore: +1, sxFiveScore: +1, spFiveScore: +1, soSixScore: 0, sxSixScore: 0, spSixScore: 0, soSevenScore: 0,  sxSevenScore: 0, spSevenScore: 0}, // Weight for first choice
                {soSixScore: +1, sxSixScore: +1, spSixScore: +1,  soFiveScore: 0, sxFiveScore: 0, spFiveScore: 0, soSevenScore: 0,  sxSevenScore: 0, spSevenScore: 0}, // Weight for second choice
                {soSevenScore: +1, sxSevenScore: +1, spSevenScore: +1, soFiveScore: 0, sxFiveScore: 0, spFiveScore: 0, soSixScore: 0, sxSixScore: 0, spSixScore: 0}, // Weight for third choice
            ]
        },
        {
            question: "What flaw do you or those around you find in yourself?",
            choices: ["I put myself down for no good reason", "I can't tell apart what's imagination and reality", "I feel entitled since I have high standards"],
            weights: [
                {soFourScore: +1, sxFourScore: +1, spFourScore: +1}, // Weight for first choice
                {soSevenScore: +1, sxSevenScore: +1, spSevenScore: +1}, // Weight for second choice
                {soOneScore: +1, sxOneScore: +1, spOneScore: +1}, // Weight for third choice
            ]
        },
        {
            question: "What flaw do you or those around you find in yourself?",
            choices: ["I want attention since I'm the most important", "I avoid external commitments because the world is draining", "I give myself tough love because I cannot be weak"],
            weights: [
                {soTwoScore: +1, sxTwoScore: +1, spTwoScore: +1}, // Weight for first choice
                {soFiveScore: +1, sxFiveScore: +1, spFiveScore: +1}, // Weight for second choice
                {soEightScore: +1, sxEightScore: +1, spEightScore: +1}, // Weight for third choice
            ]
        },
        {
            question: "What flaw do you or those around you find in yourself?",
            choices: ["I don't have an identity outside of my roles", "I doubt everything and put too much thought into everyday situations", "I distract myself to avoid discomfort and complexity"],
            weights: [
                {soThreeScore: +1, sxThreeScore: +1, spThreeScore: +1}, // Weight for first choice
                {soSixScore: +1, sxSixScore: +1, spSixScore: +1}, // Weight for second choice
                {soNineScore: +1, sxNineScore: +1, spNineScore: +1}, // Weight for third choice
            ]
        },
        {
            question: "How do you remain useful within groups?",
            choices: ["By using my achievements to get applause", "By working hard to reach my superiors", "By going towards what I believe is right"],
            weights: [
                {soThreeScore: +2}, // Weight for first choice
                {soFiveScore: +2}, // Weight for second choice
                {soOneScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "How do you remain useful within relationships?",
            choices: ["By using my rizz to keep the bops from leaving", "By giving the other all of my attention", "By making the other more perfect"],
            weights: [
                {sxThreeScore: +2}, // Weight for first choice
                {sxFiveScore: +2}, // Weight for second choice
                {sxOneScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "How do you remain useful for survival?",
            choices: ["By creating an atmosphere of security with money and protection", "By surviving without relying on external influence", "By improving myself"],
            weights: [
                {spThreeScore: +2}, // Weight for first choice
                {spFiveScore: +2}, // Weight for second choice
                {spOneScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "How do you remain pleasant within groups?",
            choices: ["By having influence and charming the group", "By letting go of my desires", "By being harmonious with the group"],
            weights: [
                {soTwoScore: +2}, // Weight for first choice
                {soSevenScore: +2}, // Weight for second choice
                {soNineScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "How do you remain pleasant within relationships?",
            choices: ["By always providing for the other", "By looking through rose-colored lenses", "By betraying my needs for the other's"],
            weights: [
                {sxTwoScore: +2, Score: 0, Score: 0}, // Weight for first choice
                {sxSevenScore: +2, Score: 0, Score: 0}, // Weight for second choice
                {sxNineScore: +2, Score: 0, Score: 0}, // Weight for third choice
            ]
        },
        {
            question: "How do you remain pleasant for survival?",
            choices: ["By giving to others to receive", "By creating relationships for my benefit", "By staying in my comfort zone"],
            weights: [
                {spTwoScore: +2, Score: 0, Score: 0}, // Weight for first choice
                {spSevenScore: +2, Score: 0, Score: 0}, // Weight for second choice
                {spNineScore: +2, Score: 0, Score: 0}, // Weight for third choice
            ]
        },
        {
            question: "How do you remain authentic within groups?",
            choices: ["By getting recognition for my insecurity", "By looking for a clear 'right' and 'wrong'", "By staying loyal when something goes wrong"],
            weights: [
                {soFourScore: +2}, // Weight for first choice
                {soSixScore: +2}, // Weight for second choice
                {soEightScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "How do you remain authentic within relationships?",
            choices: ["By being shameless for myself", "By preparing to avoid deception by being strong", "By being proud of my rebelliousness and charm"],
            weights: [
                {sxFourScore: +2}, // Weight for first choice
                {sxSixScore: +2}, // Weight for second choice
                {sxEightScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "How do you remain authentic for survival?",
            choices: ["By being demanding towards myself to suffer", "By showing my warmth to gain allies", "By always pursuing my needs no matter what"],
            weights: [
                {spFourScore: +2}, // Weight for first choice
                {spSixScore: +2}, // Weight for second choice
                {spEightScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "In groups, which is closest to you moving closer to people?",
            choices: ["I become someone that others can rely on", "I get validation for my good deeds", "I align others to my standards"],
            weights: [
                {soTwoScore: +2}, // Weight for first choice
                {soSixScore: +2}, // Weight for second choice
                {soOneScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "In relationships, which is closest to you moving closer to people?",
            choices: ["I focus on getting others to love me", "I create an atmosphere of strength to become depended on", "I give advice to others to show my love"],
            weights: [
                {sxTwoScore: +2}, // Weight for first choice
                {sxSixScore: +2}, // Weight for second choice
                {sxOneScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "In survival, which is closest to you moving closer to people?",
            choices: ["I act childish and loving for support", "I act friendly for security and associate with stronger people", "I strive for perfection to be loved"],
            weights: [
                {spTwoScore: +2}, // Weight for first choice
                {spSixScore: +2}, // Weight for second choice
                {spOneScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "In groups, which is closest to you being disengaged?",
            choices: ["I blame myself instead of others", "I avoid those who I deem as 'ordinary'", "I make surface-level contact to be a part of the group"],
            weights: [
                {soFourScore: +2}, // Weight for first choice
                {soFiveScore: +2}, // Weight for second choice
                {soNineScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "In relationships, which is closest to you being disengaged?",
            choices: ["I feel hate because I feel less", "I isolate from the rest of the world except for 'the one'", "I hide my desires to relate to the other"],
            weights: [
                {sxFourScore: +2}, // Weight for first choice
                {sxFiveScore: +2}, // Weight for second choice
                {sxNineScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "In survival, which is closest to you being disengaged?",
            choices: ["I hide my suffering from others", "I withdraw from the unsafe world", "I stick to routine to avoid change"],
            weights: [
                {spFourScore: +2}, // Weight for first choice
                {spFiveScore: +2}, // Weight for second choice
                {spNineScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "In groups, which is closest to you feeling important?",
            choices: ["I search for the spotlight and success", "I do good to be seen as saintly", "I protect those who are weaker than me (Theodore, stay back!)"],
            weights: [
                {soThreeScore: +2}, // Weight for first choice
                {soSevenScore: +2}, // Weight for second choice
                {soEightScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "In relationships, which is closest to you feeling important?",
            choices: ["I become attractive and demand the same from the other", "I look towards the extraordinary", "I take pride in my rebelliousness and anti sociability"],
            weights: [
                {sxThreeScore: +2}, // Weight for first choice
                {sxSevenScore: +2}, // Weight for second choice
                {sxEightScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "In survival, which is closest to you feeling important?",
            choices: ["I become good at what I do and overall a good-natured person", "I try to surround myself with people who make me feel important", "I focus on myself for instant gratification"],
            weights: [
                {spThreeScore: +2}, // Weight for first choice
                {spSevenScore: +2}, // Weight for second choice
                {spEightScore: +2}, // Weight for third choice
            ]
        },
        {
            question: "How do you search for validation?",
            choices: ["By trying to achieve power and success over others", "By trying to be loved by another", "By trying to be on the receiving end of a relationship"],
            weights: [
                {soTwoScore: +3}, // Weight for first choice
                {sxTwoScore: +3}, // Weight for second choice
                {spTwoScore: +3}, // Weight for third choice
            ]
        },
        {
            question: "How do you increase your attractiveness (as in, personality)?",
            choices: ["By playing roles to gain social success", "By conforming to societal standards of attractiveness", "By working to be admired from a hidden place"],
            weights: [
                {soThreeScore: +3}, // Weight for first choice
                {sxThreeScore: +3}, // Weight for second choice
                {spThreeScore: +3}, // Weight for third choice
            ]
        },
        {
            question: "How do you deal with your lack and suffering?",
            choices: ["By comparing myself to others", "By bringing others down", "By over-exerting myself"],
            weights: [
                {soFourScore: +3}, // Weight for first choice
                {sxFourScore: +3}, // Weight for second choice
                {spFourScore: +3}, // Weight for third choice
            ]
        },
        {
            question: "How do you close yourself off from the world?",
            choices: ["By desiring exclusivity and elitism", "By placing my entire self into one individual", "By seeking refuge from a draining world"],
            weights: [
                {soFiveScore: +3}, // Weight for first choice
                {sxFiveScore: +3}, // Weight for second choice
                {spFiveScore: +3}, // Weight for third choice
            ]
        },
        {
            question: "How do you search for a strong figure?",
            choices: ["By conforming to the rules of those around me", "By appearing as tough myself", "By being kind and ambiguous"],
            weights: [
                {soSixScore: +3}, // Weight for first choice
                {sxSixScore: +3}, // Weight for second choice
                {spSixScore: +3}, // Weight for third choice
            ]
        },
        {
            question: "How do you look for exciting and fulfilling things?",
            choices: ["By planning out group activities to get what I want", "By being excited towards a future full of possibilities", "By looking for people who make life exciting"],
            weights: [
                {soSevenScore: +3}, // Weight for first choice
                {sxSevenScore: +3}, // Weight for second choice
                {spSevenScore: +3}, // Weight for third choice
            ]
        },
        {
            question: "How do you gain stimulating and desirable experiences?",
            choices: ["By acting as a protector to justify oneself", "By getting love through the other (partner)", "By going towards my wishes and desires directly"],
            weights: [
                {soEightScore: +3}, // Weight for first choice
                {sxEightScore: +3}, // Weight for second choice
                {spEightScore: +3}, // Weight for third choice
            ]
        },
        {
            question: "How do you avoid reality?",
            choices: ["By becoming one with a group instead", "By forming communion with another", "By performing ordinary, routine activities"],
            weights: [
                {soNineScore: +3}, // Weight for first choice
                {sxNineScore: +3}, // Weight for second choice
                {spNineScore: +3}, // Weight for third choice
            ]
        },
        {
            question: "How do you strive for perfection?",
            choices: ["By being my own perfect ideals and self", "By making others conform to my perfection", "By trying to reach a perfection that I haven't gotten to yet"],
            weights: [
                {soOneScore: +3}, // Weight for first choice
                {sxOneScore: +3}, // Weight for second choice
                {spOneScore: +3}, // Weight for third choice
            ]
        },
        {
            question: "I surround myself with people who don't meet my standards to boost my ego.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soTwoScore: +2.5}, // Weight for first choice
                {soTwoScore: +1.5}, // Weight for second choice
                {soTwoScore: +0}, // Weight for third choice
                {soTwoScore: -0.5}, // Weight for fourth choice
                {soTwoScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I see myself as someone who occupies the hearts of others.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {sxTwoScore: +2.5}, // Weight for first choice
                {sxTwoScore: +1.5}, // Weight for second choice
                {sxTwoScore: +0}, // Weight for third choice
                {sxTwoScore: -0.5}, // Weight for fourth choice
                {sxTwoScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I avoid responsibility by looking for people to take care of me.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {spTwoScore: +2.5}, // Weight for first choice
                {spTwoScore: +1.5}, // Weight for second choice
                {spTwoScore: +0}, // Weight for third choice
                {spTwoScore: -0.5}, // Weight for fourth choice
                {spTwoScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I want to be admired and applauded by others.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soThreeScore: +2.5}, // Weight for first choice
                {soThreeScore: +1.5}, // Weight for second choice
                {soThreeScore: +0}, // Weight for third choice
                {soThreeScore: -0.5}, // Weight for fourth choice
                {soThreeScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I conform to certain gender roles to feel loved.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {sxThreeScore: +2.5}, // Weight for first choice
                {sxThreeScore: +1.5}, // Weight for second choice
                {sxThreeScore: +0}, // Weight for third choice
                {sxThreeScore: -0.5}, // Weight for fourth choice
                {sxThreeScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I believe I can achieve all of my goals through hard work.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {spThreeScore: +2.5}, // Weight for first choice
                {spThreeScore: +1.5}, // Weight for second choice
                {spThreeScore: +0}, // Weight for third choice
                {spThreeScore: -0.5}, // Weight for fourth choice
                {spThreeScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I feel as if I'm lacking and not living up to my social ideals.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soFourScore: +2.5}, // Weight for first choice
                {soFourScore: +1.5}, // Weight for second choice
                {soFourScore: +0}, // Weight for third choice
                {soFourScore: -0.5}, // Weight for fourth choice
                {soFourScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I search for the perfect relationship & feel hatred if this isn't met.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {sxFourScore: +2.5}, // Weight for first choice
                {sxFourScore: +1.5}, // Weight for second choice
                {sxFourScore: +0}, // Weight for third choice
                {sxFourScore: -0.5}, // Weight for fourth choice
                {sxFourScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I set high expectations for myself so I can suffer.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {spFourScore: +2.5}, // Weight for first choice
                {spFourScore: +1.5}, // Weight for second choice
                {spFourScore: +0}, // Weight for third choice
                {spFourScore: -0.5}, // Weight for fourth choice
                {spFourScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I use my knowledge to find an exclusive group of like-minded individuals.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soFiveScore: +2.5}, // Weight for first choice
                {soFiveScore: +1.5}, // Weight for second choice
                {soFiveScore: +0}, // Weight for third choice
                {soFiveScore: -0.5}, // Weight for fourth choice
                {soFiveScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I lose interest in my 'perfect person' once they show humanity.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {sxFiveScore: +2.5}, // Weight for first choice
                {sxFiveScore: +1.5}, // Weight for second choice
                {sxFiveScore: +0}, // Weight for third choice
                {sxFiveScore: -0.5}, // Weight for fourth choice
                {sxFiveScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I live based on my own ideas without external influence.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {spFiveScore: +2.5}, // Weight for first choice
                {spFiveScore: +1.5}, // Weight for second choice
                {spFiveScore: +0}, // Weight for third choice
                {spFiveScore: -0.5}, // Weight for fourth choice
                {spFiveScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I have to hide impulsivity to be more dutiful.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soSixScore: +2.5}, // Weight for first choice
                {soSixScore: +1.5}, // Weight for second choice
                {soSixScore: +0}, // Weight for third choice
                {soSixScore: -0.5}, // Weight for fourth choice
                {soSixScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I run towards danger to appear as tough.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {sxSixScore: +2.5}, // Weight for first choice
                {sxSixScore: +1.5}, // Weight for second choice
                {sxSixScore: +0}, // Weight for third choice
                {sxSixScore: -0.5}, // Weight for fourth choice
                {sxSixScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I become friendly and warm to combat my fears.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {spSixScore: +2.5}, // Weight for first choice
                {spSixScore: +1.5}, // Weight for second choice
                {spSixScore: +0}, // Weight for third choice
                {spSixScore: -0.5}, // Weight for fourth choice
                {spSixScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I have to be good-natured to avoid my pleasure-seeking.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soSevenScore: +2.5}, // Weight for first choice
                {soSevenScore: +1.5}, // Weight for second choice
                {soSevenScore: +0}, // Weight for third choice
                {soSevenScore: -0.5}, // Weight for fourth choice
                {soSevenScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I want to live my fantasies instead of being restrained by commitment.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {sxSevenScore: +2.5}, // Weight for first choice
                {sxSevenScore: +1.5}, // Weight for second choice
                {sxSevenScore: +0}, // Weight for third choice
                {sxSevenScore: -0.5}, // Weight for fourth choice
                {sxSevenScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I have to make good bargains to get what I want.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {spSevenScore: +2.5}, // Weight for first choice
                {spSevenScore: +1.5}, // Weight for second choice
                {spSevenScore: +0}, // Weight for third choice
                {spSevenScore: -0.5}, // Weight for fourth choice
                {spSevenScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I protect others with my strength, so I can do what I want.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soEightScore: +2.5}, // Weight for first choice
                {soEightScore: +1.5}, // Weight for second choice
                {soEightScore: +0}, // Weight for third choice
                {soEightScore: -0.5}, // Weight for fourth choice
                {soEightScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I deserve to go against the world since I've been deprived of my dreams.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {sxEightScore: +2.5}, // Weight for first choice
                {sxEightScore: +1.5}, // Weight for second choice
                {sxEightScore: +0}, // Weight for third choice
                {sxEightScore: -0.5}, // Weight for fourth choice
                {sxEightScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I'll do whatever to get the life that I deserve.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {spEightScore: +2.5}, // Weight for first choice
                {spEightScore: +1.5}, // Weight for second choice
                {spEightScore: +0}, // Weight for third choice
                {spEightScore: -0.5}, // Weight for fourth choice
                {spEightScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I become pleasant towards others so I can be included.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soNineScore: +2.5}, // Weight for first choice
                {soNineScore: +1.5}, // Weight for second choice
                {soNineScore: +0}, // Weight for third choice
                {soNineScore: -0.5}, // Weight for fourth choice
                {soNineScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I have to be in a relationship since I can't exist as one individual.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {sxNineScore: +2.5}, // Weight for first choice
                {sxNineScore: +1.5}, // Weight for second choice
                {sxNineScore: +0}, // Weight for third choice
                {sxNineScore: -0.5}, // Weight for fourth choice
                {sxNineScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I don't need any goals or desires as it's too tiring.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {spNineScore: +2.5}, // Weight for first choice
                {spNineScore: +1.5}, // Weight for second choice
                {spNineScore: +0}, // Weight for third choice
                {spNineScore: -0.5}, // Weight for fourth choice
                {spNineScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "My ideals and principles make me perfect and better.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soOneScore: +2.5}, // Weight for first choice
                {soOneScore: +1.5}, // Weight for second choice
                {soOneScore: +0}, // Weight for third choice
                {soOneScore: -0.5}, // Weight for fourth choice
                {soOneScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I have to improve this world that's full of injustices.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {sxOneScore: +2.5}, // Weight for first choice
                {sxOneScore: +1.5}, // Weight for second choice
                {sxOneScore: +0}, // Weight for third choice
                {sxOneScore: -0.5}, // Weight for fourth choice
                {sxOneScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "I worry about things based on the ideals of the world around me.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {spOneScore: +2.5}, // Weight for first choice
                {spOneScore: +1.5}, // Weight for second choice
                {spOneScore: +0}, // Weight for third choice
                {spOneScore: -0.5}, // Weight for fourth choice
                {spOneScore: -1}, // Weight for fifth choice
            ]
        },
        {
            question: "When I'm mad at someone, I try to use techniques to manage my anger instead of expressing it.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soOneScore: +1, sxOneScore: +1, spOneScore: +1}, // Weight for first choice
                {soOneScore: +0.5, sxOneScore: +0.5, spOneScore: +0.5}, // Weight for second choice
                {soOneScore: +0}, // Weight for third choice
                {soOneScore: -0.25, sxOneScore: -0.25, spOneScore: -0.25}, // Weight for fourth choice
                {soOneScore: -0.5, sxOneScore: -0.5, spOneScore: -0.5}, // Weight for fifth choice
            ]
        },
        {
            question: "I perform routine and simple tasks to numb myself.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soNineScore: +1, sxNineScore: +1, spNineScore: +1}, // Weight for first choice
                {soNineScore: +0.5, sxNineScore: +0.5, spNineScore: +0.5}, // Weight for second choice
                {soNineScore: +0}, // Weight for third choice
                {soNineScore: -0.25, sxNineScore: -0.25, spNineScore: -0.25}, // Weight for fourth choice
                {soNineScore: -0.5, sxNineScore: -0.5, spNineScore: -0.5}, // Weight for fifth choice
            ]
        },
        {
            question: "I deny the existence of things that make me anxious.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soEightScore: +1, sxEightScore: +1, spEightScore: +1}, // Weight for first choice
                {soEightScore: +0.5, sxEightScore: +0.5, spEightScore: +0.5}, // Weight for second choice
                {soEightScore: +0}, // Weight for third choice
                {soEightScore: -0.25, sxEightScore: -0.25, spEightScore: -0.25}, // Weight for fourth choice
                {soEightScore: -0.5, sxEightScore: -0.5, spEightScore: -0.5}, // Weight for fifth choice
            ]
        },
        {
            question: "When I do something that's unfavorable, I make it more positive and even change the purpose of said action altogether. ",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soSevenScore: +1, sxSevenScore: +1, spSevenScore: +1}, // Weight for first choice
                {soSevenScore: +0.5, sxSevenScore: +0.5, spSevenScore: +0.5}, // Weight for second choice
                {soSevenScore: +0}, // Weight for third choice
                {soSevenScore: -0.25, sxSevenScore: -0.25, spSevenScore: -0.25}, // Weight for fourth choice
                {soSevenScore: -0.5, sxSevenScore: -0.5, spSevenScore: -0.5}, // Weight for fifth choice
            ]
        },
        {
            question: "I project unfavorable aspects of myself onto others.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soSixScore: +1, sxSixScore: +1, spSixScore: +1}, // Weight for first choice
                {soSixScore: +0.5, sxSixScore: +0.5, spSixScore: +0.5}, // Weight for second choice
                {soSixScore: +0}, // Weight for third choice
                {soSixScore: -0.25, sxSixScore: -0.25, spSixScore: -0.25}, // Weight for fourth choice
                {soSixScore: -0.5, sxSixScore: -0.5, spSixScore: -0.5}, // Weight for fifth choice
            ]
        },
        {
            question: "I separate myself from my feelings to avoid stress.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soFiveScore: +1, sxFiveScore: +1, spFiveScore: +1}, // Weight for first choice
                {soFiveScore: +0.5, sxFiveScore: +0.5, spFiveScore: +0.5}, // Weight for second choice
                {soFiveScore: +0}, // Weight for third choice
                {soFiveScore: -0.25, sxFiveScore: -0.25, spFiveScore: -0.25}, // Weight for fourth choice
                {soFiveScore: -0.5, sxFiveScore: -0.5, spFiveScore: -0.5}, // Weight for fifth choice
            ]
        },
        {
            question: "Whenever I'm criticized, I make that criticism a part of myself.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soFourScore: +1, sxFourScore: +1, spFourScore: +1}, // Weight for first choice
                {soFourScore: +0.5, sxFourScore: +0.5, spFourScore: +0.5}, // Weight for second choice
                {soFourScore: +0}, // Weight for third choice
                {soFourScore: -0.25, sxFourScore: -0.25, spFourScore: -0.25}, // Weight for fourth choice
                {soFourScore: -0.5, sxFourScore: -0.5, spFourScore: -0.5}, // Weight for fifth choice
            ]
        },
        {
            question: "I model my behavior based on people/characters that I admire.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soThreeScore: +1, sxThreeScore: +1, spThreeScore: +1}, // Weight for first choice
                {soThreeScore: +0.5, sxThreeScore: +0.5, spThreeScore: +0.5}, // Weight for second choice
                {soThreeScore: +0}, // Weight for third choice
                {soThreeScore: -0.25, sxThreeScore: -0.25, spThreeScore: -0.25}, // Weight for fourth choice
                {soThreeScore: -0.5, sxThreeScore: -0.5, spThreeScore: -0.5}, // Weight for fifth choice
            ]
        },
        {
            question: "I hide aspects of myself away and instead pursue them through other people.",
            choices: ["Agree", "Somewhat agree", "Neutral", "Somewhat disagree", "Disagree"],
            weights: [
                {soTwoScore: +1, sxTwoScore: +1, spTwoScore: +1}, // Weight for first choice
                {soTwoScore: +0.5,sxTwoScore: +0.5, spTwoScore: +0.5}, // Weight for second choice
                {soTwoScore: +0}, // Weight for third choice
                {soTwoScore: -0.25, sxTwoScore: -0.25, spTwoScore: -0.25}, // Weight for fourth choice
                {soTwoScore: -0.5, sxTwoScore: -0.5, spTwoScore: -0.5}, // Weight for fifth choice
            ]
        }
        
    ]





    document.getElementById('enneastart').addEventListener('click', function() {
        document.getElementById('enneahome').style.display = 'none';
        document.getElementById('enneaquizpage').style.display = 'block';
    });
//Function to display the current question and choices
function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('enneaquestion');
    const choiceContainers = document.getElementById('enneachoices');
    
    choiceContainers.innerHTML = '';
    
    questionElement.textContent = currentQuestion.question;
    
  

    currentQuestion.choices.forEach((choice, index) => {
            //Buttons for choices
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('enneachoices');
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
            if (selectedChoiceWeight.hasOwnProperty('soOneScore')) {
                soOneScore += selectedChoiceWeight.soOneScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('sxOneScore')) {
                sxOneScore += selectedChoiceWeight.sxOneScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('spOneScore')) {
                spOneScore += selectedChoiceWeight.spOneScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('soTwoScore')) {
                soTwoScore += selectedChoiceWeight.soTwoScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('sxTwoScore')) {
                sxTwoScore += selectedChoiceWeight.sxTwoScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('spTwoScore')) {
                spTwoScore += selectedChoiceWeight.spTwoScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('soThreeScore')) {
                soThreeScore += selectedChoiceWeight.soThreeScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('sxThreeScore')) {
                sxThreeScore += selectedChoiceWeight.sxThreeScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('spThreeScore')) {
                spThreeScore += selectedChoiceWeight.spThreeScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('soFourScore')) {
                soFourScore += selectedChoiceWeight.soFourScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('sxFourcore')) {
                sxFourScore += selectedChoiceWeight.sxFourScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('spFourScore')) {
                spFourScore += selectedChoiceWeight.spFourScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('soFiveScore')) {
                soFiveScore += selectedChoiceWeight.soFiveScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('sxFiveScore')) {
                sxFiveScore += selectedChoiceWeight.sxFiveScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('spFiveScore')) {
                spFiveScore += selectedChoiceWeight.spFiveScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('soSixScore')) {
                soSixScore += selectedChoiceWeight.soSixScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('sxSixScore')) {
                sxSixScore += selectedChoiceWeight.sxSixScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('spSixScore')) {
                spSixScore += selectedChoiceWeight.spSixScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('soSevenScore')) {
                soSevenScore += selectedChoiceWeight.soSevenScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('sxSevenScore')) {
                sxSevenScore += selectedChoiceWeight.sxSevenScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('spSevenScore')) {
                spSevenScore += selectedChoiceWeight.spSevenScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('soEightScore')) {
                soEightScore += selectedChoiceWeight.soEightScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('sxEightScore')) {
                sxEightScore += selectedChoiceWeight.sxEightScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('spEightScore')) {
                spEightScore += selectedChoiceWeight.spEightScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('soNineScore')) {
                soNineScore += selectedChoiceWeight.soNineScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('sxNineScore')) {
                sxNineScore += selectedChoiceWeight.sxNineScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('spNineScore')) {
                spNineScore += selectedChoiceWeight.spNineScore;
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
    scores[0] += soOneScore;
    scores[1] += sxOneScore;
    scores[2] += spOneScore;
    scores[3] += soTwoScore;
    scores[4] += sxTwoScore;
    scores[5] += spTwoScore;
    scores[6] += soThreeScore;
    scores[7] += sxThreeScore;
    scores[8] += spThreeScore;
    scores[9] += soFourScore;
    scores[10] += sxFourScore;
    scores[11] += spFourScore;
    scores[12] += soFiveScore;
    scores[13] += sxFiveScore;
    scores[14] += spFiveScore;
    scores[15] += soSixScore;
    scores[16] += sxSixScore;
    scores[17] += spSixScore;
    scores[18] += soSevenScore;
    scores[19] += sxSevenScore;
    scores[20] += spSevenScore;
    scores[21] += soEightScore;
    scores[22] += sxEightScore;
    scores[23] += spEightScore;
    scores[24] += soNineScore;
    scores[25] += sxNineScore;
    scores[26] += spNineScore;
    const highestScore = Math.max(...scores);
    let highestIndex = scores.indexOf(highestScore)
    let enneagramResult = scoreNames[highestIndex]
    console.log("Enneagram Subtype:", enneagramResult);

    document.getElementById('ennearesults').style.display = 'none';
    
    //Remove quiz-related elements from the DOM
    const questionElement = document.getElementById('enneaquestion');
    const choiceContainers = document.getElementById('enneachoices');
    const quizContainer = document.getElementById('enneaquiz');
    questionElement.remove();
    choiceContainers.remove();
    quizContainer.remove();
   

    displayImage(enneagramResult);

    document.getElementById('ennearesults').style.display = 'block'
     document.getElementById('enneaquizpage').style.display = 'none'
}



  //Function to calculate MBTI type and return image URL 
  function getEnneaImageUrl(enneagramResult) {
    const enneaImageUrls = {
        "soOne": "so1.PNG",
        "sxOne": "sx1.PNG",
        "spOne": "sp1.PNG",
        "soTwo": "so2.PNG",
        "sxTwo": "sx2.PNG",
        "spTwo": "sp2.PNG",
        "soThree": "so3.PNG",
        "sxThree": "sx3.PNG",
        "spThree": "sp3.PNG",
        "soFour": "so4.PNG",
        "sxFour": "sx4.PNG",
        "spFour": "sp4.PNG",
        "soFive": "so5.PNG",
        "sxFive": "sx5.PNG",
        "spFive": "sp5.PNG",
        "soSix": "so6.PNG",
        "sxSix": "sx6.PNG",
        "spSix": "sp6.PNG",
        "soSeven": "so7.PNG",
        "sxSeven": "sx7.PNG",
        "spSeven": "sp7.PNG",
        "soEight": "so8.PNG",
        "sxEight": "sx8.PNG",
        "spEight": "sp8.PNG",
        "soNine": "so9.PNG",
        "sxNine": "sx9.PNG",
        "spNine": 'sp9.PNG',
        
    
    };
    return enneaImageUrls[enneagramResult] || ""
}

//Display image
function displayImage(enneagramResult) {
    const imageURL = getEnneaImageUrl(enneagramResult);
    const enneaImageContainer = document.getElementById('ennea-image');
    const imageElement = document.createElement('img');
    imageElement.src = imageURL;
    imageElement.id = 'enneaimg';

    enneaImageContainer.appendChild(imageElement);

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
