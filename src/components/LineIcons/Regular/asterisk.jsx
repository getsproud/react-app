import React from 'react';

function Asterisk(props) {
	const title = props.title || "asterisk";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3H36.2l17.5-17.5c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L33.8 27.8V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v24.8L12.7 10.3c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l17.5 17.5H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h24.8L10.3 51.3c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l17.5-17.5V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V36.2l17.5 17.5c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L36.2 33.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default Asterisk;