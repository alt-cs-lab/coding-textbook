import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function TestPage() {
	const [posts,setposts] = useState([]);

	useEffect(() => {
		axios.get(/API/Users)
		.then(response => {
			setposts(response.data);
		})
		.catch(error => {
			console.error(error);
		});
	}, []);

	return (
		<ul>
			{posts.map(post => (
				<li key={post.id}>{post.title}</li>
			))}
		</ul>
	)
}

export default TestPage;


