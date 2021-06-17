import React from 'react';

function WineGlass(props) {
	const title = props.title || "wine glass";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.7 42.3c3.5-3.8 5.3-8.9 5-14.1L49.1 6.7c-.2-3.1-2.8-5.5-5.9-5.5H20.7c-3.1 0-5.7 2.4-5.9 5.5l-1.6 21.5c-.4 5.2 1.4 10.3 5 14.1 3.1 3.4 7.4 5.5 12 5.9v11.1h-7.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h19.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-7.8V48.2c4.6-.4 8.9-2.5 12-5.9zm-25-37.6h22.5c1.2 0 2.3 1 2.4 2.2l.7 9H17.7l.7-9c0-1.2 1.1-2.2 2.3-2.2zm-3.9 23.7l.6-8.9h29.1l.6 8.9c.3 4.3-1.1 8.3-4 11.5-2.9 3.1-6.9 4.9-11.2 4.9s-8.2-1.7-11.2-4.9c-2.8-3.1-4.2-7.2-3.9-11.5z"/>
	</g>
</svg>
	);
};

export default WineGlass;