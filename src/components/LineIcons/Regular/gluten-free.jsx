import React from 'react';

function GlutenFree(props) {
	const title = props.title || "gluten free";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M40.7 14.2c-1 0-1.8.8-1.8 1.8v1.5l-5.2 2.2v-6.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v6.3L25 17.3v-1.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v20.2c0 .7.4 1.3 1.1 1.6l7.6 3.1v8.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-8.6l7.6-3.1c.7-.3 1.1-.9 1.1-1.6V15.9c.1-.9-.7-1.7-1.7-1.7zm-1.7 7V26l-5.2 2.2v-4.8l5.2-2.2zm-8.7 2.1v5.5L25 26.6v-5.5l5.3 2.2zM25 34.9v-4.5l5.2 2.2v4.5L25 34.9zm8.8 2.2V32l5.2-2.2V35l-5.2 2.1z"/>
		<path d="M57.2 14.4c-.1-.1-.1-.2-.2-.2C51.4 6.3 42.3 1.3 32 1.3 15 1.3 1.3 15 1.3 32c0 3.9.7 7.6 2.1 11.1 0 .1 0 .1.1.2C7.9 54.6 19 62.8 32 62.8 49 62.8 62.8 49 62.8 32c0-6.5-2.1-12.6-5.6-17.6zM32 59.3c-11 0-20.5-6.6-24.8-16l8.6-4.6c.9-.5 1.2-1.5.7-2.4-.5-.9-1.5-1.2-2.4-.7L5.9 40c-.8-2.5-1.2-5.2-1.2-8C4.8 17 17 4.8 32 4.8c8.5 0 16.1 3.9 21.1 10l-5.4 2.9c-.9.5-1.2 1.5-.7 2.4.3.6.9.9 1.5.9.3 0 .6-.1.8-.2l5.8-3.1c2.6 4.2 4.1 9.1 4.1 14.4C59.3 47 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default GlutenFree;