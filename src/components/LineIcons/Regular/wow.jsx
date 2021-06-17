import React from 'react';

function Wow(props) {
	const title = props.title || "wow";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M32 32.9c-5.3 0-9.7 4.3-9.7 9.7 0 5.3 4.3 9.7 9.7 9.7s9.7-4.3 9.7-9.7c0-5.4-4.4-9.7-9.7-9.7zm0 15.8c-3.4 0-6.2-2.8-6.2-6.2 0-3.4 2.8-6.2 6.2-6.2 3.4 0 6.2 2.8 6.2 6.2 0 3.4-2.8 6.2-6.2 6.2z"/>
		<circle cx="20.1" cy="22.8" r="4"/>
		<circle cx="43.9" cy="22.8" r="4"/>
	</g>
</svg>
	);
};

export default Wow;