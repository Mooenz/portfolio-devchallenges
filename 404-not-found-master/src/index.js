const app = document.querySelector('.app');

app.innerHTML = `
  <p class="logo">404 not found</p>
  <div class="container">
    <img class="img" src="./assets/img/Scarecrow.png" />
    <div class="body">
      <h1 class="title">I have bad news for you</h1>
      <p class="paragraph">
        The page you are looking for might be removed or is temporarily unavailable
      </p>
      <button class="button">Back to homepage</button>
    </div>
  </div>
  <p class="footer">created by <a href="https://www.mooenz.me/" class="strong">Mooenz</a> - devChallenges.io</p>
`;
