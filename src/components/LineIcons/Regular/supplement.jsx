import React from 'react';

function Supplement(props) {
	const title = props.title || "supplement";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 3.2H3c-1 0-1.7.8-1.7 1.7v14.7c0 1 .8 1.8 1.8 1.8h2v31.7c0 4.3 3.5 7.8 7.8 7.8h38.6c4.3 0 7.8-3.5 7.8-7.8V21.4h2c1 0 1.8-.8 1.8-1.8V4.9C62.8 4 62 3.2 61 3.2zm-5.5 49.9c0 2.3-1.9 4.3-4.3 4.3H12.7c-2.3 0-4.3-1.9-4.3-4.3V21.4h47.1v31.7zm3.8-35.2H4.7V6.7h54.5v11.2z"/>
		<path d="M22.1 51.4h19.7c2.6 0 4.8-2.1 4.8-4.8V38c0-2.6-2.1-4.8-4.8-4.8H22.1c-2.6 0-4.8 2.1-4.8 4.8v8.7c.1 2.6 2.2 4.7 4.8 4.7zM20.9 38c0-.7.6-1.3 1.3-1.3h19.7c.7 0 1.3.6 1.3 1.3v8.7c0 .7-.6 1.3-1.3 1.3H22.1c-.7 0-1.3-.6-1.3-1.3V38z"/>
	</g>
</svg>
	);
};

export default Supplement;