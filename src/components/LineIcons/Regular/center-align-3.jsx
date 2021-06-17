import React from 'react';

function CenterAlign3(props) {
	const title = props.title || "center align 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3h-7.7v-8c0-3.6-2.9-6.5-6.5-6.5h-2.1c-3.6 0-6.5 2.9-6.5 6.5v8H25.8V15.7c0-3.6-2.9-6.5-6.5-6.5h-2.1c-3.6 0-6.5 2.9-6.5 6.5v14.6H3c-1 0-1.8.8-1.8 1.8S2 33.9 3 33.9h7.7v14.6c0 3.6 2.9 6.5 6.5 6.5h2.1c3.6 0 6.5-2.9 6.5-6.5V33.8h12.3v8c0 3.6 2.9 6.5 6.5 6.5h2.1c3.6 0 6.5-2.9 6.5-6.5v-8H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-38.7 18c0 1.7-1.3 3-3 3h-2.1c-1.7 0-3-1.3-3-3V32.1 32 15.7c0-1.7 1.3-3 3-3h2.1c1.7 0 3 1.3 3 3v32.6zm24.5-3.5h-2.1c-1.7 0-3-1.3-3-3V22.2c0-1.7 1.3-3 3-3h2.1c1.7 0 3 1.3 3 3v19.5c0 1.7-1.4 3.1-3 3.1z"/>
	</g>
</svg>
	);
};

export default CenterAlign3;