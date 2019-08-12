var s_engine=[
  "Google",
  "DuckDuckGo",
  "Ecosia",
  "Quant",
  "Yandex",
  "Startpage"
];
var searches=document.querySelectorAll('.Search_Box');

searches.foreach(function(){
  for(var i=0;i<s_engine.size;i++){
    if(s_engine[i]===this.placeholder){
      alert(s_engine[i]);
    }
  }
})
