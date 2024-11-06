import { defineStore } from 'pinia'

export const useQuizStore = defineStore('color-personality-quiz', {
    state: () => {
        return {
            colorsAnswerKey: {
                orange: ["A", "H", "K", "N", "S"],
                blue: ["C", "F", "J", "O", "R"],
                gold: ["B", "G", "I", "M", "T"],
                green: ["D", "E", "L", "P", "Q"]
            },
            quizRows: {
                row1: {
                    A: ["Active", "Variety", "Sports", "Opportunity", "Spontaneous", "Flexible"],
                    B: ["Organized", "Planned", "Neat", "Parental", "Traditional", "Responsible"],
                    C: ["Warm", "Helpful", "Friends", "Authentic", "Harmonious", "Compassionate"],
                    D: ["Learning", "Science", "Quiet", "Versatile", "Inventive", "Competent"]
                },
                row2: {
                    E: ["Curious", "Ideas", "Questions", "Conceptual", "Knowledge", "Problem-Solver"],
                    F: ["Caring", "People-Oriented", "Feelings", "Unique", "Empathetic", "Communicative"],
                    G: ["Orderly", "On-Time", "Honest", "Stable", "Sensible", "Dependable"],
                    H: ["Action", "Challenges", "Competitive", "Impetuous", "Impactful"]
                },
                row3: {
                    I: ["Helpful", "Trustworthy", "Dependable", "Loyal", "Conservative", "Organized"],
                    J: ["Kind", "Understanding", "Giving", "Devoted", "Warm", "Poetic"],
                    K: ["Playful", "Quick", "Adventurous", "Confrontive", "Open-Minded", "Independent"],
                    L: ["Independent", "Exploring", "Competent", "Theoretical", "Why Questions", "Ingenious"]
                },
                row4: {
                    M: ["Follow", "Rules", "Useful", "Save Money", "Concerned", "Procedural", "Cooperative"],
                    N: ["Active", "Free", "Winning", "Daring", "Impulsive", "Risk-Taker"],
                    O: ["Sharing", "Getting Along", "Feelings", "Tender", "Inspirational", "Dramatic"],
                    P: ["Thinking", "Solving Problems", "Perfectionist", "Determined", "Complex", "Composed"]
                },
                row5: {
                    Q: ["Puzzles", "Seeking Info", "Making Sense", "Philosophical", "Principled", "Rational"],
                    R: ["Social Causes", "Easygoing", "Happy Endings", "Approachable", "Affectionate", "Sympathetic"],
                    S: ["Exciting", "Lively", "Hands-On", "Courageous", "Skillful", "On Stage"],
                    T: ["Pride", "Tradition", "Do Things Right", "Orderly", "Conventional", "Careful"]
                }
            },
            colorMeaning: {
                orange: {
                    shortDesc: "Persuaders & Idea Promoters",
                    adjectives: "witty, spontaneous, impulsive, impactful, generous, optimistic, bold & charming",
                    characteristics: ["Lively", "Bold & Impulsive", "Expects Freedom", "Great Verbal Skills", "Likes People", "Likes to be in Action", "Makes Quick Decisions", "Positive & Optimistic", "Wants to be Liked"],
                    sentence: "I value skill, resourcefulness, and courage. I need fun, variety, simulation, and excitement."
                },
                blue: {
                    shortDesc: "Organized & Idea Doers",
                    adjectives: "warm, communicative, compassionate, idealistic, spiritual & sincere",
                    characteristics: ["Ask Questions", "Caring", "Easygoing", "Expects Harmony", "Hates Conflict", "Knows Everyone", "Likeable", "Loves to Check on People", "Needs Appreciation", "Open"],
                    sentence: "I look for the meaning and significance in life. I need to contribute, encourage, and care."
                },
                gold: {
                    shortDesc: "Analyzers & Idea Perfectors",
                    adjectives: "loyal, dependable, prepared, thorough, sensible, punctual & organized",
                    characteristics: ["Asks Informative Questions", "Doesn't Like Repetition", "Doesn't Like Small Talk", "Fact-Oriented", "High Standards", "Keeps to Schedules", "Private Person", "Structured", "Works Alone"],
                    sentence: "I have a strong sense of what is right and wrong in life. I need to follow rules and respect authority."
                },
                green: {
                    shortDesc: "Controllers & Idea Generators",
                    adjectives: "analytical, conceptual, attentive, logical, perfectionistic & abstract",
                    characteristics: ["Decisive", "Demanding", "Expects Efficiency", "Expects Results", "Has Strong Opinions", "Likes Conflict", "Needs to be In Charge", "Separates Facts from Feelings", "Wants Action/Change"],
                    sentence: "I value intelligence, insight, fairness, and justice. I need explanations and answers."
                }
            },
            userAnswer: {'A': 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, P: 0, Q: 0, R: 0, S: 0, T: 0},
            userColorScore: {orange: 0, blue: 0, gold: 0, green: 0},
            userColorWinner: null
        }
    },
    getters: {
        getColorsAnswerKey(state) {
            return state.colorsAnswerKey;
        },
        getQuizRows(state) {
            return state.quizRows;
        },
        getQuizRowByID: (state) => (rowNum) => {
            return state.quizRows[`row${rowNum}`];
        },
        getAllUserAnswer(state) {
            return state.userAnswer;
        },
        getUserAnswerByID: (state) => (id) => {
            console.log(state.userAnswer[id]);
            return state.userAnswer[id];
        },
        getColorMeaning(state) {
            return state.colorMeaning;
        },
        getColorMeaningByID: (state) => (color) => {
            return state.colorMeaning[color];
        },
        getUserColor(state) {
            return state.userColorWinner;
        },
        getUserColorScore(state) {
            return state.userColorScore;
        },
        getUserColorScoreByID: (state) => (colorID) => {
            return state.userColorScore[colorID];
        }
    },
    actions: {
        updateAnswer(id, value) {
            this.userAnswer[id] = value;
        },
        calculateColorScore() {
            for (const color in this.colorsAnswerKey) {
                this.userColorScore[color] = this.colorsAnswerKey[color].reduce((score, key) => score + this.userAnswer[key], 0);
            }
        },
        determineColorResult() {
            const maxScore = Math.max(...Object.values(this.userColorScore));
            const winningColors = Object.keys(this.userColorScore).filter(color => this.userColorScore[color] === maxScore);
            this.userColorWinner = winningColors.length > 1 ? winningColors : winningColors[0];
        },
        clearResults() {
            this.userAnswer = Object.fromEntries(Object.keys(this.userAnswer).map(key => [key, 0]));
            this.userColorScore = { Blue: 0, Green: 0, Gold: 0, Orange: 0 };
            this.userColorWinner = null;
        },
    }
})