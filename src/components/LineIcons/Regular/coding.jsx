import React from 'react';

function Coding(props) {
	const title = props.title || "coding";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.5 45c-.1-.8.1-1.5.7-2.1 7.3-7.4 9.3-17.8 5.2-27.1C53.8 7.9 46.5 2.4 38.1 1.4 26.4 0 15.7 6.8 12 17.9c0 .1-.1.2-.1.3l-1.2 7.2L5 36c-.5 1-.5 2.1.1 3.1s1.6 1.5 2.7 1.5h1.6l1.6 8.5c.5 2.8 3 4.8 5.8 4.8h6.8c1.1 0 2.1.8 2.3 1.8l.6 2.4c.6 2.7 3 4.5 5.7 4.5h15.5c1.7 0 3.4-.8 4.5-2.1s1.6-3.1 1.3-4.8l-2-10.7zm-2 13.4c-.5.5-1.1.9-1.8.9H32.1c-1.1 0-2.1-.8-2.3-1.8l-.6-2.5c-.6-2.7-3-4.5-5.7-4.5h-6.8c-1.2 0-2.1-.8-2.4-2l-1.8-9.9c-.2-.8-.9-1.4-1.7-1.4H8.3L14 26.8c.1-.2.2-.4.2-.6l1.2-7.3c3.2-9.4 12.3-15.2 22.3-14 7.1.9 13.4 5.6 16.4 12.3 3.5 7.9 1.8 16.8-4.5 23.2a6.2 6.2 0 0 0-1.6 5.2l2 10.8c.1.7-.1 1.4-.5 2z"/>
		<path d="M28.5 19.8c-.7-.6-1.8-.6-2.5.1l-6 6.9c-.6.7-.6 1.7 0 2.3l6.1 6.8c.3.4.8.6 1.3.6.4 0 .8-.1 1.2-.4.7-.6.8-1.8.1-2.5l-5-5.6 5-5.6c.6-.8.5-1.9-.2-2.6z"/>
		<path d="M50.5 26.8L44.4 20c-.6-.7-1.7-.8-2.5-.1-.7.6-.8 1.7-.1 2.5l5 5.6-5 5.6c-.6.7-.6 1.8.1 2.5.3.3.8.4 1.2.4.5 0 1-.2 1.3-.6l6.1-6.8c.5-.7.5-1.7 0-2.3z"/>
		<path d="M37.1 19.8c-.9-.3-1.9.3-2.1 1.2l-3.5 13.3c-.2.9.3 1.9 1.2 2.1.2 0 .3.1.5.1.8 0 1.5-.5 1.7-1.3l3.5-13.3c.2-.9-.3-1.9-1.3-2.1z"/>
	</g>
</svg>
	);
};

export default Coding;