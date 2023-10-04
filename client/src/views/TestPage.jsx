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

const TestPage = () => {

	return (
		<div>
			<div> 
				<ButtonTest />
			</div>
		</div>
	);
};

export default TestPage;
