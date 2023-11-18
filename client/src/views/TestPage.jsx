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
			<h1>Perusall API User Return:</h1>
			{posts.map((post) => {
				return(<li>ID: {post._id} / First Name: {post.firstName} / Last Name: {post.lastName} / Email: {post.email}</li>)
			})}
		</div>
	)
}

export default TestPage;


