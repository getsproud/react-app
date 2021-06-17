import React from 'react';

function Window2(props) {
	const title = props.title || "window 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 53h-3.3V19.9c0-6.8-5.6-12.4-12.4-12.4H18.7C11.9 7.5 6.3 13 6.3 19.9V53H3c-1 0-1.8.8-1.8 1.8S2 56.5 3 56.5h58c1 0 1.8-.8 1.8-1.8S62 53 61 53zM9.8 19.9c0-4.9 4-8.9 8.9-8.9h26.6c4.9 0 8.9 4 8.9 8.9V53h-4.8V20.3c0-2.6-2.1-4.8-4.8-4.8H19.3c-2.6 0-4.8 2.1-4.8 4.8V53H9.8V19.9zm8.3.4c0-.7.6-1.3 1.3-1.3h10.9v34H18.1V20.3zM33.8 53V19h10.9c.7 0 1.3.6 1.3 1.3V53H33.8z"/>
	</g>
</svg>
	);
};

export default Window2;