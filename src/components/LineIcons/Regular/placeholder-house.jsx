import React from 'react';

function PlaceholderHouse(props) {
	const title = props.title || "placeholder house";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 57.5h-3.1v-5.7c.3.2.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5L50.2 41c-.6-.5-1.6-.5-2.2 0l-9.8 8.2c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.4.3v5.7H23.6V52c.3.2.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5L16 41c-.6-.5-1.6-.5-2.2 0L4 49.2c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.4.3v5.7H3c-1 0-1.8.8-1.8 1.8S2 61 3 61H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-51.4 0v-8.6l5.2-4.4 5.2 4.4v8.6H9.6zm34.3 0v-8.6l5.2-4.4 5.2 4.4v8.6H43.9z"/>
		<path d="M32.3 34.5c.3.3.7.4 1.1.4s.8-.1 1.1-.4c1.3-1.1 12.6-10.7 12.6-17.9C47.1 9.1 41 3 33.4 3S19.7 9.1 19.7 16.7c0 7.2 11.3 16.8 12.6 17.8zm1.1-28c5.6 0 10.2 4.6 10.2 10.2 0 4.2-6.6 11-10.2 14.2-3.6-3.2-10.2-10-10.2-14.2 0-5.7 4.6-10.2 10.2-10.2z"/>
		<path d="M39.6 16.2c0-3.4-2.8-6.1-6.1-6.1-3.4 0-6.1 2.8-6.1 6.1s2.8 6.1 6.1 6.1c3.3.1 6.1-2.7 6.1-6.1zm-8.8 0c0-1.5 1.2-2.6 2.6-2.6 1.5 0 2.6 1.2 2.6 2.6s-1.2 2.6-2.6 2.6c-1.4.1-2.6-1.1-2.6-2.6z"/>
	</g>
</svg>
	);
};

export default PlaceholderHouse;