import React from 'react';

function Layout2(props) {
	const title = props.title || "layout 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.8c.1-4.2-3.3-7.5-7.5-7.5zm4.1 7.5V20H22.1V4.8h33.1c2.2 0 4.1 1.8 4.1 4zm-50.5-4h9.9V20H4.8V8.8c0-2.2 1.8-4 4-4zm-4 50.4V23.5h13.9v35.7H8.8c-2.2.1-4-1.8-4-4zm50.4 4.1H22.1V23.5h37.1v31.7c.1 2.2-1.8 4.1-4 4.1z"/>
	</g>
</svg>
	);
};

export default Layout2;