import React from 'react';

function Cutlery(props) {
	const title = props.title || "cutlery";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.7 10.4c-4.9-4.9-15.6-1.5-21.9 4.8l-.1.1c-1.5 1.5-2.2 3.5-2.2 5.6.1 2.1 1 4.1 2.5 5.6l1.9 1.9-9 8.9-5.4-5.4c1.8-1.9 2.8-4.4 2.8-6.9 0-2.6-1-5-2.8-6.8L16.4 7c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l11.1 11.1c1.2 1.2 1.9 2.9 1.9 4.7 0 1.8-.7 3.5-1.9 4.8L9.5 13.9c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l15.9 15.8c-2.8 2.5-7 2.5-9.5 0l-11.2-11c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1L11.6 34c1.9 1.9 4.3 2.8 6.8 2.8s5-.9 7-2.8l5.4 5.4-15.4 15.4c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4L33 41.5 48.4 57c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.6-.6.6-1.5 0-2.1L35.1 39.4l9-8.9 1.5 1.5c1.6 1.6 3.8 2.5 5.9 2.5 2 0 3.9-.7 5.4-2.2C61.1 28 64 21.7 64 16.7c0-2.7-.8-4.8-2.3-6.3zm-7 19.7c-1.9 1.8-5 1.7-7-.3l-5.5-5.5c-1-1-1.5-2.2-1.6-3.6-.1-1.3.4-2.5 1.3-3.4 3.9-3.9 9.4-6.2 13.5-6.2 1.8 0 3.3.4 4.2 1.4.9.9 1.4 2.3 1.4 4.2 0 4.2-2.6 9.7-6.3 13.4z"/>
	</g>
</svg>
	);
};

export default Cutlery;