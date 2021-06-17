import React from 'react';

function User(props) {
	const title = props.title || "user";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 36.3c8.5 0 15.4-6.9 15.4-15.4S40.5 5.6 32 5.6 16.6 12.5 16.6 21 23.5 36.3 32 36.3zm0-27.7c6.8 0 12.4 5.5 12.4 12.4S38.8 33.3 32 33.3c-6.8 0-12.4-5.5-12.4-12.4S25.2 8.6 32 8.6z"/>
		<path d="M63.5 55.8C54.8 48.4 43.6 44.4 32 44.4S9.2 48.4.5 55.8c-.6.5-.7 1.5-.2 2.1s1.5.7 2.1.2c8.2-6.9 18.6-10.7 29.5-10.7 10.9 0 21.4 3.8 29.5 10.7.3.2.6.4 1 .4s.8-.2 1.1-.5c.7-.7.6-1.7 0-2.2z"/>
	</g>
</svg>
	);
};

export default User;