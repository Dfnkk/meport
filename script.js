const buttonForm = document.getElementById('submit-btn');

buttonForm.onclick = () => {
  const nameVal = document.getElementById('name').value;
  const subVal = document.getElementById('sub').value;
  const emailVal = document.getElementById('email').value;
  const messageVal = document.getElementById('message').value;

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    name: nameVal,
    subject: subVal,
    email: emailVal,
    message: messageVal,
  });

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  console.log(raw);

  fetch(
    'https://kzz6fixwie.execute-api.us-west-2.amazonaws.com/prod/resource',
    requestOptions
  )
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
};

let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    console.log('Option clicked:', mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'default.css';
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = 'blue.css';
  }

  if (mode == 'green') {
    document.getElementById('theme-style').href = 'green.css';
  }

  if (mode == 'purple') {
    document.getElementById('theme-style').href = 'purple.css';
  }

  if (mode == 'orange') {
    document.getElementById('theme-style').href = 'orange.css';
  }

  localStorage.setItem('theme', mode);
}
