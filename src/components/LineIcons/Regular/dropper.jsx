import React from 'react';

function Dropper(props) {
	const title = props.title || "dropper";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.8 15h-3.7V8.4c0-3.9-3.2-7.2-7.2-7.2-3.9 0-7.2 3.2-7.2 7.2V15H21c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.7v24.6c0 .3.1.7.3 1l5.1 7.7V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-9.2l5.1-7.7c.2-.3.3-.6.3-1V18.5h3.7c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM28.3 8.4c0-2 1.6-3.7 3.7-3.7 2 0 3.7 1.6 3.7 3.7V15h-7.3V8.4zm7.4 34.2L32 48.1l-3.7-5.5V18.5h7.3v24.1z"/>
	</g>
</svg>
	);
};

export default Dropper;