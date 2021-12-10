// INITIAL DATA
let currentQuiz;
let currentQuestion = 0;
let currentScore = 0;
let quizLength = 0;
let firstTry = true;

let bodyTitle = document.querySelector(".container h1");
let bodyContainer = document.querySelector(".container");

let quizSelection = document.querySelector(".quiz-selection");
let quizArea = document.querySelector(".quiz-area");
let quizResults = document.querySelector(".results");

let progressBar = document.querySelector(".progress-bar");
let progress = 0;
let quizPace = 0;

// EVENTS
let delay = setTimeout(() => {
  document.querySelectorAll(".quiz-card").forEach(card => card.addEventListener("click", loadQuiz))
}, 10);


// FUNCTIONS
function showSelection() {
  // Limpa informações e a barra de progresso
  progress = 0;
  updateProgress();

  quizSelection.innerHTML = "";
  quizResults.innerHTML = "";

  bodyTitle.style.display = "block";
  quizSelection.style.display = "flex";

  setTimeout(() => {
    bodyTitle.style.visibility = "visible";
    bodyTitle.style.opacity = 1;
    quizSelection.style.visibility = "visible";
    quizSelection.style.opacity = 1;
  }, 1);
  
  firstTry = true;

  for(let i = 0; i < quiz.length; i++) {

    // Cria os elementos Html
    let qCard = document.createElement("div");
    let qImgDiv = document.createElement("div");
    let qImg = document.createElement("img");
    let qTitle = document.createElement("div");
    let qDesc = document.createElement("div");
    let qLength = document.createElement("div");

    // Popula os elementos com suas respectivas informações
    qCard.setAttribute("data-quiz", i);
    qCard.classList.add("quiz-card");

    qImgDiv.classList.add("quiz-img");
    qImg.src = `assets/images/${quiz[i].title}.png`;
    qImg.alt = `${quiz[i].title} logo`;

    qTitle.classList.add("quiz-title");
    qTitle.innerHTML = `${quiz[i].title}`;

    qDesc.classList.add("quiz-description");
    qDesc.innerHTML = `${quiz[i].desc}`;

    qLength.classList.add("quiz-length");
    qLength.innerHTML = `Total de questões: ${quiz[i].questions.length}`;

    // Organiza os elementos criados
    qImgDiv.appendChild(qImg);

    qCard.appendChild(qImgDiv);
    qCard.appendChild(qTitle);
    qCard.appendChild(qDesc);
    qCard.appendChild(qLength);

    quizSelection.appendChild(qCard);
  }

  // Cria os eventos de cada card
  setTimeout(() => {
    document.querySelectorAll(".quiz-card").forEach(card => card.addEventListener("click", loadQuiz))
  }, 10);
}

function loadQuiz(e) {
  // Limpa a tela de resultados e inicializa as variáveis
  quizResults.innerHTML = "";

  if(firstTry) currentQuiz = e.currentTarget.getAttribute("data-quiz");
  currentQuestion = 0;
  quizLength = quiz[currentQuiz].questions.length;
  quizPace = (100 / quizLength);
  currentScore = 0;
  progress = 0;
  updateProgress();

  quizSelection.style.visibility = "hidden";
  bodyTitle.style.visibility = "hidden";
  quizSelection.style.opacity = 0;
  bodyTitle.style.opacity = 0;

  setTimeout(() => {
    quizSelection.style.display = "none";
    bodyTitle.style.display = "none";
    quizArea.style.display = "flex";
  }, 500);

  setTimeout(() => {
    quizArea.style.visibility = "visible";
    quizArea.style.opacity = 1;
    showQuestion();
  }, 550);
  
}

function showQuestion() {
  quizArea.style.display = "flex";

  setTimeout(() => {
    quizArea.style.visibility = "visible";
    quizArea.style.opacity = 1;
  }, 1);

  let questionTitle = document.querySelector(".quiz-area .question");
  let questionOptions = document.querySelector(".quiz-area .options");
  let qOption;
  let qOptionNumber;
  let qOptionText;
  
  if(currentQuestion < quizLength) {

    questionTitle.innerHTML = `Questão ${currentQuestion}: ${quiz[currentQuiz].questions[currentQuestion].question}`;
    questionOptions.innerHTML = "";

    for(let i = 0; i < quiz[currentQuiz].questions[currentQuestion].options.length; i++) {
      qOption = document.createElement("div");
      qOptionNumber = document.createElement("div");
      qOptionText = document.createElement("div");

      qOption.classList.add("option");
      qOption.setAttribute("data-number", i);

      qOptionNumber.classList.add("option-number");
      qOptionNumber.innerHTML = `${i}`
      
      qOptionText.classList.add("option-text");
      qOptionText.innerHTML = `${quiz[currentQuiz].questions[currentQuestion].options[i]}`
    
      qOption.appendChild(qOptionNumber);
      qOption.appendChild(qOptionText);
      questionOptions.appendChild(qOption);
    }

    delay = setTimeout(() => {
      document.querySelectorAll(".options .option").forEach(option => option.addEventListener("click", nextQuestion));
    }, 10);

  } 
}

