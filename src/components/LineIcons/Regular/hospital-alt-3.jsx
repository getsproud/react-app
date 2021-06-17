import React from 'react';

function HospitalAlt3(props) {
	const title = props.title || "hospital alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 18.7l-13.6-6.1V8c0-.7-.4-1.3-1-1.6l-11-4.9c-.5-.2-1-.2-1.4 0l-11 4.9c-.6.3-1 .9-1 1.6v4.6L5.6 18.7c-2.7 1.2-4.4 3.8-4.4 6.7v31.2c0 3.3 2.7 6 6 6H56.8c3.3 0 6-2.7 6-6V25.4c0-2.9-1.8-5.5-4.4-6.7zm-53.6 38V25.4c0-1.5.9-2.9 2.3-3.5l12.2-5.4v42.7h-12c-1.4-.1-2.5-1.2-2.5-2.5zM39 59.1H22.8v-50L32 5l9.2 4.1v50H39zm20.3-2.4c0 1.4-1.1 2.5-2.5 2.5h-12V16.5L57 21.9c1.4.6 2.3 2 2.3 3.5v31.3z"/>
		<path d="M36 16.2h-2.3v-2.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.3H28c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.3V22c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.3H36c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default HospitalAlt3;