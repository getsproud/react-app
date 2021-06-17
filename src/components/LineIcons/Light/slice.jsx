import React from 'react';

function Slice(props) {
	const title = props.title || "slice";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.2 54.7L50.7 42.1 14.5 5.9c-.6-.6-1.6-.6-2.1 0L.4 17.8c-.6.6-.6 1.5 0 2.1l36.3 36.3c.3.3.7.4 1.1.4s.8-.1 1.1-.4l2.1-2.1 4.2 4c.3.3.6.4 1 .4h15.5c1 0 1.8-.6 2.1-1.5.4-.9.1-1.8-.6-2.3zM13.4 9.1l6.1 6.1L9.8 25l-6.1-6.1 9.7-9.8zm24.4 44l-25.9-26 3.8-3.8 8 7.9c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.6-.6.6-1.5 0-2.1l-8-7.9 3.9-3.9 25.9 25.9-9.9 9.9zm9.1 2.4L43.1 52l6.6-6.6 10.1 10.1H46.9z"/>
	</g>
</svg>
	);
};

export default Slice;