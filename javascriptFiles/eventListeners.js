function setupEventListeners() {
  playBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    quizContainer.style.display = 'flex';
    currentQuestion = 0;
    score = 0;
    startQuiz(questionsArray);
    playAudio(Tap);
  });
  
  aboutBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    aboutSection.style.display = 'block';
    playAudio(Tap);
  });
  
  backFromAbout.addEventListener('click', () => {
    aboutSection.style.display = 'none';
    Menu();
    playAudio(Tap);
  });

  questBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    aboutSection.style.display = 'none';
    questSection.style.display = 'block';
    playAudio(Tap);
  }); 
  
  nextBtn.addEventListener('click', nextQuestion);
  
  restartBtn.addEventListener('click', () => {
    resultsContainer.style.display = 'none';
    Menu();
    playAudio(Tap);
  });

  quest15.addEventListener('click', () => {
    startQuiz(questions15);
    playAudio(Tap);
  });

  quest67.addEventListener('click', () => {
    startQuiz(questions67);
    playAudio(Tap);
  });

  quest89.addEventListener('click', () => {
    startQuiz(questions89);
    playAudio(Tap);
  });

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      timeoutHandler();
      playAudio(Incorrect);
    });
  }

  if (giveUpBtn) {
    giveUpBtn.addEventListener('mousedown', () => {
      giveUpBtn.classList.add('hovering');
      giveUpTimer = setTimeout(() => {
        Menu();
        playAudio(Incorrect);
      }, 5000);
    });

    giveUpBtn.addEventListener('mouseup', () => {
      giveUpBtn.classList.remove('hovering');
      clearTimeout(giveUpTimer);
      playAudio(Tap);
    });

    giveUpBtn.addEventListener('mouseleave', () => {
      giveUpBtn.classList.remove('hovering');
      clearTimeout(giveUpTimer);
      playAudio(Tap);
    });
  }

  function startQuiz(selectedQuestions) {
    questions = selectedQuestions;
    currentQuestion = 0;
    score = 0;
    
    Question();

    totalQuestionsResults.textContent = questions.length;
    totalQuestionsEl.textContent = questions.length;

    menu.style.display = 'none';
    questSection.style.display = 'none';
    quizContainer.style.display = 'flex';
  }
}