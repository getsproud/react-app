import React from 'react';

function EnvelopeAlt(props) {
	const title = props.title || "envelope alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.8 10.8H2.2c-1.1 0-2 .9-2 2v38.4c0 1.1.9 2 2 2h59.6c1.1 0 2-.9 2-2V12.8c0-1.1-.9-2-2-2zm-1 3zM28.9 31.3c.9.6 2 .9 3.1.9s2.1-.3 3.1-.9l.8-.5 20.8 19.4H6.8l21-19.6 1.1.7zm9.7-2.1l22.2-13.6V50L38.6 29.2zm19.3-15.4L33.5 28.7c-.9.6-2.1.6-3 0L6.1 13.8h51.8zM25.1 29L3.2 49.4V15.6L25.1 29z"/>
	</g>
</svg>
	);
};

export default EnvelopeAlt;