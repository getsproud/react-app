import React from 'react';

function MoreAlt(props) {
	const title = props.title || "more alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<circle cx="8" cy="32" r="8"/>
		<circle cx="32" cy="32" r="8"/>
		<circle cx="56" cy="32" r="8"/>
	</g>
</svg>
	);
};

export default MoreAlt;