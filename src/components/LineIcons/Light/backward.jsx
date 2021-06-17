import React from 'react';

function Backward(props) {
	const title = props.title || "backward";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.5.4c-1.2-.6-2.6-.5-3.6.3L8.5 30.2V1.5C8.5.7 7.8 0 7 0S5.5.7 5.5 1.5v61c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V33.8l44.4 29.6c.6.4 1.3.7 2.1.7.5 0 1.1-.1 1.6-.4 1.2-.6 2-1.8 2-3.2V3.6c-.1-1.4-.9-2.6-2.1-3.2zm-1 60c0 .3-.2.5-.3.5-.1.1-.3.1-.6 0L11.3 32 54.6 3.1c.2-.2.4-.1.6 0 .1.1.3.2.3.5v56.8z"/>
	</g>
</svg>
	);
};

export default Backward;