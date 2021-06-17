import React from 'react';

function ArrowsExpandUpRight(props) {
	const title = props.title || "arrows expand up right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.4 9.2c-.3-3.5-3.1-6.3-6.6-6.6l-16-1.4c-1-.1-1.8.6-1.9 1.6s.6 1.8 1.6 1.9L54.4 6c.3 0 .6.1.8.2l-26 26c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l26-26c.1.3.1.5.2.8l1.4 15.9c.1.9.8 1.6 1.7 1.6h.2c1-.1 1.7-.9 1.6-1.9L61.4 9.2z"/>
		<path d="M18.2 41.2H6c-2.6 0-4.8 2.1-4.8 4.8v12.2C1.2 60.8 3.3 63 6 63h12.2c2.6 0 4.8-2.1 4.8-4.8V45.9c-.1-2.6-2.2-4.7-4.8-4.7zm1.2 16.9c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3V45.9c0-.7.6-1.3 1.3-1.3h12.2c.7 0 1.3.6 1.3 1.3v12.2z"/>
	</g>
</svg>
	);
};

export default ArrowsExpandUpRight;