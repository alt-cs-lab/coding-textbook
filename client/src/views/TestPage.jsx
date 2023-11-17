import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function TestPage() {
	const [posts,setposts] = useState([]);

	useEffect(() => {
		axios.get('/api/users')
		.then(response => {
			setposts(response.data);
		})
		.catch(error => {
			console.error(error);
		});
	}, []);

	return (
		<div>
			{JSON.stringify(posts)}
		</div>
	)
}

export default TestPage;


