import * as React from "react"
import {useEffect, useState} from "react"

const LTIPage = () => {

	const [loading, setLoading] = React.useState(true)
	const [ltiData, setLtiData] = React.useState({})

	useEffect( () => {
		fetch("/api/lti")
		.then(response => {
			console.log(response)
		  if(response.ok) return response.json()
		  throw response;
		})
		.then(data => {
		  setLtiData(data);
		  setLoading(false);
		})
		// TODO: handle error
	  },[])

	   if(loading) return <>Loading...</>

	return (
		<div>
			<h1>LTI Test Page</h1>
			<body>This is the cookie Data: {JSON.stringify(ltiData)}</body>
		</div>
	);
};

export default LTIPage;
