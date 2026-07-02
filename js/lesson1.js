function submitQuiz() {
  const form = document.getElementById("quizForm");
  let score = 0;
  const totalQuestions = 10;
  for (let i = 1; i <= totalQuestions; i++) {
    const questionName = `q${i}`;
    const selectedOption = form.querySelector(
      `input[name="${questionName}"]:checked`
    );
    if (selectedOption) {
      score += parseInt(selectedOption.value);
    }
  }
  alert(`Skor Anda: ${score} dari ${totalQuestions}`);
}
