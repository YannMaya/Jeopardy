const game = document.getElementById("game")
const scoreDisplay = document.getElementById("score")

const jeopardyCategories = [
    {
        genre: "MEXICO",
        questions: [
            {
                question: "¿Qué es el tequila?",
                answers: ["a) una bebida", "b) una comida", "c) una cerveza"],
                correct: "a) una bebida",
                level: "easy"
            },
            {
                question: "¿Cuál es el deporte más popular en México?",
                answers: ["a) el fútbol", "b) el boxeo", "el básquetbol"],
                correct: "a) el fútbol",
                level: "medium"
            },
            {
                question: "¿Cuál es la capital de México",
                answers: ["a) CDMX", "b) Monterrey", "c) Jalisco"],
                correct: "a) CDMX",
                level: "hard"
            },
            {
                question: "¿Cuántas lenguas oficiales tiene México",
                answers: ["a) 1", "b) 2", "c) 64"],
                correct: "a) 1",
                level: "extra hard"
            },

        ],
    },
    {
        genre: "ESPAÑA",
        questions: [
            {
                question: "¿Qué es el Flamenco?",
                answers: ["a) un baile", "b) una comida", "c) una ciudad"],
                correct: "a) un baile",
                level: "easy"
            },
            {
                question: "¿Dónde está España?",
                answers: ["a) al 0este de portugal", "b) al norte de alemania", "al suroeste de francia"],
                correct: "c) al suroeste de francia",
                level: "medium"
            },
            {
                question: "¿Cuál es la capital de España",
                answers: ["a) Madrid", "b) Barcelona", "c) Sevilla"],
                correct: "a) Madrid",
                level: "hard"
            },
            {
                question: "¿Quién es el actor español con un premio “Oscar”?",
                answers: ["a) Benicio del Toro", "b) Javier Bardem", "Jordi Molla"],
                correct: "a) Benicio del Toro",
                level: "extra hard"
            },

        ],
    },
    {
        genre: "LATINOAMÉRICA",
        questions: [
            {
                question: "¿En qué país se encuentra “Machu Pichu”?",
                answers: ["a) Ecuador", "b) Perú", "c) Colombia"],
                correct: "b) Perú",
                level: "easy"
            },
            {
                question: "¿Cuál es la baile nacional de Argentina?",
                answers: ["a) el tango", "b) el flamenco", "la salsa"],
                correct: "a) el tango",
                level: "medium"
            },
            {
                question: "¿Cuál es la capital de Ecuador",
                answers: ["a) Quito", "b) Montevideo", "c) Bogotá"],
                correct: "a) Quito",
                level: "hard"
            },
            {
                question: "¿En qué país no se habla Español?",
                answers: ["a) Belice", "b) Paraguay", "c) Puerto Rico"],
                correct: "a) Belice",
                level: "extra hard"
            },

        ],
    },
    {
        genre: "POLONIA",
        questions: [
            {
                question: "¿Cuál ciudad no está en Polonia?",
                answers: ["a) Cracovia", "b) Breslavia", "c) Bratislava"],
                correct: "c) Bratislava",
                level: "easy"
            },
            {
                question: "¿Qué ciudad es más grande?",
                answers: ["a) Lodz", "b) Gdansk", "Wroclaw"],
                correct: "a) Gdansk",
                level: "medium"
            },
            {
                question: "¿Cómo se llaman las personas de Polonia?",
                answers: ["a) Polaquines", "b) Polacos", "c) Poloneses"],
                correct: "b) Polacos",
                level: "hard"
            },
            {
                question: "¿CUÁNTOS HABITANTES TIENE POLONIA?",
                answers: ["a) 37 millones", "b) 50 millones", "c) 64 millones"],
                correct: "a) 37 millones",
                level: "extra hard"
            },

        ],
    },
]


function addCategory(category) {
    const column = document.createElement("div")
    column.classList.add("genre-column")

    const genreTitle = document.createElement("div")
    genreTitle.classList.add("genre-title")
    genreTitle.innerText = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
        const card = document.createElement("div")
        card.classList.add("card")
        column.append(card)

        if (question.level === "easy") {
            card.innerText = 100
        }
        if (question.level === "medium") {
            card.innerText = 200
        }
        if (question.level === "hard") {
            card.innerText = 300
        }
        if (question.level === "extra hard") {
            card.innerText = 400
        }

        card.setAttribute("data-question", question.question)
        card.setAttribute("data-answer-1", question.answers[0])
        card.setAttribute("data-answer-2", question.answers[1])
        card.setAttribute("data-answer-3", question.answers[2])
        card.setAttribute("data-correct", question.correct)
        card.setAttribute("data-value", card.getInnerHTML())

        // card.addEventListener("click", flipCard)
        card.addEventListener("click", ventanaModal)


    })
}

jeopardyCategories.forEach(category => addCategory(category))

function ventanaModal(element) {
    
}

// function flipCard(){
//     this.innerText = ""
//     this.style.fontSize = "15px"
//     this.style.lineHeight = "30px"
//     const textDisplay = document.createElement("div")
//     textDisplay.classList.add("card-text")
//     textDisplay.innerText = this.getAttribute("data-question")
//     const firstButton = document.createElement("button")
//     const secondButton = document.createElement("button")
//     const thirdButton = document.createElement("button")

//     firstButton.classList.add("first-button")
//     secondButton.classList.add("second-button")
//     thirdButton.classList.add("third-button")

//     firstButton.innerText = this.getAttribute("data-answer-1")
//     secondButton.innerText = this.getAttribute("data-answer-2")
//     thirdButton.innerText = this.getAttribute("data-answer-3")
//     this.append(textDisplay, firstButton, secondButton, thirdButton)

//     const allCards = Array.from(document.querySelectorAll(".card"))
//     allCards.forEach(card => card.removeEventListener("click", flipCard))
// }