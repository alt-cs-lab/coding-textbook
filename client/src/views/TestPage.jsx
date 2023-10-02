import * as React from "react"



const handleClick = () =>{
	window.location.href= 'https://en.wikipedia.org/wiki/Train';
};

function calculate(first, oper, last) {
	let result;
	if(oper.value == "+"){
		result = first.value + last.value;
	}
	else if(oper.value == "-"){
		result = first.value - last.value;
	}
	else if(oper.value == "/"){
		result = first.value / last.value;
	}
	else if(oper == "*"){
		result = first.value * last.value;
	}
	else{
		return -1;
	} 
	
	return <h1>result</h1>;
}

const nicholasContainer = () => {
	return (
		<div>
			<h1 align='center'>Nicholas Sternecker</h1>
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
				<button OnClick={handleClick}>Nicholas button</button>
				<label for="val1">Value 1:</label>
				<input type="number" id="val1" name="val1"></input>
				<label for="op"> Operator</label>
				<select name="op" id="op">
					<option value="+">+</option>
					<option value="-">-</option>
					<option value="/">/</option>
					<option value="*">*</option>
				</select>
				<label for="val2"> Value 2:</label>
				<input type="number" id="val2" name="val2"></input>
				<button onClick={calculate(val1, op, val2)}>Calculate</button><br/>
			</div>
			<div>
				{nathanContainer()}
				<button type="button" onClick={nathanClick}>Don't do it</button>
			</div>
		</div>
	);
};

export default TestPage;
