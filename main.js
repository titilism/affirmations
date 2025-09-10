
  let author = document.getElementById('author');
  let quote = document.getElementById('quote');
  let permission = document.getElementById('permission');
  let container = document.getElementById('container');
  let btn = document.querySelectorAll("button")[0];
  let switchInterval = 33000;

  document.getElementById('olink').addEventListener('click', function () {
    // alert('clicked');
    localStorage.setItem('visited', 'yes');
    permission.style.display = 'block';

  })

  if (localStorage.getItem('visited') == null) {
    console.log('first time');
    permission.style.display = 'flex';
    container.style.display = 'none';
    btn.style.display = 'none';
  } else {
    console.log('regular user');
    permission.style.display = 'none';
    container.style.display = 'block';
  }

  function getQuotes() {
    const p = fetch("https://api.quotable.io/quotes/random?tags=death|love|friendship|motivation|wisdom|success|spiritual");
    p.then(response => response.json())
      .then(data => {
        author.innerHTML = data[0].author;
        quote.innerHTML = data[0].content;
      })
      .catch(err => { console.error('Error', err) });
  }

  fadeSwitch();

  function fade() {
    container.style.opacity = 0;
  }
  function unFade() {
    container.style.opacity = 1;
  }

  function fadeSwitch() {
    fade();
    setTimeout(getQuotes, 2000);
    setTimeout(unFade, 3000);
  }


    setInterval(fadeSwitch, switchInterval);