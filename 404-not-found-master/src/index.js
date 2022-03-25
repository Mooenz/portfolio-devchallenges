const app = document.querySelector('.app');

app.innerHTML = `
  <p class="app__logo">404 not found</p>
  <div class="app__container">
    <img class="app__img" src="./assets/Scarecrow.png" />
    <div class="app__body">
      <h1 class="app__title">I have bad news for you</h1>
      <p class="app__paragraph">
        The page you are looking for might be removed or is temporarily unavailable
      </p>
      <button class="app__button">Back to homepage</button>
    </div>
  </div>
  <p class="app__footer">created by <a href="https://www.mooenz.me/" class="strong">Mooenz</a> - devChallenges.io</p>
`;
