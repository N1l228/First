function switchLanguage(language) {
  if (language === 'en') {
    document.getElementById('title').textContent = 'Welcome to my website!';
    document.getElementById('content').textContent = 'This is the English version of my website.';
  } else if (language === 'ru') {
    document.getElementById('title').textContent = 'Добро пожаловать на мой сайт!';
    document.getElementById('content').textContent = 'Это русская версия моего сайта.';
  }
}