import React from 'react';

function Helmet(props) {
	const title = props.title || "helmet";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 40.2h-.2V39C61.4 22.9 48.2 9.7 32 9.7S2.6 22.9 2.6 39.1v1.2h-.1c-1.4 0-2.5 1.1-2.5 2.5v9.1c0 1.4 1.1 2.5 2.5 2.5h59c1.4 0 2.5-1.1 2.5-2.5v-9.1c0-1.4-1.1-2.6-2.5-2.6zM5.6 39.1c0-10 5.6-18.7 13.8-23.2v6.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.8c2.5-1 5.3-1.6 8.1-1.8v12.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V12.7c2.8.2 5.6.8 8.1 1.8v7.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.5C52.8 20.3 58.4 29 58.4 39v1.2H5.7c-.1-.4-.1-.7-.1-1.1zM61 51.3H3v-8.1h58v8.1z"/>
	</g>
</svg>
	);
};

export default Helmet;