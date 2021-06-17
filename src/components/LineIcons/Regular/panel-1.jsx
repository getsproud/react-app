import React from 'react';

function Panel1(props) {
	const title = props.title || "panel 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.8c.1-4.2-3.3-7.5-7.5-7.5zm4.1 7.5v11.3H43.9V4.8h11.3c2.2 0 4.1 1.8 4.1 4zM23.6 20.1V4.8h16.8v15.4H23.6zM8.8 4.8h11.3v15.4H4.8V8.8c0-2.2 1.8-4 4-4zm46.4 54.5H8.8c-2.2 0-4-1.8-4-4V23.6h54.5v31.6c0 2.2-1.9 4.1-4.1 4.1z"/>
	</g>
</svg>
	);
};

export default Panel1;