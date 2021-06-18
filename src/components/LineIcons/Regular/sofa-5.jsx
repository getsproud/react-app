import React from 'react';

function Sofa5(props) {
	const title = props.title || "sofa 5";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.2 24.5h-3.3V7.3c0-3.4-2.7-6.1-6.1-6.1H16.3c-3.4 0-6.1 2.7-6.1 6.1v17.2H6.8c-1 0-1.8.8-1.8 1.8v23.9c0 3.1 2.3 5.7 5.3 6V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.7h36.2V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.8c3-.4 5.3-2.9 5.3-6V26.3c-.1-1-.9-1.8-1.8-1.8zM13.7 7.3c0-1.4 1.2-2.6 2.6-2.6h31.5c1.4 0 2.6 1.2 2.6 2.6v17.2H47c-1 0-1.8.8-1.8 1.8V38H18.7V26.3c0-1-.8-1.8-1.8-1.8h-3.3V7.3zm41.7 42.9c0 1.4-1.2 2.6-2.6 2.6H11.2c-1.4 0-2.6-1.2-2.6-2.6V28h6.6v11.7c0 1 .8 1.8 1.8 1.8h30c1 0 1.8-.8 1.8-1.8V28h6.6v22.2z"/>
	</g>
</svg>
	);
};

export default Sofa5;