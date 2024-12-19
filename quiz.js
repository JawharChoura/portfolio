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
  const questions = form.getElementsByClassName('quiz-question');
  let correctAnswers = 0;

  resultDiv.innerHTML = ""; // Réinitialisation des résultats

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const inputs = question.getElementsByTagName('input');
    const questionId = `q${i + 1}`;
    const correctAnswer = answers[questionId];
    let selectedOption = null;

    // Trouver l'option sélectionnée
    for (let input of inputs) {
      if (input.type === "radio" && input.checked) {
        selectedOption = input.value;
        break;
      }
    }

    // Déterminer et afficher le résultat pour la question
    if (selectedOption) {
      if (selectedOption === correctAnswer) {
        correctAnswers++;
        resultDiv.innerHTML += `<p class="correct">Question ${i + 1}: Correct</p>`;
      } else {
        resultDiv.innerHTML += `<p class="incorrect">Question ${i + 1}: Incorrect - <span class="correct-answer">La bonne réponse est "${correctAnswer}"</span></p>`;
      }
    } else {
      resultDiv.innerHTML += `<p class="incorrect">Question ${i + 1}: Pas de réponse sélectionnée - <span class="correct-answer">La bonne réponse est "${correctAnswer}"</span></p>`;
    }
  }

  resultDiv.innerHTML += `<p><strong>Score : ${correctAnswers} sur ${questions.length}</strong></p>`;
}
