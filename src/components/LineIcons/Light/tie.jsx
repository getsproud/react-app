import React from 'react';

function Tie(props) {
	const title = props.title || "tie";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M38.2 11l3-9.1c.2-.5.1-1-.2-1.3-.3-.4-.8-.6-1.2-.6H24.2c-.5 0-.9.2-1.2.6-.3.4-.3.9-.2 1.4l3 9.1-5.1 44c-.1.5.2 1.1.6 1.4l9.8 7.3c.3.2.6.3.9.3s.6-.1.9-.3l9.8-7.3c.4-.3.7-.8.6-1.4L38.2 11zm-.5-8l-2.1 6.4h-7.1L26.3 3h11.4zM32 60.6l-8.2-6.1 4.9-42.1h6.6l4.9 42.1-8.2 6.1z"/>
	</g>
</svg>
	);
};

export default Tie;