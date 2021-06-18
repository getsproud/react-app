import React from 'react';

function VrLaptop(props) {
	const title = props.title || "vr laptop";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M20.4 34.5h7.1c.5 0 .9-.2 1.2-.5l3.3-3.3 3.3 3.3c.3.3.8.5 1.2.5h7.1c3.4 0 6.1-2.7 6.1-6.1v-9.3c0-3.4-2.7-6.1-6.1-6.1h-1.3v-1c0-3.4-2.7-6.1-6.1-6.1h-8.4c-3.4 0-6.1 2.7-6.1 6.1v1h-1.3c-3.4 0-6.1 2.7-6.1 6.1v9.3c0 3.3 2.7 6.1 6.1 6.1zm7.4-25.1h8.4c1.4 0 2.6 1.2 2.6 2.6v1H25.2v-1c0-1.5 1.2-2.6 2.6-2.6zm-7.4 7.1H43.7c1.4 0 2.6 1.2 2.6 2.6v1.8h-3.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.7v4c0 1.4-1.2 2.6-2.6 2.6h-6.4l-4-4c-.7-.7-1.8-.7-2.5 0l-4 4h-6.4c-1.4 0-2.6-1.2-2.6-2.6v-4h3.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-3.7v-1.8c0-1.4 1.1-2.6 2.6-2.6z"/>
		<path d="M61 54.6h-4.3V26.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v28.1H10.8V26.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v28.1H3c-1 0-1.8.8-1.8 1.8S2 58.1 3 58.1H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default VrLaptop;