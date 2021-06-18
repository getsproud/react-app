import React from 'react';

function Trophy2(props) {
	const title = props.title || "trophy 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.1 59.3h-7.3v-2.5c0-1.9-1.1-3.5-2.7-4.3v-3c0-2.6-2.1-4.8-4.8-4.8h-.1l5-8.3c.2-.3.2-.6.2-.9V23.2c2.2-2.3 3.6-5.5 3.6-9 0-7.2-5.8-13-13-13S19 7 19 14.2c0 3.5 1.4 6.6 3.6 9v12.2c0 .3.1.6.2.9l5 8.3h-.1c-2.6 0-4.8 2.1-4.8 4.8v3c-1.6.8-2.7 2.4-2.7 4.3v2.5h-7.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H51c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.7-1.7zM32 4.8c5.2 0 9.5 4.3 9.5 9.5s-4.3 9.5-9.5 9.5-9.5-4.3-9.5-9.5 4.3-9.5 9.5-9.5zM26.1 35v-9.1c1.8.9 3.8 1.4 5.9 1.4 2.1 0 4.1-.5 5.9-1.4V35l-5.8 9.7h-.2L26.1 35zm.4 14.4c0-.7.6-1.3 1.3-1.3h8.6c.7 0 1.3.6 1.3 1.3V52H26.5v-2.6zm-2.8 9.9v-2.5c0-.7.6-1.3 1.3-1.3h14c.7 0 1.3.6 1.3 1.3v2.5H23.7z"/>
	</g>
</svg>
	);
};

export default Trophy2;