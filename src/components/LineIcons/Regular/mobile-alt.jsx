import React from 'react';

function MobileAlt(props) {
	const title = props.title || "mobile alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.4 1.3H20.6c-4.4 0-8 3.6-8 8v45.5c0 4.4 3.6 8 8 8h22.7c4.4 0 8-3.6 8-8V9.3c.1-4.5-3.5-8-7.9-8zM26.9 4.8h10.8v2.5c0 .8-.6 1.4-1.4 1.4h-8c-.8 0-1.4-.6-1.4-1.4V5.1c.1-.1.1-.2 0-.3zm21 49.9c0 2.5-2 4.5-4.5 4.5H20.6c-2.5 0-4.5-2-4.5-4.5V9.3c0-2.5 2-4.5 4.5-4.5h2.9v2.5c0 2.7 2.2 4.9 4.9 4.9h8c2.7 0 4.9-2.2 4.9-4.9V5.1v-.3h2.2c2.5 0 4.5 2 4.5 4.5v45.4z"/>
		<path d="M34.4 51.1h-4.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.8c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default MobileAlt;