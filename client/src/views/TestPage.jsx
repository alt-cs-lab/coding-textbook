import React, { useState } from 'react';
import styled from 'styled-components';

const buttontypes = ['one', 'two', 'three'];

const Button = styled.button`
  background-color: purple;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const ButtonTest = () => {
	const [active, setActive] = useState(buttontypes[0]);
	return (
		<ButtonGroup>
			{buttontypes.map(type => (
				<ButtonToggle
					key={type}
					active={active === type}
					onClick={() => setActive(type)}
					>
						{type}
				</ButtonToggle>
			))}
		</ButtonGroup>
	);
}



export const handleClick = () =>{

	window.location.href= 'https://en.wikipedia.org/wiki/Train';

};

export const handleCalculate = () =>{
	let z = calculate(val1.value, op.value ,val2.value);
	alert("result: " + z);
}

export function calculate(first, oper, last) {
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
};

const NathanContainer = () => {
	return (
		<div>
			<h1>Nathan Herscovici</h1>
			<p>This is the section for Nathan Herscovici, one of the members of the RAAT team</p>
			<button type="button" onClick={nathanClick}>Don't do it</button>
		</div> 
	);

};





const GibsonComponent = () => {
	// State with list of all checked item
	const [checked, setChecked] = React.useState([]);
	const checkList = ["Reading 1", "Reading 2", "Reading 3", "Reading 4"];
  
	// Add/Remove checked item from list
	const handleCheck = (event) => {
		var updatedList = [...checked]; //Getting the current list of checked items
		if (event.target.checked) {
			updatedList = [...checked, event.target.value];
		}
		setChecked(updatedList);
	};
  
	// Return classes based on whether item is checked
	// Is used alongside .css file to strike through text
	var isChecked = (item) =>
	  	checked.includes(item) ? "checked-item" : "not-checked-item";
  
	return (
		<div className="GibsonComponent">
			<div className="checkList">
			<div className="title">Your CheckList:</div>
			<div className="list-container">
				{checkList.map((item, index) => (
				<div key={index}>
					<input value={item} type="checkbox" onChange={handleCheck} />
					<span className={isChecked(item)}>{item}</span>
				</div>
				))}
			</div>
			</div>
		</div>
	);
}


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
				{NathanContainer()}
				<button type="button" onClick={nathanClick}>Don't do it</button>
			</div>
	<div>
				<h1>Gibson's Portion</h1>
				<GibsonComponent />
			</div>
			<div> 
				<h1>Nate's Portion</h1>
				<ButtonTest />
			</div>
			<div>
				<button onClick={handleClick}>Nicholas button</button>
			</div>
			<div>
				
				<NathanContainer />
				
			</div>
		</div>
	);

};

export default TestPage;


