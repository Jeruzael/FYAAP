window.onscroll = function(){scroll1()};

function scroll1(){

/*var a = event.keyCode;
	if(a == 39){
		alert("Working");
	}else{
		alert(" not Working");
	}*/

	if ( document.documentElement.scrollTop > 50) {
    	document.getElementById("cover1").style.marginTop = "-450px";
    	document.getElementById("cover1").style.transition = "1s";
    	document.getElementById("t1").style.fontSize = "30px";
    	document.getElementById("t1").style.bottom = "10px";
    	document.getElementById("t1").style.textShadow = "2px 2px 4px gray";
    	document.getElementById("navBar1").style.marginTop = "460px";
    	document.getElementById("navBar1").style.marginLeft = "1040px";
    	document.getElementById("img01").style.opacity = ".0";
    	document.getElementById("img01").style.marginTop = "-200px";
    	document.getElementById("cover1").style.boxShadow = "1px 3px 7px rgba(170,170,170,.7)";
    	document.getElementById("cover1").style.backgroundColor = "rgba(250,250,250,1)";
    	document.getElementById("content").style.display = "block";
      document.getElementById("nav2").style.marginLeft = "-200px";
      document.getElementById("content").style.marginLeft = "75px";


  }else {
   		
   		
   		document.getElementById("cover1").style.transition = "1s";
   	
   		
    	document.getElementById("navBar1").style.marginLeft = "1040px";
    	document.getElementById("img01").style.opacity = ".9";
    	document.getElementById("img01").style.marginTop = "0px";
    	
    	
      
  }

	
}

function menuz(){

      document.getElementById("nav2").style.marginLeft = "10px";
      document.getElementById("content").style.marginLeft = "270px";
      document.getElementById("showB01").style.zIndex = "-1";  
      document.getElementById("hideB01").style.zIndex = "1";
}

function menux(){

      document.getElementById("nav2").style.marginLeft = "-200px";
      document.getElementById("content").style.marginLeft = "75px";
      document.getElementById("showB01").style.zIndex = "1";  
      document.getElementById("hideB01").style.zIndex = "-1";
}