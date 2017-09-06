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

      var langs = Object.entries(getResponse("GET", `https://api.github.com/repos/${user}/${repo}/languages`))
                      .map(l => ` <div class="language">
                                    ${l[0]} ${Math.round(l[1]/1024)}KB
                                  </div>`).join('');

      var contributors = JSON.parse(getContributors.response).slice(0,3)
        .map(c => ` <div class="contributor" onclick="redirectTo('${c.html_url}')">
                      <img src="${c.avatar_url}">
                      <div class="login">${c.login}</div>
                    </div>`).join('');

      var pr = getResponse("GET", `https://api.github.com/repos/${user}/${repo}/pulls`)
                    .map(p => { return {pull: p, comments: getResponse("GET", p.comments_url).length}})
                    .sort(p => p.comments)
                    .slice(0, 5)
                    .map(p => ` <div class="pull" onclick="redirectTo('${p.pull.html_url}')">
                                  ${p.pull.title}
                                </div>`);

      var repository = JSON.parse(getRepo.response);
      document.getElementById("repository").innerHTML =
       `<div class="repo-container">
          <div class="name">
            ${repository.name}
          </div>
          <label for="link">Link : </label>
          <input id="link" class="link" type="text" value="${repository.clone_url}" readonly="readonly">
          <div class="languages">
            ${langs}
          </div>
          <p>Top 3 contributors</p>
          <div class="contributors">
            ${contributors}
          </div>
          <p>Top 5 most commented pull requests</p>
          <div class="pulls">
            ${pr}
          </div>
        </div>`
    }
  };
}

function redirectTo(url) {
  window.location.href = url;
}

function getResponse(method, url) {
  const request = new XMLHttpRequest();
  request.open(method, url, false);
  request.send();
  return JSON.parse(request.response);
}