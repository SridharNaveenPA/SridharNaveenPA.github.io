
document.addEventListener("click",dark);

function dark(){
body.style.setProperty("background-color","#1e1548");
text.style.setProperty("color","EFECEC");
text4.style.setProperty("color","EFECEC");
text2.style.setProperty("color","EFECEC");
text3.style.setProperty("color","EFECEC");
g1.style.setProperty("color","EFECEC");
g2.style.setProperty("color","EFECEC");
g7.style.setProperty("color","EFECEC");
g20.style.setProperty("color","EFECEC");
list.style.setProperty("color","EFECEC");
text6.style.setProperty("color","EFECEC");
l1.style.setProperty("color","EFECEC");
mail.style.setProperty("color","EFECEC");
l2.style.setProperty("color","EFECEC");
l3.style.setProperty("color","EFECEC");
a6.style.setProperty("color","EFECEC");

link.style.setProperty("color","EFECEC");
}

function append(){
	const node = document.createElement("li");
	const textnode = document.createTextNode("Mic: Boya");
	node.appendChild(textnode);
	document.getElementById("list").appendChild(node);
}


const para = document.createElement("p");
para.innerText = "This is a paragraph.";

// Append to body:
document.body.appendChild(para);