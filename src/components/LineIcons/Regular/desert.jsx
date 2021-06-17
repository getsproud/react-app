import React from 'react';

function Desert(props) {
	const title = props.title || "desert";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 51.4c-.2-.9-1.2-1.5-2.1-1.3-2.5.6-6.4.7-10.8.3v-9.6h2.5c3.2 0 5.8-2.6 5.8-5.8v-4.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V35c0 1.2-1 2.3-2.3 2.3h-2.5V17.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V32h-5.4c-1.2 0-2.3-1-2.3-2.2v-4.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.9c0 3.2 2.6 5.7 5.8 5.7H46v14.6c-6.3-.7-13.1-2.1-17.8-3.9-9.8-3.8-25-.2-25.6-.1-.9.2-1.5 1.2-1.3 2.1.2.9 1.2 1.5 2.1 1.3.1 0 14.7-3.5 23.8-.1C34.6 52.2 46 54 54.4 54c2.8 0 5.2-.2 7-.6.9-.2 1.5-1.1 1.3-2z"/>
		<path d="M11.5 25.1c4.2 0 7.6-3.4 7.6-7.6 0-4.2-3.4-7.6-7.6-7.6s-7.6 3.4-7.6 7.6c0 4.2 3.4 7.6 7.6 7.6zm0-11.7c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1z"/>
	</g>
</svg>
	);
};

export default Desert;