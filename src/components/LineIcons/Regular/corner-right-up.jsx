import React from 'react';

function CornerRightUp(props) {
	const title = props.title || "corner right up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.1 18.1l-14.3-12c-3.1-2.6-7.5-2.6-10.6 0L23 18.1c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l14.3-12c.4-.3.8-.6 1.3-.8v42.7c0 3.1-2.5 5.6-5.6 5.6H3c-1 0-1.8.8-1.8 1.8S2 59.8 3 59.8h32.2c5 0 9.1-4.1 9.1-9.1V8c.5.2.9.4 1.3.8l14.3 12c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.7-.8.6-1.9-.2-2.5z"/>
	</g>
</svg>
	);
};

export default CornerRightUp;