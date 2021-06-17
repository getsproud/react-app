import React from 'react';

function Swatches(props) {
	const title = props.title || "swatches";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.2 1.3H20.8C17.6 1.3 15 3.8 15 7v50c0 3.2 2.6 5.8 5.8 5.8h22.5c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM20.8 4.8h22.5c1.2 0 2.3 1 2.3 2.3v7h-27V7c-.1-1.2.9-2.2 2.2-2.2zm-2.3 22v-9.3h27v9.3h-27zm27 3.5v9.3h-27v-9.3h27zm-2.3 29H20.8c-1.2 0-2.3-1-2.3-2.3V43.1h27V57c0 1.2-1 2.3-2.3 2.3z"/>
		<path d="M32 48c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3S33.8 48 32 48z"/>
	</g>
</svg>
	);
};

export default Swatches;