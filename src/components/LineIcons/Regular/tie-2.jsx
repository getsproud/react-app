import React from 'react';

function Tie2(props) {
	const title = props.title || "tie 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M38.2 12.2l2.2-6.7c.3-1 .2-2-.4-2.9-.6-.8-1.6-1.3-2.6-1.3H26.6c-1 0-2 .5-2.6 1.3-.6.8-.8 1.9-.4 2.9l2.2 6.7-4.9 42c-.1.6.2 1.2.7 1.6l8.5 6.3c.6.4 1.2.6 1.9.6s1.3-.2 1.9-.6l8.5-6.3c.5-.4.8-1 .7-1.6l-4.9-42zM37 4.8l-1.8 5.5h-6.4L27 4.8h10zm-5 54.4l-7.5-5.6 4.6-39.8h5.8l4.6 39.8-7.5 5.6z"/>
	</g>
</svg>
	);
};

export default Tie2;