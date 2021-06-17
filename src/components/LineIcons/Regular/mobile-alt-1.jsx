import React from 'react';

function MobileAlt1(props) {
	const title = props.title || "mobile alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.4 1.3H20.6c-4.4 0-8 3.6-8 8v45.5c0 4.4 3.6 8 8 8h22.7c4.4 0 8-3.6 8-8V9.3c.1-4.5-3.5-8-7.9-8zM20.6 4.8h22.7c2.5 0 4.5 2 4.5 4.5v40.3H16.1V9.3c0-2.5 2-4.5 4.5-4.5zm22.8 54.5H20.6c-2.5 0-4.5-2-4.5-4.5v-1.7h31.8v1.7c0 2.4-2 4.5-4.5 4.5z"/>
	</g>
</svg>
	);
};

export default MobileAlt1;