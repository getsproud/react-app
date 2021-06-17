import React from 'react';

function Funnel(props) {
	const title = props.title || "funnel";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.7 1.6C60.3.6 59.3 0 58.3 0H5.7c-1 0-1.9.5-2.3 1.4-.4.8-.3 1.9.4 2.7l18.5 21.4v36c0 .9.4 1.7 1.2 2.1.4.3.9.4 1.4.4.5 0 .9-.1 1.3-.3l14.6-9.2.2-.2c.6-.6.9-1.2.9-1.9v-27L60.2 4.2c.7-.7.8-1.7.5-2.6zm-21.2 22c-.6.6-.6 1.3-.6 1.8v26.8l-13.6 8.6V25.3c0-.5-.2-1.2-.6-1.6L6.7 3h50.5L39.5 23.6z"/>
	</g>
</svg>
	);
};

export default Funnel;