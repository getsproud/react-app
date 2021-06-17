import React from 'react';

function Spinner10(props) {
	const title = props.title || "spinner 10";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.3 8.3c-3.7-2.7-8-4.5-12.7-5.3-1.7-.3-3.2 1-3.2 2.7v3.7c0 1.3.9 2.5 2.2 2.7 2.9.5 5.6 1.7 7.9 3.3 1.1.7 2.5.6 3.5-.3l2.6-2.6c1.2-1.2 1-3.2-.3-4.2z"/>
		<path d="M54.6 30.6h3.7c1.7 0 3-1.5 2.7-3.2-.7-4.7-2.6-9-5.3-12.7-1-1.4-3-1.5-4.2-.3L48.9 17c-.9.9-1.1 2.4-.3 3.5 1.6 2.3 2.8 5 3.3 7.9.2 1.3 1.3 2.2 2.7 2.2z"/>
		<path d="M48.9 47l2.6 2.6c1.2 1.2 3.2 1 4.2-.3 2.7-3.7 4.5-8 5.3-12.7.3-1.7-1-3.2-2.7-3.2h-3.7c-1.3 0-2.5.9-2.7 2.2-.5 2.9-1.7 5.6-3.3 7.9-.8 1.1-.6 2.5.3 3.5z"/>
		<path d="M33.4 54.6v3.7c0 1.7 1.5 3 3.2 2.7 4.7-.7 9-2.6 12.7-5.3 1.4-1 1.5-3 .3-4.2L47 48.9c-.9-.9-2.4-1.1-3.5-.3-2.3 1.6-5 2.8-7.9 3.3-1.3.2-2.2 1.3-2.2 2.7z"/>
		<path d="M20.5 15.5c2.3-1.6 5-2.8 7.9-3.3 1.3-.2 2.2-1.4 2.2-2.7V5.8c0-1.7-1.5-3-3.2-2.7-4.7.7-9 2.6-12.7 5.3-1.4 1-1.5 3-.3 4.2l2.6 2.6c1 .8 2.4 1 3.5.3z"/>
		<path d="M14.7 55.7c3.7 2.7 8 4.5 12.7 5.3 1.7.3 3.2-1 3.2-2.7v-3.7c0-1.3-.9-2.5-2.2-2.7-2.9-.5-5.6-1.7-7.9-3.3-1.1-.8-2.5-.6-3.5.3l-2.6 2.6c-1.2 1.2-1 3.2.3 4.2z"/>
		<path d="M9.4 33.4H5.8c-1.7 0-3 1.5-2.7 3.2.7 4.7 2.6 9 5.3 12.7 1 1.4 3 1.5 4.2.3l2.6-2.6c.9-.9 1.1-2.4.3-3.5-1.6-2.3-2.8-5-3.3-7.9-.3-1.3-1.4-2.2-2.8-2.2z"/>
		<path d="M15.1 17l-2.6-2.6c-1.2-1.2-3.2-1-4.2.3-2.7 3.7-4.5 8-5.3 12.7-.3 1.7 1 3.2 2.7 3.2h3.7c1.3 0 2.5-.9 2.7-2.2.5-2.9 1.7-5.6 3.3-7.9.8-1.1.6-2.5-.3-3.5z"/>
	</g>
</svg>
	);
};

export default Spinner10;