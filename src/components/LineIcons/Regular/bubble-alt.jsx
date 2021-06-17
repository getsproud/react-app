import React from 'react';

function BubbleAlt(props) {
	const title = props.title || "bubble alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.2 56c-.9 0-1.9-.2-2.8-.7l-11.9-6.8c-.3-.2-.7-.3-1-.3H6.8c-3.1 0-5.6-2.5-5.6-5.5V13.6C1.3 10.5 3.7 8 6.8 8h50.4c3.1 0 5.6 2.5 5.6 5.5v36.9c0 2-1 3.8-2.8 4.8-.9.5-1.8.8-2.8.8zM6.8 11.5c-1.1 0-2.1.9-2.1 2v29.1c0 1.1.9 2 2.1 2h34.7c1 0 1.9.3 2.8.7l11.9 6.8c.6.4 1.4.4 2.1 0 .3-.2 1-.7 1-1.8V13.6c0-1.1-.9-2-2.1-2H6.8z"/>
	</g>
</svg>
	);
};

export default BubbleAlt;