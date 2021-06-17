import React from 'react';

function BurjAlArab(props) {
	const title = props.title || "burj al arab";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.7 56.9h-6.5v-7.8c0-4.8-.9-9.4-2.4-13.7v-.1c0-.5-.2-.9-.5-1.2C42.5 19.9 28.8 9.8 12.6 9.3V3c0-1-.8-1.8-1.8-1.8S9.1 2 9.1 3v53.9H6.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.9v.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-.6h45.1c1 0 1.8-.8 1.8-1.8s-1-1.7-2-1.7zM39.2 25.8c2 2.4 3.7 5 5.1 7.9H12.6v-7.9h26.6zM12.6 37.1h33.1c.9 2.5 1.5 5.2 1.8 7.9-.1 0-.3-.1-.4-.1H12.6v-7.8zm23.3-14.8H12.6v-9.5c9 .3 17.1 3.8 23.3 9.5zM12.6 48.5h34.5c.2 0 .4 0 .6-.1v8.5H12.6v-8.4z"/>
	</g>
</svg>
	);
};

export default BurjAlArab;