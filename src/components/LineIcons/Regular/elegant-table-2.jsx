import React from 'react';

function ElegantTable2(props) {
	const title = props.title || "elegant table 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M16.6 33.2H5.2c-.2 0-.3 0-.4.1v-19c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v35.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.6H19v5.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V39c-.2-3.2-2.8-5.8-6-5.8zM4.8 40.6v-4c.1 0 .3.1.4.1h11.4c1.3 0 2.3 1 2.3 2.3v1.6H4.8z"/>
		<path d="M61 12.5c-1 0-1.8.8-1.8 1.8v19c-.1 0-.3-.1-.4-.1H47.4c-3.2 0-5.8 2.6-5.8 5.8v10.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.6h14.2v5.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V14.3c-.2-1-1-1.8-2-1.8zM45.1 40.6V39c0-1.3 1-2.3 2.3-2.3h11.4c.2 0 .3 0 .4-.1v4H45.1z"/>
		<path d="M46.3 25.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H17.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h12.5v23.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V25.9h12.5z"/>
	</g>
</svg>
	);
};

export default ElegantTable2;