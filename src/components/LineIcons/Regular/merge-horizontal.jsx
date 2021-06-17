import React from 'react';

function MergeHorizontal(props) {
	const title = props.title || "merge horizontal";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.5 50c-2.6-2.2-6.3-2.2-8.9 0l-11.4 9.6c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l11.4-9.6c1.3-1.1 3.2-1.1 4.4 0l11.4 9.6c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5L36.5 50z"/>
		<path d="M27.5 14c1.3 1.1 2.9 1.6 4.5 1.6s3.2-.5 4.5-1.6l11.4-9.6c.7-.6.8-1.7.2-2.5-.6-.7-1.7-.8-2.5-.2l-11.4 9.6c-1.3 1.1-3.2 1.1-4.4 0L18.3 1.7c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5L27.5 14z"/>
		<path d="M48 30.3H16c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h32c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default MergeHorizontal;