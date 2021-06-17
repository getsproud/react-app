import React from 'react';

function BibleAlt(props) {
	const title = props.title || "bible alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.7 1.2H16.3c-3.4 0-6.2 2.8-6.2 6.2v49.2c0 3.4 2.8 6.2 6.2 6.2h31.3c3.4 0 6.2-2.8 6.2-6.2V7.4c0-3.4-2.7-6.2-6.1-6.2zm-34 55.4V7.4c0-1.5 1.2-2.7 2.7-2.7h3.4v54.5h-3.4c-1.5 0-2.7-1.1-2.7-2.6zm36.6 0c0 1.5-1.2 2.7-2.7 2.7H23.2V4.7h24.5c1.5 0 2.7 1.2 2.7 2.7v49.2z"/>
		<path d="M41.9 24h-3.7v-3.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V24H31c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.7v9.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-9.2H42c1 0 1.8-.8 1.8-1.8s-1-1.8-1.9-1.8z"/>
	</g>
</svg>
	);
};

export default BibleAlt;