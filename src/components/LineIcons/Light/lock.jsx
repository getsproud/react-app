import React from 'react';

function Lock(props) {
	const title = props.title || "lock";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.1 19.4h-7.5v-5.5C44.6 6.2 38.9 0 32 0S19.4 6.2 19.4 13.8v5.5h-7.5c-3.5 0-6.4 2.9-6.4 6.4V44c0 11 8.9 19.9 19.9 19.9h13.1c11 0 19.9-8.9 19.9-19.8V25.8c.1-3.5-2.8-6.4-6.3-6.4zm-29.7-5.6C22.4 7.9 26.7 3 32 3s9.6 4.9 9.6 10.8v5.5H22.4v-5.5zm33.1 30.4c0 9.2-7.6 16.8-16.9 16.8H25.4c-9.3 0-16.9-7.6-16.9-16.9V25.8c0-1.9 1.5-3.4 3.4-3.4h40.2c1.9 0 3.4 1.5 3.4 3.4v18.4z"/>
		<path d="M36.5 41.6h-9.1c-1.4 0-2.5 1.1-2.5 2.5v9.1c0 1.4 1.1 2.5 2.5 2.5h9.1c1.4 0 2.5-1.1 2.5-2.5v-9.1c0-1.4-1.1-2.5-2.5-2.5zM36 52.7h-8v-8.1h8v8.1z"/>
	</g>
</svg>
	);
};

export default Lock;