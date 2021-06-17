import React from 'react';

function EnvelopeAlt(props) {
	const title = props.title || "envelope alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 12.7H7c-2.2 0-4 1.8-4 4v30.7c0 2.2 1.8 4 4 4h50c2.2 0 4-1.8 4-4V16.7c0-2.2-1.8-4-4-4zm.5 5.2v29.2L38.9 29.3l18.6-11.4zM29 31.7c.9.6 2 .8 3 .8s2.1-.3 3-.8l.8-.5 17.4 16.6H10.4l17.8-16.6.8.5zm24.6-15.5L33.2 28.7c-.7.4-1.6.4-2.3 0L10.3 16.2h43.3zM25.1 29.3L6.5 46.7V17.9l18.6 11.4z"/>
	</g>
</svg>
	);
};

export default EnvelopeAlt;