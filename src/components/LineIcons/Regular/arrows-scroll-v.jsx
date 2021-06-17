import React from 'react';

function ArrowsScrollV(props) {
	const title = props.title || "arrows scroll v";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M25.2 20.8c2 1.7 4.4 2.5 6.8 2.5 2.4 0 4.9-.8 6.8-2.5L58.4 4.3c.7-.6.8-1.7.2-2.5-.6-.7-1.7-.8-2.4-.1L36.6 18.1c-2.7 2.2-6.5 2.2-9.2 0L7.8 1.7c-.7-.7-1.8-.6-2.4.2-.6.7-.5 1.8.2 2.4l19.6 16.5z"/>
		<path d="M38.8 43.2c-4-3.3-9.7-3.3-13.7 0L5.6 59.7c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.4.1l19.6-16.4c2.7-2.2 6.5-2.2 9.2 0l19.6 16.4c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5L38.8 43.2z"/>
	</g>
</svg>
	);
};

export default ArrowsScrollV;