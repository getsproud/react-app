import React from 'react';

function PoundCard(props) {
	const title = props.title || "pound card";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.3 54.1h-8.8c.4-.8.6-1.8.6-2.8v-1.2h3.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-3.2v-2.9c0-1.9 1.3-3.5 2.8-3.5.7 0 1.3.3 1.9.9.7.7 1.8.8 2.5.1s.8-1.8.1-2.5c-1.2-1.3-2.8-2-4.4-2-3.5 0-6.3 3.1-6.3 7v2.9H43c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7v1.2c0 1.5-1 2.8-2.2 2.8h-1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h14.9c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8z"/>
		<path d="M55.2 6.4H8.8c-4.2 0-7.5 3.2-7.5 7v29c0 3.9 3.4 7 7.5 7h23.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H8.8c-2.2 0-4-1.6-4-3.5V29h54.5v8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V13.4c-.1-3.9-3.5-7-7.7-7zM8.8 9.9h46.4c2.2 0 4 1.6 4 3.5v3.5H4.8v-3.5c0-2 1.8-3.5 4-3.5zm-4 15.6v-5.1h54.5v5.1H4.8z"/>
	</g>
</svg>
	);
};

export default PoundCard;