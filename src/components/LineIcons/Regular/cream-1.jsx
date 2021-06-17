import React from 'react';

function Cream1(props) {
	const title = props.title || "cream 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.1 16.2h-1.7V6c0-2.6-2.1-4.8-4.8-4.8H14.3c-2.6 0-4.8 2.1-4.8 4.8v10.2H7.9c-2.6 0-4.8 2.1-4.8 4.8v37c0 2.6 2.1 4.8 4.8 4.8h48.3c2.6 0 4.8-2.1 4.8-4.8V21c-.1-2.7-2.2-4.8-4.9-4.8zM13 6c0-.7.6-1.3 1.3-1.3h35.4c.7.1 1.3.6 1.3 1.3v10.2H13V6zM6.6 32.7h19.9c.7 0 1.3.6 1.3 1.3v11.2c0 .7-.6 1.3-1.3 1.3H6.6V32.7zM57.4 58c0 .7-.6 1.3-1.3 1.3H7.9c-.7 0-1.3-.6-1.3-1.3v-8.2h19.9c2.6 0 4.8-2.1 4.8-4.8V33.9c0-2.6-2.1-4.8-4.8-4.8H6.6V21c0-.7.6-1.3 1.3-1.3H56.1c.7 0 1.3.6 1.3 1.3v37z"/>
	</g>
</svg>
	);
};

export default Cream1;