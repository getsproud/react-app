import React from 'react';

function PaintBucket(props) {
	const title = props.title || "paint bucket";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.6 38.3L33.5 11.7V7.6C33.5 3.4 29.7 0 25 0s-8.5 3.4-8.5 7.6l.1 16.1v.3l-13 12.7c-.6.5-.9 1.2-.9 2s.3 1.6.9 2.2l22.8 22.3c.6.6 1.3.8 2 .8s1.5-.3 2.1-.8l20.9-20.5 7.8-.6c.8-.1 1.6-.7 1.8-1.5.4-.9.2-1.7-.4-2.3zm-41-30.7C19.6 5.1 22.1 3 25 3s5.5 2.1 5.5 4.6v2.9L19.6 21.1V7.6zm30.6 32.2L28.6 61h-.1L5.8 38.8l25.5-24.9c.1 0 .1.1.2.1l8.7 8.6-6.9 6.9c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l7-6.9 5 4.9L43 34c-.6.6-.6 1.5 0 2.1.3.3.7.5 1.1.5.4 0 .8-.1 1-.4l4.5-4.5 7.6 7.4-7 .7z"/>
	</g>
</svg>
	);
};

export default PaintBucket;