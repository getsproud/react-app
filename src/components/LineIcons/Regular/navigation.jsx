import React from 'react';

function Navigation(props) {
	const title = props.title || "navigation";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 33L6.4 1.7c-1.3-.8-3-.5-4.1.6C1.2 3.4.9 5.1 1.7 6.4L33 61c.6 1.1 1.8 1.7 3 1.7h.2c1.3-.1 2.5-.8 3-2l6.7-14.9 14.9-6.7c1.2-.5 2-1.7 2-3s-.7-2.5-1.8-3.1zm-16.1 9.4l-8.1-8.1c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l8.1 8.1L36 59.3 4.7 4.8 59.3 36l-14.4 6.4z"/>
	</g>
</svg>
	);
};

export default Navigation;