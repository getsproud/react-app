import React from 'react';

function Drumstick(props) {
	const title = props.title || "drumstick";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.8 7.1c-3.7-3.8-8.5-5.9-13.6-5.9-5.5 0-10.8 2.4-15 6.6-7.2 7.4-7.2 29-7.1 33.3L9.8 51.8c-.2.1-.4.1-.5.3l-6.1.1c-1 0-1.7.8-1.7 1.8s.8 1.7 1.7 1.7l5.4-.1V61c0 1 .8 1.8 1.8 1.8S12 62 12 61v-6.2c.1-.2.2-.3.2-.5l10.3-10.6H24c6.6 0 25.8-.6 32.5-7.3 8.4-8.4 8.2-20.2-.7-29.3zM54 33.9c-5.3 5.3-22.5 6.3-30.5 6.2-.1-7.8.9-24.5 6.1-29.8 3.5-3.6 7.9-5.6 12.5-5.6 4.2 0 8.1 1.7 11.1 4.8 5.8 6 9.4 15.9.8 24.4z"/>
	</g>
</svg>
	);
};

export default Drumstick;