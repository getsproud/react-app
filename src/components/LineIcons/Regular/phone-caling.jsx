import React from 'react';

function PhoneCaling(props) {
	const title = props.title || "phone caling";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32.9 10.6l5.9 4.7c1.1.9 2.6 1.4 4 1.4.3 0 .6 0 .8-.1 1.7-.2 3.3-1.1 4.3-2.5l1.6-2.1c.5-.6 1.2-1 2-1.1.8-.1 1.6.1 2.3.6l5.9 4.7c.8.6 1.9.5 2.5-.3.6-.8.5-1.9-.3-2.5L56 8.8c-1.4-1.1-3.1-1.6-4.9-1.3-1.7.2-3.3 1.1-4.3 2.5l-1.6 2c-.5.6-1.2 1-2 1.1-.8.1-1.6-.1-2.3-.6L35 7.8c-.8-.6-1.9-.5-2.5.3-.5.8-.3 1.9.4 2.5z"/>
		<path d="M60.9 45.3l-9.1-6.1c-2-1.3-4.5-.7-6 1.5L43.4 44c-.2.3-.6.4-.8.2-12.3-7.7-20-18.5-22.7-22.7-.2-.3-.1-.7.2-.9l3.7-2.6c1.9-1.3 2.3-3.9 1.1-5.7l-6.1-9.2c-1.2-1.8-3.7-2.4-5.6-1.3L4.4 7c-.2.1-.3.1-.4.2-6.8 6.8-.5 23.7 14.3 38.5 6.9 6.9 14.5 12.2 21.5 15 3.5 1.4 6.6 2.1 9.3 2.1 3.1 0 5.7-.9 7.6-2.8l.3-.3 5.2-8.7c1.1-2 .5-4.5-1.3-5.7zm-1.7 3.8l-5 8.5c-2.4 2.2-7.1 2.1-13-.2-6.6-2.6-13.8-7.7-20.4-14.2C6.6 29.1 1.9 14.7 6.3 9.9l8.5-5c.3-.2.7-.1.9.2l6.1 9.1c.2.3.1.7-.2.9L18 17.7c-1.8 1.3-2.3 3.7-1.1 5.6 2.9 4.5 10.9 15.7 23.8 23.8 1.9 1.2 4.3.7 5.6-1.2l2.3-3.3c.2-.2.7-.9 1.2-.6l9.1 6.1c.3.3.4.7.3 1z"/>
	</g>
</svg>
	);
};

export default PhoneCaling;