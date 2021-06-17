import React from 'react';

function UserAlt2(props) {
	const title = props.title || "user alt 2";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 26.7c7.6 0 13.8-6 13.8-13.4S39.6 0 32 0c-7.6 0-13.8 6-13.8 13.4S24.4 26.7 32 26.7zM32 3c5.9 0 10.8 4.6 10.8 10.4S37.9 23.7 32 23.7s-10.8-4.6-10.8-10.4S26.1 3 32 3z"/>
		<path d="M46.8 32.8H17.2c-5.3 0-9.7 4.3-9.7 9.7v18c0 1.9 1.6 3.5 3.5 3.5h42c1.9 0 3.5-1.6 3.5-3.5v-18c0-5.4-4.4-9.7-9.7-9.7zm6.7 27.7c0 .3-.2.5-.5.5H11c-.3 0-.5-.2-.5-.5v-18c0-3.7 3-6.7 6.7-6.7h29.6c3.7 0 6.7 3 6.7 6.7v18z"/>
	</g>
</svg>
	);
};

export default UserAlt2;