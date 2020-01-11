//document.getElementsByTagName("body")[0].style.width = window.innerWidth;
document.getElementById("headline").style.height = window.innerHeight;
//document.getElementById("projectsContainer").style.height = window.innerHeight;
if(window.innerHeight>window.innerWidth)
{
	var ele=document.getElementsByClassName('project-element');
	ele.forEach(changeHeight);
}
setTimeout(transition, 70);
var i = 0;
var txt = 'I am a designer, developer and artist passionate about building beautiful, usable and accessible experiences and interfaces.'; 
var speed = 65; 
typeWriter();
function transition()
{
	/*document.getElementById('description').style.transition='all 1s ease';*/
	document.getElementById('name').style.transition='all 0.8s ease';
	document.getElementById('name').style.top='10%';
	document.getElementById('name').style.opacity=1;
	/*document.getElementById('description').style.opacity=1;*/
}



function typeWriter() {
  if (i < txt.length) {
    document.getElementById("description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function changeHeight(item)
{
  item.style.height=item.style.width;
}