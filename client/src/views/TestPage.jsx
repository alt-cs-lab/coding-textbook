import * as React from "react"



const handleClick = () =>{
	alert('The info gather');
	window.location.href= 'https://en.wikipedia.org/wiki/Train';
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
			<div>
				{nathanContainer()}
				<button type="button" onClick={nathanClick}>Don't do it</button>
			</div>
			<div>
			</div>
			<div>
			</div>
		</div>
	);
};

export default TestPage;
