import React from 'react';

function DownRightArrowBox(props) {
	const title = props.title || "down right arrow box";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.1 26.8c-1-.1-1.8.7-1.8 1.7L43 40.4 21.3 19c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l21.6 21.4-12 .4c-1 0-1.7.8-1.7 1.8 0 .9.8 1.7 1.7 1.7h.1l13.6-.5h.1c2.1-.2 3.8-1.9 4-4l.3-13.7c.3-.9-.5-1.7-1.4-1.8z"/>
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v50z"/>
	</g>
</svg>
	);
};

export default DownRightArrowBox;