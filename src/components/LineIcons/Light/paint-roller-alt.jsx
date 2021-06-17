import React from 'react';

function PaintRollerAlt(props) {
	const title = props.title || "paint roller alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.8 8.3h-2.7V3.5c0-1.9-1.6-3.5-3.5-3.5H3.5C1.6 0 0 1.6 0 3.5v12.6c0 1.9 1.6 3.5 3.5 3.5h43.1c1.9 0 3.5-1.6 3.5-3.5v-4.8h2.7c4.5 0 8.2 3.7 8.2 8.2s-3.7 8.2-8.2 8.2H32c-2.4 0-4.3 1.9-4.3 4.3v6.8h-2c-1.9 0-3.5 1.6-3.5 3.5v18.2c0 1.9 1.6 3.5 3.5 3.5h7.1c1.9 0 3.5-1.6 3.5-3.5V42.3c0-1.9-1.6-3.5-3.5-3.5h-2V32c0-.7.6-1.3 1.3-1.3h20.8c6.2 0 11.2-5 11.2-11.2S59 8.3 52.8 8.3zm-5.7 7.8c0 .3-.2.5-.5.5H3.5c-.3 0-.5-.2-.5-.5V3.5c0-.3.2-.5.5-.5h43.1c.3 0 .5.2.5.5v12.6zM33.3 42.3v18.2c0 .3-.2.5-.5.5h-7.1c-.3 0-.5-.2-.5-.5V42.3c0-.3.2-.5.5-.5h7.1c.2 0 .5.2.5.5z"/>
	</g>
</svg>
	);
};

export default PaintRollerAlt;