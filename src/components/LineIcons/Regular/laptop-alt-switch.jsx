import React from 'react';

function LaptopAltSwitch(props) {
	const title = props.title || "laptop alt switch";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 41.8h-3.4V15.2c0-4-3.3-7.3-7.3-7.3H13.7c-4 0-7.3 3.3-7.3 7.3v26.6H3c-1 0-1.8.8-1.8 1.8v4.2c0 4.6 3.8 8.4 8.4 8.4h44.7c4.6 0 8.4-3.8 8.4-8.4v-4.2c.1-1.1-.7-1.8-1.7-1.8zM9.9 15.2c0-2.1 1.7-3.8 3.8-3.8h36.6c2.1 0 3.8 1.7 3.8 3.8v26.6H38.8c-.5 0-1 .2-1.3.6L36.2 44h-8.7L26 42.3c-.3-.4-.8-.6-1.3-.6H9.9V15.2zm49.4 32.5c0 2.7-2.2 4.9-4.9 4.9H9.6c-2.7 0-4.9-2.2-4.9-4.9v-2.5h19.2l1.4 1.6c.3.4.8.6 1.3.6h10.3c.5 0 1-.2 1.3-.6l1.3-1.6h19.7v2.5z"/>
		<path d="M30 19.4h4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-4c-1 0-1.8.8-1.8 1.8s.9 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default LaptopAltSwitch;