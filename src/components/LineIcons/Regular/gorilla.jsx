import React from 'react';

function Gorilla(props) {
	const title = props.title || "gorilla";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M27.5 62.7h-5.4c-1 0-1.8-.8-1.8-1.8v-1.1-.8c0-1.1-1.7-2.9-3.6-4.1-1.3-.8-2.2-2.3-2.2-3.8v-4c0-.4.2-.9.5-1.2 1.6-1.7 2.9-3.8 3.9-6 .4-.9 1.4-1.3 2.3-.9.9.4 1.3 1.4.9 2.3-1 2.4-2.4 4.6-4.1 6.5v3.3c0 .3.2.7.5.8 2.5 1.5 5.3 4.2 5.3 7v.2h5.6s0-.1-.1-.1l-3.9-3.9c-.4-.4-.5-.8-.5-1.3l.6-10.8c0-.5.3-1 .7-1.3.4-.3 1-.4 1.5-.3 3.7 1 7.6.8 11.2-.4.5-.2 1-.1 1.4.1.4.2.7.7.8 1.2.5 2.2.9 3.8 1.5 5.8.1.2.1.3.1.5v4.2c0 .6-.3 1.1-.8 1.5l-.9.6c-1.1.7-1.2 1.9-1 2.7.3.8 1 1.7 2.3 1.7h3c1.1 0 2.1-.8 2.4-1.9l1.9-9.1c.9-4 1.2-5.8 1.3-6.3-.6-5-.7-9.7-.3-14.9.1-.8.6-1.4 1.4-1.6l4.1-.9c1.4-.3 2.4-1.3 2.8-2.6.4-1.4 0-2.8-1-3.8l-2-2c-.3-.3-.5-.8-.5-1.2v-3.8L51 6.7c-1.3-1.3-2.9-1.9-4.7-1.9-1.8 0-3.4.7-4.7 1.9l-4.4 4.4c-4.9 4.9-13.5 8.2-21.5 8.2-6.2 0-11.2 5-11.2 11.2V37.6l.1.3c1.7 7 2.6 14.2 2.6 21.4l7.1.1c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8h-7c-2 0-3.6-1.6-3.6-3.6 0-6.9-.9-13.8-2.5-20.6v-.1C1 38.1 1 38.1 1 35v-4.4c0-8.1 6.6-14.7 14.7-14.7 7.1 0 14.8-2.9 19-7.1l4.4-4.4c1.9-1.9 4.5-3 7.2-3s5.2 1.1 7.2 3l4.4 4.4c.7.7 1 1.6 1 2.5v3.1l1.5 1.5c1.9 1.9 2.6 4.6 1.8 7.2-.8 2.6-2.8 4.5-5.4 5.1l-2.8.6c-.3 4.5-.2 8.6.3 12.9.1.5.1.5-1.4 7.4L51.3 58c-.6 2.7-3 4.7-5.8 4.7h-3c-2.7 0-4.9-1.7-5.7-4.2-.8-2.6.2-5.2 2.4-6.6l.1-.1v-3c-.4-1.4-.8-2.6-1.1-4-3 .7-6.2.9-9.3.4l-.5 8 3.4 3.4c1 1 1.3 2.3.9 3.6-.4 1.3-1.4 2.2-2.7 2.5h-2.5zm23.6-20.5z"/>
	</g>
</svg>
	);
};

export default Gorilla;