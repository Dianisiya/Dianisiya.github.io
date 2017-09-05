window.onload = function() {
  var repo = new URL(document.location.href).searchParams.get('repoName');
  var user = new URL(document.location.href).searchParams.get('userName');
  var getRepo = new XMLHttpRequest();
  getRepo.open('GET', `https://api.github.com/repos/${user}/${repo}`, true);
  getRepo.send();
  getRepo.onreadystatechange = function() {
    if (getRepo.readyState !== 4) return;

    var getContributors = new XMLHttpRequest();
    getContributors.open("GET", `https://api.github.com/repos/${user}/${repo}/contributors`, true);
    getContributors.send();
    getContributors.onreadystatechange = function() {
      if (getContributors.readyState !== 4) return;

      var contributors = JSON.parse(getContributors.response).slice(0,3)
        .map(c => ` <div class="contributor" onclick="redirectTo('${c.html_url}')">
                      <img src="${c.avatar_url}">
                      <div class="login">${c.login}</div>
                    </div>`).join('');

      var repository = JSON.parse(getRepo.response);
      document.getElementById("repository").innerHTML =
       `<div class="repo-container">
          <div class="name">
            ${repository.name}
          </div>
          <label for="link">Link : </label>
          <input id="link" class="link" type="text" value="${repository.clone_url}" readonly="readonly">
          <div class="contributors">
            ${contributors}
          </div>
        </div>`
    }
  };
}

function redirectTo(url) {
  window.location.href = url;
}