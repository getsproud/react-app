import React from 'react';

function Record(props) {
	const title = props.title || "record";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M32 20.2c-6.5 0-11.8 5.3-11.8 11.8 0 6.5 5.3 11.8 11.8 11.8 6.5 0 11.8-5.3 11.8-11.8 0-6.5-5.3-11.8-11.8-11.8zm0 20.1c-4.6 0-8.3-3.7-8.3-8.3 0-4.6 3.7-8.3 8.3-8.3 4.6 0 8.3 3.7 8.3 8.3 0 4.6-3.7 8.3-8.3 8.3z"/>
	</g>
</svg>
	);
};

export default Record;