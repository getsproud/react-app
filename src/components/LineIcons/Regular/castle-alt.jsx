import React from 'react';

function CastleAlt(props) {
	const title = props.title || "castle alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 18.9h-1.6v-7.4c0-1.8-.8-3.4-2.1-4.5l-3.9-3.2C48.2 2 45.1 2 43 3.7l-4 3.2c-1.4 1.1-2.1 2.8-2.1 4.5v7.4h-9.8v-7.4c0-1.8-.8-3.4-2.1-4.5l-4-3.2c-2.1-1.7-5.2-1.7-7.3 0L9.8 6.9C8.4 8 7.6 9.7 7.6 11.5v7.4H6c-2.6 0-4.8 2.1-4.8 4.8v33.2c0 2.6 2.1 4.8 4.8 4.8h14.3c2.6 0 4.8-2.1 4.8-4.8V46.1c0-2.6 2.1-4.7 4.7-4.7h4.6c2.6 0 4.7 2.1 4.7 4.7v10.8c0 2.6 2.1 4.8 4.8 4.8H58c2.6 0 4.8-2.1 4.8-4.8V23.6c0-2.6-2.2-4.7-4.8-4.7zm-17.6-7.4c0-.7.3-1.4.9-1.8l3.9-3.2c.8-.7 2.1-.7 2.9 0L52 9.7c.5.4.9 1.1.9 1.8v7.4H40.4v-7.4zm-29.3 0c0-.7.3-1.4.9-1.8l3.9-3.2c.8-.7 2.1-.7 2.9 0l3.9 3.2c.5.4.9 1.1.9 1.8v7.4H11.1v-7.4zm48.2 45.3c0 .7-.6 1.3-1.3 1.3H43.7c-.7 0-1.3-.6-1.3-1.3V46.1c0-4.5-3.7-8.2-8.2-8.2h-4.6c-4.5 0-8.2 3.7-8.2 8.2v10.8c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3V23.6c0-.7.6-1.3 1.3-1.3H58c.7 0 1.3.6 1.3 1.3v33.2z"/>
	</g>
</svg>
	);
};

export default CastleAlt;