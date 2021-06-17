import React from 'react';

function Spinner1(props) {
	const title = props.title || "spinner 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3c-1 0-1.8.8-1.8 1.8v16.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V3c0-1-.8-1.7-1.8-1.7z"/>
		<path d="M32 43.1c-1 0-1.8.8-1.8 1.8V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V44.8c0-.9-.8-1.7-1.8-1.7z"/>
		<path d="M20.9 32c0-1-.8-1.8-1.8-1.8H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h16.2c.9 0 1.7-.8 1.7-1.8z"/>
		<path d="M61 30.3H44.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M41.1 24.7c.4 0 .9-.2 1.2-.5l11.4-11.4c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L39.8 21.7c-.7.7-.7 1.8 0 2.5.4.3.8.5 1.3.5z"/>
		<path d="M21.7 39.8L10.3 51.3c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l11.4-11.4c.7-.7.7-1.8 0-2.5s-1.7-.8-2.4-.1z"/>
		<path d="M42.3 39.8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l11.4 11.4c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L42.3 39.8z"/>
		<path d="M12.7 10.3c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l11.4 11.4c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L12.7 10.3z"/>
	</g>
</svg>
	);
};

export default Spinner1;