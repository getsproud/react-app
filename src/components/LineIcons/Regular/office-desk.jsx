import React from 'react';

function OfficeDesk(props) {
	const title = props.title || "office desk";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 31.3H42.7v-7h10.7c3.6 0 6.5-2.9 6.5-6.5V9.4c0-3.6-2.9-6.5-6.5-6.5h-25c-3.6 0-6.5 2.9-6.5 6.5v8.4c0 3.6 2.9 6.5 6.5 6.5h10.7v7H3c-1 0-1.8.8-1.8 1.8V59.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V46h54.5v13.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V33.1c-.1-1-.9-1.8-1.9-1.8zM25.5 17.8V9.4c0-1.7 1.4-3 3-3h25c1.7 0 3 1.4 3 3v8.4c0 1.7-1.4 3-3 3h-25c-1.7 0-3-1.3-3-3zm-20.7 17h54.5v7.6H4.8v-7.6z"/>
		<path d="M4.6 24.3h8.1c1.8 0 3.3-1.5 3.3-3.3V6.2c0-1.8-1.5-3.3-3.3-3.3H4.6c-1.8 0-3.3 1.5-3.3 3.3V21c0 1.8 1.4 3.3 3.3 3.3zm.2-17.9h7.8v14.5H4.8V6.4z"/>
	</g>
</svg>
	);
};

export default OfficeDesk;