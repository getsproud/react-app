import React from 'react';

function LockAlt(props) {
	const title = props.title || "lock alt";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.4 19.6V16c0-8.2-6.1-15.2-14-15.9-4.4-.4-8.7 1-11.8 3.9-3.1 2.9-4.9 6.9-4.9 11.2v4.3c-6.2.8-11.1 6.2-11.1 12.6v19.8C5.5 58.6 11 64 17.6 64h28.7c6.7 0 12.1-5.4 12.1-12.1V32c.1-6.3-4.8-11.6-11-12.4zM23.6 6.3c2.6-2.4 6-3.5 9.5-3.2 6.3.5 11.2 6.2 11.2 12.9v3.5H19.6v-4.2c0-3.5 1.5-6.7 4-9zm31.8 45.6c0 5-4.1 9.1-9.1 9.1H17.6c-5 0-9.1-4.1-9.1-9.1V32.2c0-5.4 4.4-9.8 9.8-9.8h27.2c5.5 0 9.9 4.3 9.9 9.6v19.9z"/>
		<path d="M32 36c-.8 0-1.5.7-1.5 1.5v11.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V37.5c0-.8-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default LockAlt;