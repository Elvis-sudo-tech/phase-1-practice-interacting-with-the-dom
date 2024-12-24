let counter = 0;
let counterInterval;
let isPaused = false;
let likes = 0;
let comments = [];

const counterElement = document.getElementById('counter');
const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const likeButton = document.getElementById('like-button');
const likesElement = document.getElementById('likes');
const pauseButton = document.getElementById('pause-button');
const commentBox = document.getElementById('comment-box');
const submitCommentButton = document.getElementById('submit-comment');
const commentsList = document.getElementById('comments-list');

function startTimer() {
  counterInterval = setInterval(() => {
    if (!isPaused) {
      counter++;
      counterElement.textContent = counter;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(counterInterval);
  isPaused = true;
  disableButtons(true);
  pauseButton.textContent = 'Resume';
}

function resumeTimer() {
  isPaused = false;
  startTimer();
  disableButtons(false);
  pauseButton.textContent = 'Pause';
}

function disableButtons(disabled) {
  plusButton.disabled = disabled;
  minusButton.disabled = disabled;
  likeButton.disabled = disabled;
}

plusButton.addEventListener('click', () => {
  counter++;
  counterElement.textContent = counter;
});

minusButton.addEventListener('click', () => {
  counter--;
  counterElement.textContent = counter;
});

likeButton.addEventListener('click', () => {
  likes++;
  likesElement.textContent = `Likes: ${likes}`;
});

pauseButton.addEventListener('click', () => {
  if (isPaused) {
    resumeTimer();
  } else {
    pauseTimer();
  }
});

submitCommentButton.addEventListener('click', () => {
  const commentText = commentBox.value.trim();
  if (commentText) {
    comments.push(commentText);
    const commentElement = document.createElement('div');
    commentElement.textContent = commentText;
    commentsList.appendChild(commentElement);
    commentBox.value = ''; // clear the comment box
  }
});

// Start the timer as soon as the page loads
window.addEventListener('load', startTimer);
