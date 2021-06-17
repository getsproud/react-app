import React from 'react';

function Firecracker(props) {
	const title = props.title || "firecracker";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.6 17.5H33.5v-6.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.7H18.4c-.8 0-1.5.7-1.5 1.5v43.5c0 .8.7 1.5 1.5 1.5h27.2c.8 0 1.5-.7 1.5-1.5V19c0-.8-.7-1.5-1.5-1.5zM19.9 34.1h24.2v13.3H19.9V34.1zm24.2-13.6v10.6H19.9V20.5h24.2zM19.9 61V50.4h24.2V61H19.9z"/>
		<path d="M29.8 8.4h4.4c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-4.4c-1.1 0-2 .9-2 2v4.4c0 1.1.9 2 2 2zm1-5.4h2.4v2.4h-2.4V3z"/>
		<path d="M45.1 5.4h-4.4c-1.1 0-2 .9-2 2v4.4c0 1.1.9 2 2 2h4.4c1.1 0 2-.9 2-2V7.4c0-1.1-.9-2-2-2zm-1 5.5h-2.4V8.4h2.4v2.5z"/>
		<path d="M18.9 13.9h4.4c1.1 0 2-.9 2-2V7.4c0-1.1-.9-2-2-2h-4.4c-1.1 0-2 .9-2 2v4.4c0 1.2.9 2.1 2 2.1zm1-5.5h2.4v2.4h-2.4V8.4z"/>
	</g>
</svg>
	);
};

export default Firecracker;