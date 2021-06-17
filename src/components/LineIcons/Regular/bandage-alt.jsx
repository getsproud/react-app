import React from 'react';

function BandageAlt(props) {
	const title = props.title || "bandage alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.2H36c-3.2 0-5.8 2.6-5.8 5.8v26.4H15.9C7.8 33.4 1.3 40 1.3 48.1S7.9 62.8 16 62.8h41c3.2 0 5.8-2.6 5.8-5.8V7c0-3.1-2.7-5.8-5.8-5.8zM33.8 23.3l25.5-9.9v21.5l-25.5-3.4v-8.2zM36 4.7h21c1.3 0 2.3 1 2.3 2.3v2.6l-25.5 9.9V7c0-1.2 1-2.3 2.2-2.3zm-8.6 32.2l-3.2 20.7-10.1-20.5c.6-.1 1.2-.2 1.8-.2h11.5zM4.8 48.1c0-4.3 2.5-8 6-9.9l10.3 21.1h-5.2c-6.1 0-11.1-5.1-11.1-11.2zm22.7 11.2L31 36.9l12.5 22.3h-16zm29.5 0h-9.5L33.9 35l25.3 3.4V57c.1 1.2-1 2.3-2.2 2.3z"/>
	</g>
</svg>
	);
};

export default BandageAlt;