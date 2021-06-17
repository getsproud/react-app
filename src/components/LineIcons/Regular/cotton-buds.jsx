import React from 'react';

function CottonBuds(props) {
	const title = props.title || "cotton buds";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.4 3.6C56.2-.6 48.3.8 42.3 6.8c-5 5-6.7 16.7-7.1 19.5L1.8 59.8c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l33.4-33.4c2.9-.4 14.6-2.1 19.5-7.1 6.1-6 7.4-14 3.3-18.2zM38.9 25.1c.7-4.6 2.6-12.6 5.8-15.8 2.9-2.9 6.5-4.5 9.4-4.5 1.5 0 2.8.4 3.8 1.4 2.7 2.7 1.3 8.7-3.2 13.2-3.3 3.2-11.2 5-15.8 5.7z"/>
	</g>
</svg>
	);
};

export default CottonBuds;