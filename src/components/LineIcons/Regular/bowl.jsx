import React from 'react';

function Bowl(props) {
	const title = props.title || "bowl";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.7 16.7a4.1 4.1 0 0 0-3.1-1.4H5.5c-1.2 0-2.3.5-3.1 1.4-.8.9-1.2 2-1.1 3.2.9 9.5 6.3 18 14.5 22.9v1.8c0 2.3 1.9 4.2 4.2 4.2h24c2.3 0 4.2-1.9 4.2-4.2v-1.8c2.1-1.3 4.1-2.8 5.9-4.6 4.9-4.9 8-11.4 8.6-18.3.1-1.2-.2-2.4-1-3.2zM4.9 19c.1 0 .3-.2.6-.2h53.1c.2 0 .4.1.5.2.1.1.2.3.2.5-.2 2.1-.7 4.1-1.3 6H6c-.7-1.9-1.1-3.9-1.3-6 0-.2.2-.4.2-.5zm46.7 16.7c-1.8 1.8-3.8 3.3-6 4.5-.6.3-.9.9-.9 1.5v2.8c0 .4-.3.7-.7.7H20c-.4 0-.7-.3-.7-.7v-2.8c0-.6-.3-1.2-.9-1.5-4.7-2.6-8.4-6.5-10.8-11.1h48.9c-1.3 2.4-2.9 4.6-4.9 6.6z"/>
	</g>
</svg>
	);
};

export default Bowl;