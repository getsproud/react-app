import React from 'react';

function FactoryAlt6(props) {
	const title = props.title || "factory alt 6";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 12.6h-5.6V4.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v8.6h-5.6c-2.6 0-4.8 2.1-4.8 4.8v9.2H6c-2.6 0-4.8 2.1-4.8 4.8v25.7C1.2 59.8 3.3 62 6 62h52c2.6 0 4.8-2.1 4.8-4.8V17.4c0-2.7-2.2-4.8-4.8-4.8zM4.8 56.9V31.3c0-.7.5-1.3 1.2-1.3h32.6v28.2h-8.1V43.4c0-2.6-2.1-4.8-4.8-4.8h-8.2c-2.6 0-4.8 2.1-4.8 4.8v14.7H6c-.7.1-1.2-.5-1.2-1.2zm11.5 1.3V43.4c0-.7.6-1.3 1.3-1.3h8.2c.7 0 1.3.6 1.3 1.3v14.7H16.3zm43-1.3c0 .7-.6 1.3-1.3 1.3H42.1V17.4c0-.7.6-1.3 1.3-1.3H58c.7 0 1.3.6 1.3 1.3v39.5z"/>
	</g>
</svg>
	);
};

export default FactoryAlt6;