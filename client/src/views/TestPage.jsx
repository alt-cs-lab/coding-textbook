import * as React from "react"

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
			</div>
		</div>
	);
};

export default TestPage;
