import React from 'react';

function Notepad(props) {
	const title = props.title || "notepad";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.4 0H20.2c-2.7 0-4.9 2.2-4.9 4.9v6.2h-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4v16.4h-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4v16.4h-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4v6.2c0 2.7 2.2 4.9 4.9 4.9h29.1c2.7 0 4.9-2.2 5-4.9V4.9c0-2.7-2.2-4.9-4.9-4.9zm-.1 61H20.2c-1.1 0-1.9-.9-1.9-1.9v-6.2h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8V33.5h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8V14.1h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8V4.9c0-1.1.9-1.9 1.9-1.9h29.2c1.1 0 1.9.9 1.9 1.9V59c0 1.1-.9 2-2 2z"/>
	</g>
</svg>
	);
};

export default Notepad;