import React from 'react';

function Reservoir(props) {
	const title = props.title || "reservoir";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.3 60.7L47 35.6V13.3c0-2.1-1-4-2.8-5.1l-8.9-5.9c-2.1-1.4-4.7-1.4-6.8 0l-8.9 5.9c-1.7 1.1-2.8 3.1-2.8 5.1v22.3l-4.2 25.1c-.1.7.2 1.4.8 1.8.3.2.6.2.9.2.4 0 .8-.1 1.1-.4L32 48.9l16.4 13.5c.3.3.7.4 1.1.4.3 0 .6-.1.9-.2.6-.5 1-1.2.9-1.9zM20.4 13.3c0-.9.4-1.7 1.2-2.2l8.9-5.9c.9-.6 2-.6 2.9 0l8.9 5.9c.7.5 1.2 1.3 1.2 2.2v18.8H20.4V13.3zm22.2 22.3L32 44.4l-10.6-8.7h21.2zM17 56.7L20 39l9.3 7.6L17 56.7zm17.8-10.1l9.3-7.6 3 17.7-12.3-10.1z"/>
	</g>
</svg>
	);
};

export default Reservoir;