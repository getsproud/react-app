import React from 'react';

function CapsuleAlt1(props) {
	const title = props.title || "capsule alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.4 11.5c-2.2-3.6-5.6-6-9.6-7-4-.9-8.1-.2-11.6 2l-14.7 9.3c-.8.5-1.1 1.6-.6 2.4L34 34.6 20.5 20.8c-.7-.7-1.8-.7-2.5 0L5.8 33.2c-6 6.1-6 16 0 22 2.9 3 6.8 4.6 10.9 4.6 4.1 0 8-1.6 10.9-4.6l12.2-12.4c.1-.1.2-.2.3-.4.3 0 .5-.1.8-.2L55.5 33c7.2-4.6 9.4-14.2 4.9-21.5zM25.1 52.8c-2.2 2.3-5.2 3.5-8.4 3.5s-6.2-1.3-8.4-3.5c-4.7-4.7-4.7-12.4 0-17.1l11-11.1 16.9 17.1-11.1 11.1zM53.6 30l-13.2 8.3-12.6-20.5L41 9.5c2.7-1.7 5.9-2.2 9-1.5 3.1.7 5.8 2.6 7.4 5.4 3.5 5.6 1.8 13.1-3.8 16.6z"/>
	</g>
</svg>
	);
};

export default CapsuleAlt1;