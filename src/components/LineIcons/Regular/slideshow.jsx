import React from 'react';

function Slideshow(props) {
	const title = props.title || "slideshow";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 28.1H7c-3.2 0-5.8 2.6-5.8 5.8V57c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V33.9c0-3.2-2.6-5.8-5.8-5.8zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V33.9c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3V57z"/>
		<path d="M9.3 22.4h45.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H9.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M14.3 13.6h35.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H14.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M19.2 4.8h25.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H19.2c-1 0-1.8.8-1.8 1.8s.9 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default Slideshow;