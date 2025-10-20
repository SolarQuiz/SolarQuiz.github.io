function Question() {
  funFactEl.style.display = 'none';
  selectedOption = null;
  nextBtn.disabled = true;
  currentQuestionEl.textContent = currentQuestion + 1;

  const q = questions[currentQuestion];
  questionContainer.textContent = q.question;

  optionsContainer.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
    btn.addEventListener('click', () => selectOption(idx, btn));
    optionsContainer.appendChild(btn);
  });

  startTimer();
}

function selectOption(idx, btn) {
  selectedOption = idx;
  nextBtn.disabled = false;
  Array.from(optionsContainer.children).forEach(button => {
    button.classList.remove('selected');
  });
  btn.classList.add('selected');
}

function nextQuestion() {
  clearInterval(timer);

  if (selectedOption !== null && selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  Array.from(optionsContainer.children).forEach((button, idx) => {
    button.disabled = true;
    if (idx === questions[currentQuestion].answer) {
      button.classList.add('correct');
      if (selectedOption === idx) {
        playAudio(Correct);
      }
    }
    else if (idx === selectedOption) {
      button.classList.add('incorrect');
      playAudio(Incorrect);
    }

    button.classList.remove('selected');
    button.style.cursor = 'default';
  });

  if (!funFactLocked) {
    funFactEl.textContent = questions[currentQuestion].fact;
    funFactEl.style.display = 'block';
  }
  
  nextBtn.disabled = true;

  currentQuestion++;
  setTimeout(() => {
    if (currentQuestion >= questions.length) {
      Results();
    } else {
      Question();
    }
  }, 3000);
}