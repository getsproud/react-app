import React from 'react';

function Inhaler(props) {
	const title = props.title || "inhaler";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.2 40.7h-3.1c-.8-2.2-2.9-3.7-5.4-3.7H32.4L23.8 6.9C23.6 6 22.9 5.3 22 5c-.9-.3-1.8-.1-2.6.5l-.3.2-.1-.4c-.7-2.5-3-4.2-5.6-4.2l-5.7.2c-1.8 0-3.5.9-4.6 2.4-1 1.5-1.3 3.3-.8 5.1L5 17.7l-.8.7c-.8.6-1.2 1.8-.8 2.8l11.5 37.5c.7 2.4 3 4.1 5.5 4.1H47.8c2.2 0 4.2-1.3 5.1-3.1h3.3c3.2 0 5.8-2.6 5.8-5.8v-7.4c0-3.2-2.6-5.8-5.8-5.8zM8.8 27.1H26l2.2 7.6h-17l-2.4-7.6zM6.5 21zM25 23.6H7.8l-.9-2.9L20.8 9 25 23.6zM5.6 7.7c-.2-.6-.1-1.4.4-1.9.4-.6 1.1-.9 1.8-.9l5.7-.1c1 0 1.9.7 2.2 1.6l.5 1.9-8.3 7-2.3-7.6zm14.8 51.6c-1 0-1.9-.6-2.2-1.6l-6-19.4h16.9l6 21H20.4zM50 57c0 1.2-1 2.3-2.3 2.3h-9l-5.4-18.7h14.3c1.2 0 2.3 1 2.3 2.3V57zm8.5-3.2c0 1.2-1 2.3-2.3 2.3h-2.7V44.2h2.7c1.2 0 2.3 1 2.3 2.3v7.3z"/>
	</g>
</svg>
	);
};

export default Inhaler;