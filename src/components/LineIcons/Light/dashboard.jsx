import React from 'react';

function Dashboard(props) {
	const title = props.title || "dashboard";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 13.8c-17.6 0-32 15.6-32 34.8 0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5 0-19.1-14.4-34.8-32-34.8zm3.9 33.4l-3-9.4c-.3-.9-1.6-.9-1.9 0l-3 9.4H3c.7-16.8 13.4-30.3 29-30.3 15.5 0 28.3 13.5 29 30.3H35.9z"/>
		<path d="M32 22.2c-.8 0-1.5.7-1.5 1.5v2.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-2.8c0-.9-.7-1.5-1.5-1.5z"/>
		<path d="M48.4 29.9l-1.7 1.8c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5l1.7-1.8c.6-.6.6-1.5 0-2.1-.6-.5-1.6-.5-2.1.1z"/>
		<path d="M15.7 29.9c-.6-.6-1.5-.7-2.1-.1-.6.6-.7 1.5-.1 2.1l1.6 1.8c.3.3.7.5 1.1.5.4 0 .7-.1 1-.4.6-.6.7-1.5.1-2.1l-1.6-1.8z"/>
	</g>
</svg>
	);
};

export default Dashboard;