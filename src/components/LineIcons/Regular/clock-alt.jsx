import React from 'react';

function ClockAlt(props) {
	const title = props.title || "clock alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.2H7C3.8 1.2 1.2 3.8 1.2 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c0-3.2-2.6-5.8-5.8-5.8zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v50z"/>
		<path d="M33.8 31.3V14.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V32c0 .5.2.9.5 1.2l12 12c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L33.8 31.3z"/>
	</g>
</svg>
	);
};

export default ClockAlt;