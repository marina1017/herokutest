$(function(){
  $('#test').click(function () {
    $(this).text("クリックされました");
  });
});

$(function(){
  $("#head").load("tab1.html");
});

$(function() {
  $("#MyNavbar").load("menu.html", generateNavbar);
});

/* Definition of Navbar content */
function NavbarContent(type, anchor, href) {
  this.Type = type;
  this.Anchor = anchor;
  this.Href = href;
}
 
/* Dynamic generator for Navigation Bar Content */
function generateNavbar(eventObject) {
  var content = new Array();
  var ulElem = document.getElementById('NavbarContent');
  var activeNum = $('#Navbar').data("active");
  
  content[0] = new NavbarContent(null, 'Content 1', 'index.html');
  content[1] = new NavbarContent(null, 'Content 2', 'index2.html');
  content[2] = new NavbarContent(null, 'Content 3', 'index3.html');
  
  var i = 0;
  for(i in content) {
    if(i == activeNum) {
      content[i] = new NavbarContent("active", content[i].Anchor, '#');
    }
    
    var liElem = document.createElement('li');
    var aElem = document.createElement('a');
    
    if(content[i].Type != null) {
      liElem.className = content[i].Type;
    }
    aElem.textContent = content[i].Anchor;
    aElem.href = content[i].Href;
    
    liElem.appendChild(aElem);
    ulElem.appendChild(liElem);
  }
}