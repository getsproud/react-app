import React from 'react';

function UserAlt(props) {
	const title = props.title || "user alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 26.7c7.6 0 13.8-6 13.8-13.3S39.6 0 32 0c-7.6 0-13.8 6-13.8 13.3S24.4 26.7 32 26.7zM32 3c5.9 0 10.8 4.6 10.8 10.3S37.9 23.7 32 23.7s-10.8-4.6-10.8-10.3S26.1 3 32 3z"/>
		<path d="M32.7 32.8h-1.5c-13.1 0-23.7 10.6-23.7 23.7v4c0 1.9 1.6 3.5 3.5 3.5h42c1.9 0 3.5-1.6 3.5-3.5v-4c0-13-10.7-23.7-23.8-23.7zm20.8 27.7c0 .3-.2.5-.5.5H11c-.3 0-.5-.2-.5-.5v-4c0-11.4 9.3-20.7 20.7-20.7h1.5c11.4 0 20.7 9.3 20.7 20.7v4z"/>
	</g>
</svg>
	);
};

export default UserAlt;