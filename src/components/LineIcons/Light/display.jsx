import React from 'react';

function Display(props) {
	const title = props.title || "display";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.1 8.2H2.9C1.3 8.2 0 9.5 0 11.1v30.7c0 1.6 1.3 2.9 2.9 2.9h27.6v8.1h-9.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h22.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-9.6v-8.1h27.6c1.6 0 2.9-1.3 2.9-2.9V11.1c0-1.6-1.3-2.9-2.9-2.9zM61 41.6H3V11.2h58v30.4z"/>
	</g>
</svg>
	);
};

export default Display;