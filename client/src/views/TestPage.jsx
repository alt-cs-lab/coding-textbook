import * as React from "react"



const handleClick = () =>{
	window.location.href= 'https://en.wikipedia.org/wiki/Train';
};

const handleCalculate = () =>{
	let z = calculate(val1.value, op.value ,val2.value);
	alert("result: " + z);
}

function calculate(first, oper, last) {
	let result;
	if((first == null && last == null) || (first == 0 && last == 0)){
		return 0;
	}
	else if(oper == "+"){
		return (parseInt(first) + parseInt(last));
	}
	else if(oper == "-"){
		result = parseInt(first) - parseInt(last);
	}
	else if(oper == "/"){
		result = parseInt(first) / parseInt(last);
	}
	else if(oper == "*"){
		result = parseInt(first) * parseInt(last);
	}
	else{
		return -1;
	} 
	
	return result;
}

const nicholasContainer = () => {
	return (
		<div>
			<h1 align='left'>Nicholas Sternecker</h1>
			<p>
				There is no way a bee should be able to fly.<br />
				Its wings are too small to get its fat little body off the ground.<br />
				The bee, of course, flies anyway<br />
				because bees don't care what humans think is<br />
				Impossible<br />
			</p>
		</div>

	);
};

const nathanClick = () => {
	window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3Dm";
}

const nathanContainer = () => {
	return (
		<div>
			{/* {alert('broke')} */} 
			<h1>Nathan Herscovici</h1>
			<p>This is the section for Nathan Herscovici, one of the members of the RAAT team</p>
		</div> 
	);
};

const TestPage = () => {
	return (
		<div>
			<div>
				{nicholasContainer()}
				<button OnClick={handleClick}>Nicholas button</button><br /><br /><br /><br />
				<label for="val1">Value 1:</label>
				<input type="number" id="val1" name="val1" defaultValue={0}></input><br />
				<label for="op"> Operator</label>
				<select name="op" id="op">
					<option value="+">+</option>
					<option value="-">-</option>
					<option value="/">/</option>
					<option value="*">*</option>
				</select> <br />
				<label for="val2"> Value 2:</label>
				<input type="number" id="val2" name="val2" defaultValue={0}></input><br />
				<button type="submit" onClick={handleCalculate}>Calculate</button>

			</div>
			<div>
				{nathanContainer()}
				<button type="button" onClick={nathanClick}>Don't do it</button>
			</div>
		</div>
	);
};

export default TestPage;
