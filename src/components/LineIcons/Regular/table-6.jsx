import React from 'react';

function Table6(props) {
	const title = props.title || "table 6";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zm2.3 20.6v10.8H48.4V21.9h10.9zM44.9 32.8H33.8V21.9h11.1v10.9zm-14.6 0H19.1V21.9h11.1v10.9zm-14.7 0H4.8V21.9h10.9v10.9zM4.8 36.3h10.9v10.1H4.8V36.3zm14.3 0h11.1v10.1H19.1V36.3zm11.2 13.6v9.4H19.1v-9.4h11.2zm3.5 0h11.1v9.4H33.8v-9.4zm0-3.5V36.3h11.1v10.1H33.8zm14.6-10.1h10.9v10.1H48.4V36.3zM7 4.8h50c1.2 0 2.3 1 2.3 2.3v11.4H4.8V7c0-1.2 1-2.2 2.2-2.2zM4.8 57v-7.1h10.9v9.4H7c-1.2 0-2.2-1.1-2.2-2.3zM57 59.3h-8.6v-9.4h10.9V57c0 1.2-1.1 2.3-2.3 2.3z"/>
	</g>
</svg>
	);
};

export default Table6;