import React from 'react';

function CornerDoubleRightUp(props) {
	const title = props.title || "corner double right up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.3 21.4c-2.5-2.1-6.1-2.1-8.6 0l-10.8 9.1c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2L38 24c.1-.1.2-.1.3-.2v31.6c0 2.1-1.7 3.8-3.8 3.8H10.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h24.4c4 0 7.3-3.3 7.3-7.3V23.9c.1.1.2.1.3.2l10.8 9.1c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5l-10.8-9.1z"/>
		<path d="M27.2 14.6L38 5.5c1.2-1 2.9-1 4.1 0l10.8 9.1c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5L44.3 2.8c-2.5-2.1-6.1-2.1-8.6 0l-10.8 9.1c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2z"/>
	</g>
</svg>
	);
};

export default CornerDoubleRightUp;