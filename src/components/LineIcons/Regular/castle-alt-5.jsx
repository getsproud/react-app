import React from 'react';

function CastleAlt5(props) {
	const title = props.title || "castle alt 5";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 4.8c-1 0-1.8.8-1.8 1.8v6h-14v-6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v20.3c-3.1-1-6.6-1.6-10.3-1.6-3.2 0-6.3.4-9.1 1.2V6.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v6H4.8v-6c0-1-.8-1.8-1.8-1.8s-1.7.8-1.7 1.8v47.8c0 2.6 2.1 4.8 4.8 4.8H58c2.6 0 4.8-2.1 4.8-4.8V6.6c0-1-.8-1.8-1.8-1.8zM31.4 28.9c3.7 0 7.2.6 10.3 1.8v25H22.3V30.3c2.8-.9 5.9-1.4 9.1-1.4zM4.8 54.4V16.1h14.1v39.6H6c-.7 0-1.2-.6-1.2-1.3zm54.5 0c0 .7-.6 1.3-1.3 1.3H45.2V16.1h14.1v38.3z"/>
	</g>
</svg>
	);
};

export default CastleAlt5;