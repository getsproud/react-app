import React from 'react';

function ToriiGate(props) {
	const title = props.title || "torii gate";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.6 4.7c.9-.3 1.5-1.3 1.2-2.2-.3-.9-1.3-1.5-2.2-1.2-26.3 7.9-48.8 1.4-53.1.1-.1 0-.2-.1-.2-.1-1-.2-1.9.3-2.1 1.3-.3.9.3 1.9 1.2 2.1 2.7.9 12.4 3.7 25.8 3.9v9H5.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.5V27H5.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.6V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V30.4h36.6V61c0 1 .8 1.8 1.8 1.8S54 62 54 61V30.4h4.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H54V21h4.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H34v-9c7.5.1 16.4-1 25.6-3.7zm-9.3 22.2H13.7v-5.8h36.6v5.8z"/>
	</g>
</svg>
	);
};

export default ToriiGate;