import React from 'react';

function GraphAlt(props) {
	const title = props.title || "graph alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 49.5h-1.6V13.1c0-.8-.7-1.5-1.5-1.5H49.2c-.8 0-1.5.7-1.5 1.5v36.4h-9V19.4c0-.8-.7-1.5-1.5-1.5H26.9c-.8 0-1.5.7-1.5 1.5v30.1h-9V26.8c0-.8-.7-1.5-1.5-1.5H4.6c-.8 0-1.5.7-1.5 1.5v22.7H1.5c-.8 0-1.5.6-1.5 1.5s.7 1.5 1.5 1.5H62.3c.8 0 1.5-.7 1.5-1.5s-.5-1.5-1.3-1.5zm-56.4 0V28.3h7.2v21.2H6.1zm22.3 0V20.9h7.2v28.6h-7.2zm22.3 0V14.6h7.2v34.9h-7.2z"/>
	</g>
</svg>
	);
};

export default GraphAlt;