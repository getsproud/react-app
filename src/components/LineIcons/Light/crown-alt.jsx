import React from 'react';

function CrownAlt(props) {
	const title = props.title || "crown alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.5 22.3c-.5-.4-1.1-.5-1.6-.2l-12.3 6c-.6.3-1.3.1-1.8-.4L33.1 10.9c-.6-.7-1.7-.7-2.3 0L16.2 27.7c-.4.5-1.2.7-1.8.4l-12.3-6c-.5-.3-1.2-.2-1.6.2-.5.4-.6 1-.5 1.6l7.8 25.7c.7 2.4 2.9 4 5.4 4h37.4c2.5 0 4.7-1.6 5.4-4l7.8-25.7c.3-.6.1-1.2-.3-1.6zM53.2 48.7c-.3 1.1-1.4 1.9-2.5 1.9H13.3c-1.2 0-2.2-.8-2.5-1.9L3.9 26.3l9.2 4.5c1.8.9 4 .4 5.4-1.1L32 14.2l13.5 15.5c1.3 1.5 3.5 2 5.4 1.1l9.2-4.5-6.9 22.4z"/>
	</g>
</svg>
	);
};

export default CrownAlt;