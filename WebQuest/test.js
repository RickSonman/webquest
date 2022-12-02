window.onload=function()
{
	let result={};
	let step=0;
	function ShowQuestions(QuestionNumber)
	{
		document.querySelector(".question").innerHTML=questions[step]['q'];
	
	
		let answer='';
		for(let key in questions[step]['a']){
			answer=answer+`<br><li class="ans" style="font-size:18pt; 	font-family:Book Antiqua, sans-serif;" data-atribut="${key}">${questions[step]['a'][key]}</li>`;
			
		}
	document.querySelector(".answer").innerHTML = answer;
	}
	document.onclick= function(event)
	{
		event.stopPropagation();
		if(event.target.classList.contains('ans') && step<questions.length)
		{
			if(result[event.target.dataset.atribut]!=undefined && event.target.dataset.atribut=='z' )
			{
				result[event.target.dataset.atribut]++;
			}
        else {
			result[event.target.dataset.atribut]=1;
			 }
		step++;
			if(step==questions.length)
		{
			ShowResult();
		}
		else {ShowQuestions(step)};
        }

		console.log(result);
		
	}
	
	
    function ShowResult()
	{
		let key=Object.keys(result).reduce(function(a,b){return result[a]>result[b] ? a : b; });
	let x =	result[key];
	
	if (result[key]>8) {key=answers['r'];}
	else if(result[key]>6 && result[key]<=8) {key=answers['e'];}
	else if(result[key]>4 && result[key]<=6) {key=answers['w'];}
	else {key=answers['q'];}  
	
	let div=document.createElement('div');
	
	div.classList.add('result');
	div.innerHTML='Правильных ответов: '+x+'/10'+key['description'];
	document.querySelector('main').appendChild(div);
   
	div.style.fontSize="18pt";
	div.style.fontWeight="600";
	 
	let img = document.createElement('img');
    img.src = 'images/' + key['image'];
    img.classList.add('result-img');
    document.querySelector('main').appendChild(img);
	
	
	}
		
		
		
		
		
		ShowQuestions(step);
	
}
