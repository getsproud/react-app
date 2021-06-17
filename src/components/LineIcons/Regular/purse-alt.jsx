import React from 'react';

function PurseAlt(props) {
	const title = props.title || "purse alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 12H6c-2.6 0-4.8 2.1-4.8 4.8v30.6C1.3 49.9 3.4 52 6 52h52c2.6 0 4.8-2.1 4.8-4.8V16.7c-.1-2.6-2.2-4.7-4.8-4.7zM6 15.5h52c.7 0 1.3.6 1.3 1.3v9.6l-25.5 8v-3.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.2l-25.5-8v-9.6c.1-.8.6-1.3 1.3-1.3zm52 33H6c-.7 0-1.3-.6-1.3-1.3V29.9l26.7 8.4h.1c.2 0 .3.1.5.1s.3 0 .5-.1h.1l26.7-8.4v17.3c-.1.8-.6 1.3-1.3 1.3z"/>
	</g>
</svg>
	);
};

export default PurseAlt;