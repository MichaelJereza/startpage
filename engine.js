var s_engine=[
  "https://www.google.com/search?q=^",
  "https://duckduckgo.com/?q=^",
  "https://www.ecosia.org/search?q=^",
  "https://www.qwant.com/?q=^",
  "https://yandex.com/search/?text=^"
];
window.onload=function(){


  var searches=document.querySelectorAll('.Search_Box');
  var button=document.querySelector('#Search_Button');
  console.log(searches);
  button.addEventListener("click", function(){
    for(var s=0;s<searches.length;s++){
      if(searches[s].value){
        var url=s_engine[s].replace('^', searches[s].value);
        window.location.assign(url);
      }
    }
  })
}
