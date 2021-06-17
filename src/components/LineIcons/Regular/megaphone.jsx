import React from 'react';

function Megaphone(props) {
	const title = props.title || "megaphone";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.2 2.9c-1.9-1.5-4.3-2-6.7-1.4l-35.3 8.7h-7.1c-4.5 0-8.2 3.7-8.2 8.2v15.2c0 3.8 2.5 6.9 6 7.9l4.4 17.8c.5 2.1 2.3 3.5 4.5 3.5h1.9c1.4 0 2.7-.6 3.6-1.7.9-1.1 1.2-2.5.9-3.9l-3.4-14.7 32.8 8c.6.2 1.3.2 1.9.2 1.7 0 3.4-.6 4.8-1.7 1.9-1.5 2.9-3.6 2.9-6V8.9c-.1-2.4-1.2-4.5-3-6zM19.1 13.3L32.6 10v32l-13.5-3.3V13.3zM5.4 33.6V18.4c0-2.6 2.1-4.7 4.7-4.7h5.5v24.6h-5.5c-2.6 0-4.7-2.1-4.7-4.7zm14.1 25.2c-.1.2-.4.4-.9.4h-1.9c-.5 0-.9-.3-1.1-.8l-4.1-16.6H16l3.8 16.1c0 .5-.1.8-.3.9zm39.1-15.7c0 1.2-.6 2.4-1.6 3.2-1 .8-2.4 1.1-3.7.8l-17.2-4.2V9.1l17.2-4.2c1.3-.3 2.6 0 3.7.8 1 .8 1.6 1.9 1.6 3.2v34.2z"/>
	</g>
</svg>
	);
};

export default Megaphone;