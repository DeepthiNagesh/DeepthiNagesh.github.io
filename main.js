//document.getElementsByTagName("body")[0].style.width = window.innerWidth;
document.getElementById("headline").style.height = window.innerHeight;
var i=0;
if(window.innerHeight>window.innerWidth)
{
	document.getElementById('name').style.left='10%';
	document.getElementById('description').style.top= '10%';
	var projectelements=document.getElementsByClassName('project-element');
	var i=0;
	for(i=0;i<projectelements.length;i++)
	{
		projectelements[i].style.width='90%';
		projectelements[i].style.height=(projectelements[i].offsetWidth)*0.55;
	}
}//document.getElementById("projectsContainer").style.height = window.innerHeight;
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