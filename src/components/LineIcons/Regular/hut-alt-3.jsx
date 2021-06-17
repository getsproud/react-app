import React from 'react';

function HutAlt3(props) {
	const title = props.title || "hut alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.9 22.2L35.2 7.4c-1.8-1-4.1-1-5.9 0L2.2 22.2c-.8.5-1.2 1.5-.7 2.4.3.6.9.9 1.5.9.3 0 .6-.1.8-.2l6.1-3.4v30.7c0 2.6 2.1 4.8 4.8 4.8h34.6c2.6 0 4.8-2.1 4.8-4.8V21.9l6.1 3.4c.8.5 1.9.2 2.4-.7.4-.8.1-1.9-.7-2.4zM50.5 52.6c0 .7-.6 1.3-1.3 1.3H14.7c-.7 0-1.3-.6-1.3-1.3V22.8h37.1v29.8zM14.8 19.3l16.1-8.8c.8-.4 1.7-.4 2.5 0l15.9 8.8H14.8z"/>
	</g>
</svg>
	);
};

export default HutAlt3;