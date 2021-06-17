import React from 'react';

function Brakckets(props) {
	const title = props.title || "brakckets";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M8.8 25.6V11.8c0-4.9 4-8.9 8.9-8.9H21c.8 0 1.5-.7 1.5-1.5S21.9-.1 21-.1h-3.4C11.1-.1 5.7 5.2 5.7 11.8V25L.3 31c-.5.6-.5 1.4 0 2l5.4 6.1v13.1c0 6.5 5.3 11.9 11.9 11.9H21c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-3.4c-4.9 0-8.9-4-8.9-8.9V38.5c0-.4-.1-.7-.4-1L3.5 32l4.9-5.4c.2-.3.4-.6.4-1z"/>
		<path d="M63.6 31l-5.4-6V11.8c0-6.5-5.3-11.9-11.9-11.9H43c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.4c4.9 0 8.9 4 8.9 8.9v13.8c0 .4.1.7.4 1l4.9 5.4-4.9 5.5c-.2.3-.4.6-.4 1v13.7c0 4.9-4 8.9-8.9 8.9H43c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.4c6.5 0 11.9-5.3 11.9-11.9V39.1l5.4-6.1c.4-.6.4-1.4-.1-2z"/>
	</g>
</svg>
	);
};

export default Brakckets;