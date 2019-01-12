$(window).resize(function(){ 
  var window_width = window.innerWidth;
  var popularMain = document.getElementById("popularMain"); 
  var aboutMain = document.getElementById("aboutMain");
  var contactMain = document.getElementById("contactMain");
  var popularSec = document.getElementById("popularSec"); 
  var aboutSec = document.getElementById("aboutSec");
  var contactSec = document.getElementById("contactSec");
  var more = document.getElementById("more");

  if(window_width < 800)
  {
  	if(!contactMain.classList.contains("d-none"))
  	{
  		contactMain.classList.add("d-none")
  	}
  	if(more.classList.contains("d-none"))
  	{
  		more.classList.remove("d-none")
  	}
  	if(contactSec.classList.contains("d-none"))
  	{
  		contactSec.classList.remove("d-none")
  	}
  }
  if(window_width < 740)
  {
  	if(!aboutMain.classList.contains("d-none"))
  	{
  		aboutMain.classList.add("d-none")
  	}
  	if(aboutSec.classList.contains("d-none"))
  	{
  		aboutSec.classList.remove("d-none")
  	}
  }
  if(window_width < 680)
  {
  	if(!popularMain.classList.contains("d-none"))
  	{
  		popularMain.classList.add("d-none")
  	}
  	if(popularSec.classList.contains("d-none"))
  	{
  		popularSec.classList.remove("d-none")
  	}
  }
  if(window_width >= 800)
  {
  	if(contactMain.classList.contains("d-none"))
  	{
  		contactMain.classList.remove("d-none")
  	}
  	if(!more.classList.contains("d-none"))
  	{
  		more.classList.add("d-none")
  	}
  	if(!contactSec.classList.contains("d-none"))
  	{
  		contactSec.classList.add("d-none")
  	}
  }
  if(window_width >= 740)
  {
  	if(aboutMain.classList.contains("d-none"))
  	{
  		aboutMain.classList.remove("d-none")
  	}
  	if(!aboutSec.classList.contains("d-none"))
  	{
  		aboutSec.classList.add("d-none")
  	}
  }
  if(window_width >= 680)
  {
  	if(popularMain.classList.contains("d-none"))
  	{
  		popularMain.classList.remove("d-none")
  	}
  	if(!popularSec.classList.contains("d-none"))
  	{
  		popularSec.classList.add("d-none")
  	}
  }
});

$(document).ready(function(){
 var window_width = window.innerWidth;
  var popularMain = document.getElementById("popularMain"); 
  var aboutMain = document.getElementById("aboutMain");
  var contactMain = document.getElementById("contactMain");
  var popularSec = document.getElementById("popularSec"); 
  var aboutSec = document.getElementById("aboutSec");
  var contactSec = document.getElementById("contactSec");
  var more = document.getElementById("more");

  if(window_width < 800)
  {
  	if(!contactMain.classList.contains("d-none"))
  	{
  		contactMain.classList.add("d-none")
  	}
  	if(more.classList.contains("d-none"))
  	{
  		more.classList.remove("d-none")
  	}
  	if(contactSec.classList.contains("d-none"))
  	{
  		contactSec.classList.remove("d-none")
  	}
  }
  if(window_width < 740)
  {
  	if(!aboutMain.classList.contains("d-none"))
  	{
  		aboutMain.classList.add("d-none")
  	}
  	if(aboutSec.classList.contains("d-none"))
  	{
  		aboutSec.classList.remove("d-none")
  	}
  }
  if(window_width < 680)
  {
  	if(!popularMain.classList.contains("d-none"))
  	{
  		popularMain.classList.add("d-none")
  	}
  	if(popularSec.classList.contains("d-none"))
  	{
  		popularSec.classList.remove("d-none")
  	}
  }
  if(window_width >= 800)
  {
  	if(contactMain.classList.contains("d-none"))
  	{
  		contactMain.classList.remove("d-none")
  	}
  	if(!more.classList.contains("d-none"))
  	{
  		more.classList.add("d-none")
  	}
  	if(!contactSec.classList.contains("d-none"))
  	{
  		contactSec.classList.add("d-none")
  	}
  }
  if(window_width >= 740)
  {
  	if(aboutMain.classList.contains("d-none"))
  	{
  		aboutMain.classList.remove("d-none")
  	}
  	if(!aboutSec.classList.contains("d-none"))
  	{
  		aboutSec.classList.add("d-none")
  	}
  }
  if(window_width >= 680)
  {
  	if(popularMain.classList.contains("d-none"))
  	{
  		popularMain.classList.remove("d-none")
  	}
  	if(!popularSec.classList.contains("d-none"))
  	{
  		popularSec.classList.add("d-none")
  	}
  }
});