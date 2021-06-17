import React from 'react';

function CupAlt(props) {
	const title = props.title || "cup alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 16.3h-5.4v-2.7c0-.8-.7-1.5-1.5-1.5H10.7c-.8 0-1.5.7-1.5 1.5v11.1c0 6 2.4 11.6 6.5 15.6H1.5c-.8 0-1.5.7-1.5 1.5v.3c0 5.3 4.3 9.6 9.6 9.6H51c5.3 0 9.6-4.3 9.6-9.6v-.3c0-.8-.7-1.5-1.5-1.5H45c2.7-2.7 4.7-6.1 5.7-9.8H57c3.9 0 7-3.1 7-7v-.4c0-3.7-3.2-6.8-7-6.8zm-5.9 32.6H9.7c-3.2 0-6-2.3-6.5-5.4h54.3c-.5 3-3.2 5.4-6.4 5.4zm-30.7-8.5c-5.2-3.5-8.2-9.3-8.2-15.6v-9.6h36.4V25c-.1 6.3-3.1 12-8.2 15.4h-20zM61 23.7c0 2.2-1.8 4-4 4h-5.4v-8.4H57c2.2 0 4 1.8 4 4v.4z"/>
	</g>
</svg>
	);
};

export default CupAlt;