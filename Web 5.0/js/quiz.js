document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result");
  const scoreDisplay = document.getElementById("score");
  const retryButton = document.getElementById("retry-btn");
  const submitButton = document.getElementById("submit-btn");

  const questions = [
    {
      question: "What is Web 5.0?",
      options: [
        "The Semantic Web",
        "The Decentralized Web",
        "The Cognitive Web",
        "The Ubiquitous Web",
      ],
      answer: 1,
    },
    {
      question: "Which technology is most associated with Web 5.0?",
      options: ["Blockchain", "HTML5", "CSS3", "AJAX"],
      answer: 0,
    },
    {
      question: "What does Web 5.0 primarily focus on?",
      options: [
        "Enhanced Connectivity",
        "Artificial Intelligence",
        "Decentralization",
        "Improved User Interface",
      ],
      answer: 2,
    },
    {
      question: "Which concept is a key feature of Web 5.0?",
      options: [
        "Smart Contracts",
        "Hyperlinks",
        "Streaming Media",
        "Search Engines",
      ],
      answer: 0,
    },
    {
      question: "How does Web 5.0 improve user privacy?",
      options: [
        "By using more advertisements",
        "Through centralized data storage",
        "By implementing decentralized systems",
        "By limiting user access",
      ],
      answer: 2,
    },
    {
      question: "Which industry will benefit the most from Web 5.0?",
      options: ["Retail", "Manufacturing", "Education", "Healthcare"],
      answer: 2,
    },
    {
      question: "What is one of the main goals of Web 5.0?",
      options: [
        "Increased data breaches",
        "Greater user control",
        "More data collection",
        "Reduced internet speed",
      ],
      answer: 1,
    },
    {
      question: "Which of the following is NOT a feature of Web 5.0?",
      options: [
        "Smart Cities",
        "Blockchain Integration",
        "Enhanced Streaming Quality",
        "Traditional Data Storage",
      ],
      answer: 3,
    },
    {
      question: "What role does AI play in Web 5.0?",
      options: [
        "Data Analysis",
        "User Authentication",
        "Content Creation",
        "All of the above",
      ],
      answer: 3,
    },
    {
      question:
        "What is the main advantage of decentralized systems in Web 5.0?",
      options: [
        "Increased vulnerability",
        "Higher efficiency",
        "Improved transparency",
        "Decreased data security",
      ],
      answer: 2,
    },
  ];

  function loadQuiz() {
    const quizHTML = questions
      .map((q, index) => {
        return `
                <div class="question">
                    <h3>${index + 1}. ${q.question}</h3>
                    <ul class="options">
                        ${q.options
                          .map(
                            (option, i) => `
                            <li>
                                <input type="radio" name="q${index}" value="${i}" id="q${index}a${i}">
                                <label for="q${index}a${i}">${option}</label>
                            </li>
                        `
                          )
                          .join("")}
                    </ul>
                </div>
            `;
      })
      .join("");
    quizContainer.innerHTML = quizHTML;
  }

  function calculateScore() {
    let score = 0;
    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(
        `input[name="q${index}"]:checked`
      );
      if (selectedOption && parseInt(selectedOption.value) === q.answer) {
        score++;
      }
    });
    return score;
  }

  function showResult() {
    const score = calculateScore();
    scoreDisplay.textContent = score;
    resultContainer.style.display = "block";
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
  }

  function retryQuiz() {
    resultContainer.style.display = "none";
    quizContainer.style.display = "block";
    submitButton.style.display = "inline-block";
    document
      .querySelectorAll('input[type="radio"]:checked')
      .forEach((input) => (input.checked = false));
  }

  submitButton.addEventListener("click", showResult);
  retryButton.addEventListener("click", retryQuiz);

  loadQuiz();
});
