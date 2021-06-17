import React from 'react';

function FileMedical1(props) {
	const title = props.title || "file medical 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.8 1.2H13.3c-2.6 0-4.8 2.1-4.8 4.8v52c0 2.6 2.1 4.8 4.8 4.8h37.5c2.6 0 4.8-2.1 4.8-4.8V6c-.1-2.6-2.2-4.8-4.8-4.8zM52 58c0 .7-.6 1.3-1.3 1.3H13.3c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h37.5c.6 0 1.2.6 1.2 1.3v52z"/>
		<path d="M39.6 29.8h-5.8V24c0-1-.8-1.8-1.8-1.8s-1.7.8-1.7 1.8v5.8h-5.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.8v5.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.8h5.8c1 0 1.8-.8 1.8-1.8s-1-1.8-1.9-1.8z"/>
	</g>
</svg>
	);
};

export default FileMedical1;