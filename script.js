const quizQuestions = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Lahore", "Karachi", "Islamabad", "Rawalpindi"],
    correctAnswer: "Islamabad",
  },
  {
    question:
      "Which mountain range runs along the northern border of Pakistan?",
    options: ["Himalayas", "Andes", "Rocky Mountains", "Hindu Kush"],
    correctAnswer: "Hindu Kush",
  },
  {
    question: "What is the official language of Pakistan?",
    options: ["Punjabi", "Sindhi", "Urdu", "Balochi"],
    correctAnswer: "Urdu",
  },
  {
    question: "Which river is the longest in Pakistan?",
    options: ["Jhelum", "Sutlej", "Indus", "Chenab"],
    correctAnswer: "Indus",
  },
  {
    question: "Who is the founder of Pakistan?",
    options: [
      "Allama Iqbal",
      "Muhammad Ali Jinnah",
      "Zulfikar Ali Bhutto",
      "Liaquat Ali Khan",
    ],
    correctAnswer: "Muhammad Ali Jinnah",
  },
  {
    question: "What is the national sport of Pakistan?",
    options: ["Cricket", "Hockey", "Squash", "Football"],
    correctAnswer: "Hockey",
  },
  {
    question:
      "Which province in Pakistan is known as the 'Land of Five Rivers'?",
    options: ["Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Punjab"],
    correctAnswer: "Punjab",
  },
  {
    question: "In which year did Pakistan become an independent nation?",
    options: ["1945", "1947", "1950", "1952"],
    correctAnswer: "1947",
  },
  {
    question:
      "What is the name of Pakistan's largest mosque, located in Islamabad?",
    options: ["Badshahi Mosque", "Faisal Mosque", "Lal Masjid", "Data Darbar"],
    correctAnswer: "Faisal Mosque",
  },
  {
    question: "Who is the current Prime Minister of Pakistan as of 2021?",
    options: [
      "Imran Khan",
      "Nawaz Sharif",
      "Asif Ali Zardari",
      "Pervez Musharraf",
    ],
    correctAnswer: "Imran Khan",
  },
];

let indexno = 0;
let rightAns = 0;
let wrongAns = 0;
let userAns = undefined;

let quizDiv = document.getElementById("quizDiv");
let resultDiv = document.getElementById("resultDiv");
let nextButton = document.getElementById("nextBtn");
let title = document.getElementById("title");
let timer = document.getElementById("timer");
let queImage = document.getElementById("queImage");
let winningImage = document.getElementById("winningImage");
let score = document.getElementById("score");
let scoreNo = document.getElementById("scoreNo");
let wrongNo = document.getElementById("wrongNo");
let wrongDiv = document.getElementById("wrongDiv");
let losingImage = document.getElementById("losingImage");
let queCountNo = document.getElementById("queCountNo");
let queNumber = document.getElementById("queNumber");
let scoreMainContainer = document.getElementById("scoreMainContainer");
let retryBtn = document.getElementById("retryBtn");

let displayQuiz = () => {
  quizDiv.innerHTML = null;

  let quesDiv = document.createElement("div");
  quesDiv.className = "questionDiv";
  quesDiv.innerHTML = quizQuestions[indexno].question;
  quizDiv.appendChild(quesDiv);

  quizQuestions[indexno].options.map((data) => {
    let optionInputDiv = document.createElement("div");
    optionInputDiv.className = "optionDiv";
    let inputLable = document.createElement("label");
    inputLable.className = "radioBtnTxt";
    let optionInput = document.createElement("input");
    optionInput.className = "optionRadioBtn";
    optionInput.type = "radio";
    optionInput.name = "radioBtn";
    optionInput.value = data;
    inputLable.innerText = data;

    optionInput.addEventListener("change", function () {
      console.log(this.value);
      userAns = this.value;
      nextButton.disabled = false;
    });

    quizDiv.appendChild(optionInputDiv);
    inputLable.appendChild(optionInput);
    optionInputDiv.appendChild(inputLable);
  });
};

displayQuiz();

let countdown = 0;
let countdownInterval;

function countDownTimer(seconds) {
  countdownInterval = setInterval(function () {
    countdown++;
    timer.innerHTML = countdown;
    
    if (countdown === seconds) {
      indexno++;
      wrongAns++;
      countdown = 0;
      displayQuiz();
    }
    // if (indexno === quizQuestions.length) {
    // winningResult();
    // }
    queCountNo.innerText = indexno + 1
  }, 1000);
}

// countDownTimer(1);

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
  if (userAns === quizQuestions[indexno].correctAnswer) {
    rightAns++;
    console.log("Right", rightAns);
  } else {
    wrongAns++;
    console.log("wrong", wrongAns);
  }

  if (indexno + 1 < quizQuestions.length) {
    indexno++;
    queCountNo.innerHTML = indexno
    countdown = 0;
  } else if (indexno + 1 === quizQuestions.length) {
    resultDiv.style.display = "block";
    score.style.display = "block";
    scoreNo.innerHTML = rightAns;
    wrongDiv.style.display = "block";
    scoreNo.style.display = "block";
    wrongNo.innerHTML = wrongAns;
    wrongNo.style.display = "block";
    scoreMainContainer.style.display = "block";
    
    
    winningResult();
    quizDiv.style.display = "none";
    nextButton.style.display = "none";
    timer.style.display = "none";
    queImage.style.display = "none";
  }
  
  nextButton.disabled = true;
  
  displayQuiz();
}

function winningResult() {
  resultDiv.innerHTML = null;
  let resultShow = document.createElement("div");
  let divresult = document.createElement("h1");
  divresult.innerHTML = rightAns > wrongAns ? "You Win" : "You lose" ;
  if (rightAns > wrongAns ) {
    winningImage.style.display = 'block'
    retryBtn.style.display = 'block'
    retryBtn.addEventListener ('click',function () {
      window.location.reload()
    })
  } else if (rightAns < wrongAns) {
    losingImage.style.display = 'block'
    retryBtn.style.display = 'block'
    retryBtn.addEventListener ('click',function () {
      window.location.reload()
    })
  }

  queNumber.style.display = 'none'
  title.style.textAlign = 'center'
  resultShow.appendChild(divresult);
  resultDiv.appendChild(resultShow);
}


