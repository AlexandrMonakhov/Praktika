function show()
{
	var open = document.querySelector("#cab");
	open.style.display = "block";
}
function hide()
{
	var open = document.querySelector("#cab");
	open.style.display = "none";
}

function show1()
{
	var open1 = document.querySelector(".write_us");
	open1.style.display = "block";
}
function hide1()
{
	var open1 = document.querySelector(".write_us");
	open1.style.display = "none";
}

function show2()
{
	var open2 = document.querySelector(".products_info");
	open2.style.display = "flex";
}
function hide2()
{
	var open2 = document.querySelector(".products_info");
	open2.style.display = "none";
}
function show3()
{
	var open2 = document.querySelector(".products_info1");
	open2.style.display = "flex";
}
function hide3()
{
	var open2 = document.querySelector(".products_info1");
	open2.style.display = "none";
}
function show4()
{
	var open2 = document.querySelector(".products_info2");
	open2.style.display = "flex";
}
function hide4()
{
	var open2 = document.querySelector(".products_info2");
	open2.style.display = "none";
}

function show5()
{
	var open2 = document.querySelector(".products_info3");
	open2.style.display = "flex";
}
function hide5()
{
	var open2 = document.querySelector(".products_info3");
	open2.style.display = "none";
}

function sum()
{
k=0;
for(i=0;i<6;i++)
{if(document.getElementById('tovar'+i).checked) k+=parseInt(document.getElementById('tovar'+i).value);}
document.form1.res.value=k;
}