function nextQuestion(e) {
  let choice = e.currentTarget.getAttribute("data-number");

  if(choice == quiz[currentQuiz].questions[currentQuestion].answer) currentScore += 1;

  progress += quizPace;
  updateProgress();
  currentQuestion += 1;

  quizArea.style.visibility = "hidden";
  quizArea.style.opacity = 0;

  setTimeout(() => {
    quizArea.style.display = "none";
    if(currentQuestion < quizLength) {
      showQuestion();
    } else {
      showResults();
    }
  }, 500);
}

function updateProgress() {
  progressBar.style.width = `${progress}vw`;

  if(progress >= 100) {
    progressBar.style.borderTopRightRadius = 0;
    progressBar.style.borderBottomRightRadius = 0;
  } else {
    progressBar.style.borderTopRightRadius = "5px";
    progressBar.style.borderBottomRightRadius = "5px";
  }
  
}

function showResults() {
  let finalScore = (currentScore/quizLength) * 100;

  let rImg = document.createElement("div");
  let rText = document.createElement("div");
  let rInfo = document.createElement("div");
  let rButtons = document.createElement("div");
  let btnRetry = document.createElement("div");
  let btnSelection = document.createElement("div");

  rImg.classList.add("result-img");
  rImg.innerHTML = `${finalScore}%`;
  
  rText.classList.add("result-text");
  rInfo.classList.add("result-info");
  rButtons.classList.add("result-buttons");

  btnRetry.classList.add("btn");
  btnRetry.innerHTML = `Tentar Novamente`;

  btnSelection.classList.add("btn");
  btnSelection.innerHTML = `Novo Quiz`;

  if(finalScore == 100){
    rText.innerHTML = `Perfeito`;
    rInfo.innerHTML = `Parabéns, você acertou todas as perguntas deste quiz!`;
  } else if(finalScore >= 90) {
    rText.innerHTML = `Excelente`;
    rInfo.innerHTML = `Parabéns, você acertou ${currentScore} das ${quizLength} perguntas deste quiz!`;
  } else if(finalScore >= 75) {
    rText.innerHTML = `Muito bem`;
    rInfo.innerHTML = `Você acertou ${currentScore} das ${quizLength} perguntas do quiz.`;
  } else if(finalScore >= 50) {
    rText.innerHTML = `Respeitável`;
    rInfo.innerHTML = `Você acertou ${currentScore} das ${quizLength} perguntas.`;
  } else if(finalScore >= 25) {
    rText.innerHTML = `Questionável`;
    rInfo.innerHTML = `Você acertou ${currentScore} das ${quizLength} perguntas, que tal tentar outra vez?`;
  } else if(finalScore > 0) {
    rText.innerHTML = `Não foi dessa vez`;
    rInfo.innerHTML = `Das ${quizLength} perguntas, você acertou apenas ${currentScore}.`;
  } else {
    rText.innerHTML = `O fundo do poço`;
    rInfo.innerHTML = `Você não acertou nenhuma questão deste quiz. <br> Tente novamente depois de estudar mais do assunto.`;
  }

  quizResults.appendChild(rImg);
  quizResults.appendChild(rText);
  quizResults.appendChild(rInfo);
  rButtons.appendChild(btnRetry);
  rButtons.appendChild(btnSelection);
  quizResults.appendChild(rButtons);

  quizResults.style.display = "flex";
  
  setTimeout(() => {
    document.querySelector(".result-buttons").firstElementChild.addEventListener("click", () => {
      quizResults.style.visibility = "hidden";
      quizResults.style.opacity = 0;
      firstTry = false;
      setTimeout(() => {
        quizResults.style.display = "none";
        loadQuiz();
      }, 500);
    });
    document.querySelector(".result-buttons").lastElementChild.addEventListener("click", () => {
      quizResults.style.visibility = "hidden";
      quizResults.style.opacity = 0;
      setTimeout(() => {
        quizResults.style.display = "none";
        showSelection();
      }, 500);
    })
  }, 10);

  setTimeout(() => {
    quizResults.style.visibility = "visible";
    quizResults.style.opacity = 1;
  }, 100);
  
  
}

showSelection();
