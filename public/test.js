$(function(){
  $('#test').click(function () {
    $(this).text("クリックされました");
  });
});

$(function(){
  $("#head").load("tab1.html");
});
//ロードが発生した際に、実行したい処理を関数(generateNavbar)として指定します。
$(function() {
  $("#MyNavbar").load("menu.html", generateNavbar);
});

/* Navbarコンテンツの定義 */
function NavbarContent(type, anchor, href) {
  this.Type = type;
  this.Anchor = anchor;
  this.Href = href;
}
 
/* ナビゲーションバーのコンテンツ用のダイナミックジェネレータ */
function generateNavbar(eventObject) {
  /* 配列作っているコンストラクタというらしい */
  var content = new Array();
  /* [id="NavbarContent"]を取得 (<p id="NavbarContent">目的の要素</p>) */
  var ulElem = document.getElementById('NavbarContent');
    //<div class="row" id="MyNavbar" data-active="0">で取得している
  var activeNum = $('#Navbar').data("active");
  
  content[0] = new NavbarContent(null, 'あそびかた', 'index.html');
  content[1] = new NavbarContent(null, '設定', 'index2.html');
  content[2] = new NavbarContent(null, '特技', 'index3.html');
  
  var i = 0;
  for(i in content) {
    if(i == activeNum) {
      content[i] = new NavbarContent("active", content[i].Anchor, '#');
    }
//    新しく生成した要素のElementオブジェクトを返す。
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