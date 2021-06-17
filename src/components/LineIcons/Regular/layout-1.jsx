import React from 'react';

function Layout1(props) {
	const title = props.title || "layout 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.8c.1-4.2-3.3-7.5-7.5-7.5zm4.1 7.5V20h-14V4.8h9.9c2.2 0 4.1 1.8 4.1 4zm-50.5-4h33V20h-37V8.8c0-2.2 1.8-4 4-4zm-4 50.4V23.5h37.1v35.7h-33c-2.3.1-4.1-1.8-4.1-4zm50.4 4.1h-9.9V23.5h13.9v31.7c.1 2.2-1.8 4.1-4 4.1z"/>
	</g>
</svg>
	);
};

export default Layout1;