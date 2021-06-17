import React from 'react';

function DirectionRtl(props) {
	const title = props.title || "direction rtl";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M23.8 24.2h2.1V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V3h9.9v37c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V3h14.9c.8 0 1.5-.7 1.5-1.5S57.5 0 56.7 0H23.8h-.1C17 0 11.6 5.3 11.6 12.1c0 6.6 5.5 12.1 12.2 12.1zm0-21.2h2.1v18.1h-2.1c-5.1 0-9.2-4-9.2-9.1 0-5 4-9 9.2-9z"/>
		<path d="M56.7 53H10.5l6.6-5.3c.6-.5.8-1.5.2-2.1-.5-.6-1.5-.8-2.1-.2L7 52c-.8.6-1.2 1.5-1.2 2.5S6.2 56.4 7 57l8.3 6.6c.3.2.6.3.9.3.4 0 .9-.2 1.2-.6.5-.6.4-1.6-.2-2.1L10.5 56h46.1c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.4-1.5z"/>
	</g>
</svg>
	);
};

export default DirectionRtl;