import * as React from "react"


const handleClick = () =>{
	alert('The info gather');
	window.location.href= 'https://en.wikipedia.org/wiki/Train';
};


const TestPage = () => {
	return (
		<div>
			<div>
			</div>
			<div> 
			</div>
			<div> 
			</div>
			<div>
				<button OnClick={handleClick}>Nicholas button</button>
			</div>
		</div>
	);
};

export default TestPage;
