import React from 'react';

function CornerLeftUp(props) {
	const title = props.title || "corner left up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 56.3H28.8c-3.1 0-5.6-2.5-5.6-5.6V8c.5.2.9.4 1.3.8l14.3 12c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5l-14.3-12c-3.1-2.6-7.5-2.6-10.6 0l-14.3 12c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l14.3-12c.4-.3.8-.6 1.3-.8v42.7c0 5 4.1 9.1 9.1 9.1H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default CornerLeftUp;