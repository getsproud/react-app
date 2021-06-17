import React from 'react';

function SawAlt(props) {
	const title = props.title || "saw alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.4 27.6h-28v-3.5c0-2.4-2-4.4-4.4-4.4H13.5c-2.4 0-4.4 2-4.4 4.4 0 1.9-1.6 3.5-3.5 3.5H3c-1 0-1.8.8-1.8 1.8v13c0 1 .8 1.8 1.8 1.8h53.4c3.5 0 6.3-2.8 6.3-6.3V34c.1-3.5-2.8-6.4-6.3-6.4zM4.8 31.1h.9c3.9 0 7-3.1 7-7 0-.5.4-.9.9-.9h10.5c.5 0 .9.4.9.9v16.5H4.8v-9.5zm54.5 6.8c0 1.5-1.3 2.8-2.8 2.8h-28v-9.5h28c1.5 0 2.8 1.3 2.8 2.8v3.9z"/>
	</g>
</svg>
	);
};

export default SawAlt;