Array.prototype.unique = function()
{
  var n = {};
  var r=[];
	for(var i = 0; i < this.length; i++) 
	{
		if (!n[this[i]]) 
		{
			n[this[i]] = true; 
			r.push(this[i]); 
		}
	}
	return r;
}

window.onload = function(){
  let url = new URL(window.location.href);
  let userName = url.searchParams.get("userName");
  let list = [];
  let source = [];
  let page = 1;
  
  newRepos();

  document.getElementById('getMore').onclick = function() {
    newRepos();
  };

  document.getElementById('filter').onclick = function() {
    let filters = [];
    
    let hasOpenIssues = document.getElementById("hasOI").checked;
    filters.push(r => hasOpenIssues ? r.open_issues_count !== 0 : r.open_issues_count === 0);

    let hasTopics = document.getElementById("hasTopics").checked;
    filters.push(r => hasTopics ? r.topics.length !== 0 : r.topics.length === 0);

    let stars = document.getElementById("stars").value;
    filters.push(r => r.stargazers_count >= stars);

    var d = document.getElementById("date").value;
    console.log(d)
    if (d !== "") {
      let date = new Date(d);
      filters.push(r => new Date(r.updated_at) >= date);
    }

    let type = document.getElementById("type").value;
    switch(type){
      case "forks":
        filters.push(r => r.fork);
        break;
      case "sources":
        filters.push(r => !r.fork);
        break;
    }

    let language = document.getElementById("language").value;
    filters.push(r => r.language === language || language === 'all');

    let filterRes = source;

    filters.forEach(elem => {
      filterRes = filterRes.filter(elem);
    });

    list = filterRes;

    showRepos(filterRes);
  };

  document.getElementById('sort').onclick = function() {
    var radios = document.getElementsByName('sort-type');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var sortType = radios[i].value;
            break;
        }
    }

    switch(sortType){
      case "name":
        var map = r => r.name;
        break;
      case "stars":
        var map = r => r.stargazers_count;
        break;
      case "open-issues":
        var map = r => r.open_issues_count;
        break;
      case "update-date": 
        var map = r => new Date(r.updated_at);
        break;
    }

    let direction = document.getElementById("sort-direction").value === "ascending" ? -1 : 1;
    list = list.sort((a, b) => {
      if(map(a) > map(b)){
        return direction;
      }
      if(map(a) < map(b)){
        return -1*direction;
      }
      return 0;
    });
    
    showRepos(list);
  };

  function newRepos(){
    let getRepo = new XMLHttpRequest();
    getRepo.open("GET", `https://api.github.com/users/${userName}/repos?page=${page}`, true );
    getRepo.setRequestHeader('Accept','application/vnd.github.mercy-preview+json');
    getRepo.send();
    getRepo.onreadystatechange = function(){
      if (getRepo.readyState != 4) return;
      if (getRepo.status != 200) {
        document.getElementById("userName").value = "";
      } else {
        page++;
        JSON.parse(getRepo.response).forEach(function(element) {
          source.push(element);
        });
        document.getElementById("language").innerHTML = source.map(l => l.language === null ? "all" : l.language).unique().map(l => `<option value="${l}">${l}</option>`);
        showRepos(source);
      }
    }
  }
}

function showRepos(list) {
  document.getElementById("repositories")
    .innerHTML = list.map(r => `<div class="repo" onclick="redirectToRepo('${r.name}')">
                                  <div class="name-container">
                                    <div class="name">${r.name}</div>
                                    <div class="fork">${r.fork ? "forked" : ""}</div>
                                  </div>
                                  <div class="description">
                                    ${r.description === null ? '' : r.description}
                                  </div>
                                  <div class="info">
                                    <div class="language">
                                      ${r.language === null ? '' : r.language}
                                    </div>
                                    <div class="stars">
                                      ${'\u2605'} ${r.stargazers_count}
                                    </div>
                                    <div class="updated">
                                      ${new Date(r.updated_at).toDateString()}
                                    </div>
                                  </div>
                                </div>`).join('');
}

function redirectToRepo(repo) {
  var url = new URL(window.location.href.replace('repositories', 'repository'));
  url.searchParams.append('repoName', repo);
  window.location.href = url.href;
}