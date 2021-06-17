import React from 'react';

function UserAlt1(props) {
	const title = props.title || "user alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 26.7c7.6 0 13.8-6 13.8-13.3C45.8 6 39.6 0 32 0S18.2 6 18.2 13.4c0 7.3 6.2 13.3 13.8 13.3zM32 3c5.9 0 10.8 4.6 10.8 10.3C42.8 19 38 23.6 32 23.6S21.2 19 21.2 13.3C21.2 7.6 26.1 3 32 3z"/>
		<path d="M32 34.9c-13.5 0-24.5 11-24.5 24.5v3.2c0 .7.7 1.4 1.5 1.4s1.5-.7 1.5-1.5v-3.2c0-11.8 9.6-21.5 21.5-21.5 11.8 0 21.5 9.6 21.5 21.5v3.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.2c0-13.4-11-24.4-24.5-24.4z"/>
	</g>
</svg>
	);
};

export default UserAlt1;