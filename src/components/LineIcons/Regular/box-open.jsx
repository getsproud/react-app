import React from 'react';

function BoxOpen(props) {
	const title = props.title || "box open";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.8 10.3c-.9-.5-1.9-.1-2.4.7l-7.2 13.4H11.7L4.5 11c-.4-.9-1.5-1.2-2.3-.7-.9.5-1.2 1.5-.7 2.4L9 26.6v21.3c0 3.4 2.7 6.1 6.1 6.1H49c3.4 0 6.1-2.7 6.1-6.1V26.5l7.5-13.9c.4-.8.1-1.9-.8-2.3zM49 50.4H15c-1.4 0-2.6-1.2-2.6-2.6v-20h39.1v20c.1 1.5-1.1 2.6-2.5 2.6z"/>
		<path d="M44.4 42.1h-3.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default BoxOpen;