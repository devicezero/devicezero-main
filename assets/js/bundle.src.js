var setCookieconsent = function() {
  localStorage.setItem('cookieconsent', true);
  document.getElementById('cookieconsent').classList.add('hidden');
};

var toggleHidden = function(id) {
  if (document.getElementById(id).classList.contains('hidden')) {
    document.getElementById(id).classList.remove('hidden');
  } else {
    document.getElementById(id).classList.add('hidden');
  }
};

var closeMenu = function() {
  if (document.getElementById('close').style.display) {
    document.getElementById('logo').style.display = 'block';
    document.getElementById('open').style.display = 'inline';
    document.getElementById('close').style.display = 'none';
    document.getElementById('nav_links').style.display = 'none';
  }
};

document.getElementById("open").addEventListener("click", function(){
  document.getElementById('logo').style.display = 'none';
  document.getElementById('open').style.display = 'none';
  document.getElementById('close').style.display = 'inline';
  document.getElementById('nav_links').style.display = 'block';
});

document.getElementById("close").addEventListener("click", function(){
  closeMenu();
});

if (!localStorage.getItem('cookieconsent')) {
  document.getElementById('nav_links').style.display = 'none';
  document.getElementById('cookieconsent').classList.remove('hidden');
};
