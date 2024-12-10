function submitQuiz() {
  const answers = {
    q1: "img",
    q2: "font-weight",
    q3: "appendChild",
    q4: "onclick",
    q5: "var a = 5;",
    q6: "padding",
    q7: "locale"
  };

  const form = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');
  const questions = form.querySelectorAll('.quiz-question');
  let correctAnswers = 0;
  const totalQuestions = questions.length;

  resultDiv.innerHTML = "";

  questions.forEach((question, index) => {
    const selectedOption = question.querySelector('input[type="radio"]:checked');
    const questionId = `q${index + 1}`;
    const correctAnswer = answers[questionId];

    if (selectedOption) {
      if (selectedOption.value === correctAnswer) {
        correctAnswers++;
        resultDiv.innerHTML += `<p class="correct">Question ${index + 1}: Correct</p>`;
      } else {
        resultDiv.innerHTML += `<p class="incorrect">Question ${index + 1}: Incorrect - <span class="correct-answer">La bonne réponse est "${correctAnswer}"</span></p>`;
      }
    } else {
      resultDiv.innerHTML += `<p class="incorrect">Question ${index + 1}: Pas de réponse sélectionnée - <span class="correct-answer">La bonne réponse est "${correctAnswer}"</span></p>`;
    }
  });

  resultDiv.innerHTML += `<p><strong>Score : ${correctAnswers} sur ${totalQuestions}</strong></p>`;
}
