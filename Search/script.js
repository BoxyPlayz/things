    const searchInput = document.getElementById('searchInput');
    const searchMenu = document.getElementById('searchMenu');
    const useHTTP = document.getElementById('usehttp');
    const shortcuts = document.getElementById('shortcuts');

    var ShortcutsList = [];


    searchInput.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      searchMenu.style.display = 'flex';
      searchMenu.style.left = event.pageX + 'px';
      searchMenu.style.top = event.pageY + 'px';
    });

    function searchGoogle() {
      const query = searchInput.value;
      window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
    }

    function searchScholar() {
       const query = searchInput.value;
       window.open('https://scholar.google.com/scholar?q=' + encodeURIComponent(query) + '&bntG=', '_blank');
    }

    function searchBing() {
      const query = searchInput.value;
      window.open('https://www.bing.com/search?q=' + encodeURIComponent(query), '_blank');
    }

    function searchYahoo() {
      const query = searchInput.value;
      window.open('https://search.yahoo.com/search?p=' + encodeURIComponent(query), '_blank');
    }

    function searchNASA() {
      const query = searchInput.value;
      window.open('https://nasa.gov/?search=' + encodeURIComponent(query), '_blank');
    }

    function searchWiki() {
      const query = searchInput.value;
      window.open('https://en.wikipedia.org/w/index.php?search=' + encodeURIComponent(query), '_blank');
    }

    function searchSpace() {
      const query = searchInput.value;
      window.open('https://www.space.com/search?searchTerm=' + encodeURIComponent(query), '_blank');
    }

    function goToURL() {
      const query = searchInput.value;
      if (useHTTP.checked) {
        window.open("http://" + query, '_blank');
      } else {
        window.open("https://" + query, '_blank');
      }
    }

    searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const query = searchInput.value;
    window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
  }});

function newShortcut() {
  let name = prompt("Shortcut Name")
  let url = prompt("Shortcut URL")
  const newShortcutButton = document.createElement('button');
  const a = document.createElement('a');
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  newShortcutButton.textContent = name;
  a.appendChild(newShortcutButton);
  shortcuts.appendChild(a);
  //updateShortcuts()
}

/*if (localStorage.getItem("shortcuts") == null) {
localStorage.setItem("shortcuts", {});
}
function updateShortcuts() {
  var numberOfChildren = shortcuts.getElementsByTagName('*').length;
  ShortcutsList = [];
  for (var i = 0; i < numberOfChildren; i++) {
    const thing = document.getElementById("short"+i);
  };
print(ShortcutsList)
}*/