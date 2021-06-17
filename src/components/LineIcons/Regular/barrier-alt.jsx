import React from 'react';

function BarrierAlt(props) {
	const title = props.title || "barrier alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 12.6H6c-2.6 0-4.8 2.1-4.8 4.8v10.2c0 2.6 2.1 4.8 4.8 4.8h6.1V48H9.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h7.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.1v-5h32.8v4.9h-2.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H54c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.1V32.3H58c2.6 0 4.8-2.1 4.8-4.8V17.4c0-2.7-2.2-4.8-4.8-4.8zM31.9 28.8l3.7-12.7H48l-3.7 12.7H31.9zm.1-12.7l-3.7 12.7H15.9l3.7-12.7H32zM4.8 27.6V17.4c0-.7.6-1.3 1.3-1.3h10l-3.7 12.7H6c-.7 0-1.2-.6-1.2-1.2zm43.6 11.9H15.6v-7.2h32.8v7.2zm10.9-11.9c0 .7-.6 1.3-1.3 1.3H48l3.7-12.7H58c.7 0 1.3.6 1.3 1.3v10.1z"/>
	</g>
</svg>
	);
};

export default BarrierAlt;