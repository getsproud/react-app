import React from 'react';

function ArrowAlignH(props) {
	const title = props.title || "arrow align h";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M20.8 30.3H5.7l6.1-7.2c.6-.7.5-1.8-.2-2.5-.8-.6-1.9-.5-2.6.2l-6.6 7.8c-1.7 2-1.7 4.8 0 6.8L9 43.2c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5l-6.1-7.2h15.1c1 0 1.8-.8 1.8-1.8s-.7-1.6-1.6-1.6z"/>
		<path d="M61.5 28.6L55 20.8c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l6.1 7.2H43.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h15.1l-6 7.1c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l6.6-7.8c1.7-2.1 1.7-4.9 0-6.9z"/>
		<path d="M32 19.2c-1 0-1.8.8-1.8 1.8v22.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V20.9c0-.9-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default ArrowAlignH;