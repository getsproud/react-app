import React from 'react';

function Castle(props) {
	const title = props.title || "castle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 57.3h-3.2V26.2c.9-.1 1.5-.8 1.5-1.7V13.6c0-1.4-.5-2.7-1.4-3.7l-4.5-5c-1-1.1-2.5-1.8-4-1.8s-3 .7-4 1.8l-4.5 5c-.9 1-1.4 2.3-1.4 3.7v10.9c0 .9.7 1.6 1.5 1.7v12.5c-1.7.7-4.8 1.4-9 1.4-3.3 0-6.5-.4-8.6-1.2V26.2c.9-.1 1.5-.8 1.5-1.7V13.6c0-1.4-.5-2.7-1.4-3.7l-4.5-5c-1-1.1-2.5-1.8-4-1.8s-3 .7-4 1.8l-4.5 5c-.9 1-1.4 2.3-1.4 3.7v10.9c0 .9.7 1.6 1.5 1.7v31.1H3c-1 0-1.8.8-1.8 1.8S2 60.8 3 60.8h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM42.9 13.6c0-.5.2-.9.5-1.3l4.5-5c.4-.4.9-.6 1.4-.6s1.1.2 1.4.6l4.5 5c.3.4.5.8.5 1.3v9.1h-13v-9.1zm-11 29.9c3.4 0 6.6-.4 9-1.2v15H23.4V42.5c2.3.7 5.3 1 8.5 1zM8.4 13.6c0-.5.2-.9.5-1.3l4.5-5c.7-.8 2.1-.8 2.9 0l4.5 5c.3.4.5.8.5 1.3v9.1h-13v-9.1zM10 57.3V26.2h9.9V57.3H10zm34.4 0V26.2h9.9v31.1h-9.9z"/>
	</g>
</svg>
	);
};

export default Castle;