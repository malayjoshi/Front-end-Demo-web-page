function changeStyle(ind)
{
	var ele=document.getElementsByClassName("fillerChange");
	ele[ind].innerHTML=`
		<svg height="80px" width="100px" style="float: left;">
  		<circle cx="53" cy="40" r="36"
  		  fill="#3ebcb3" /></svg>

	`;
}


function revertStyle(ind)
{
	var ele=document.getElementsByClassName("fillerChange");
	ele[ind].innerHTML=`
	<img src="images/filler.jpeg" height="80px" width="80px" style="float: left;">		
	`;
}



/* <img src="images/filler.jpeg" height="80px" width="80px" style="float: left;">
  			<div style="float: left;padding-left:20px;"> 

  			*/