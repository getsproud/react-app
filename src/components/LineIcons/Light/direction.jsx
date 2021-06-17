import React from 'react';

function Direction(props) {
	const title = props.title || "direction";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.9 18.6l-7.6-9.7c-.3-.4-.7-.6-1.2-.6H25.2V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.8h-18c-.8 0-1.5.7-1.5 1.5v19.4c0 .8.7 1.5 1.5 1.5h17.9v31.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V30.7h27.1c.5 0 .9-.2 1.2-.6l7.6-9.7c.4-.5.4-1.3-.1-1.8zm-9.4 9.1H5.7V11.3h45.7l6.4 8.2-6.3 8.2z"/>
	</g>
</svg>
	);
};

export default Direction;