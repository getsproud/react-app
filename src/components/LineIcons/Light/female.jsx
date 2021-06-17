import React from 'react';

function Female(props) {
	const title = props.title || "female";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.5 25.5V11.9h10.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H33.5V1.5C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5v7.4H19.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h10.7v13.6c-9.9.8-17.8 9.1-17.8 19.2C12.7 55.3 21.4 64 32 64c10.7 0 19.3-8.7 19.3-19.3 0-10.1-7.9-18.4-17.8-19.2zM32 61c-9 0-16.3-7.3-16.3-16.3S23 28.4 32 28.4s16.3 7.3 16.3 16.3S41 61 32 61z"/>
	</g>
</svg>
	);
};

export default Female;