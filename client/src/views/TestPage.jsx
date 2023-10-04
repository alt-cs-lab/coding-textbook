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



const handleClick = () =>{
	alert('The info gather');
	window.location.href= "https://en.wikipedia.org/wiki/Train";
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
				<h1>Gibson's Portion</h1>
				<GibsonComponent />
const TestPage = () => {

	return (
		<div>
			<div> 
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


