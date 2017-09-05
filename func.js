window.onload = function() {
  document.getElementById("search").onclick = function(){
    var userName = document.getElementById("userName").value;

    var GetInfo = new XMLHttpRequest();
    GetInfo.open("GET", "https://api.github.com/users/" + userName, true );
    GetInfo.send();
    GetInfo.onreadystatechange = function(){
      if (GetInfo.readyState != 4) return;
        if (GetInfo.status != 200) {
          document.getElementById("userName").value = "";
        } else {
          window.location.href = window.location.href.replace('/index.html', '/repositories/index.html?userName=' + userName)
        }
      
    }
  }
}