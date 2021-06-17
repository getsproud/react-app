import React from 'react';

function CornerLeftDown(props) {
	const title = props.title || "corner left down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 4.2H28.8c-5 0-9.1 4.1-9.1 9.1V56c-.5-.2-.9-.4-1.3-.8l-14.3-12c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l14.3 12c1.5 1.3 3.4 1.9 5.3 1.9s3.8-.6 5.3-1.9l14.3-12c.7-.6.8-1.7.2-2.5-.6-.7-1.7-.8-2.5-.2l-14.3 12c-.4.3-.8.6-1.3.8V13.3c0-3.1 2.5-5.6 5.6-5.6H61c1 0 1.8-.8 1.8-1.8S62 4.2 61 4.2z"/>
	</g>
</svg>
	);
};

export default CornerLeftDown;