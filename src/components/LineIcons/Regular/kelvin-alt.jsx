import React from 'react';

function KelvinAlt(props) {
	const title = props.title || "kelvin alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M13.2 1.3c-5 0-9.1 4.1-9.1 9.1s4.1 9.1 9.1 9.1 9.1-4.1 9.1-9.1-4-9.1-9.1-9.1zm0 14.7c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6z"/>
		<path d="M59.1 53L38.8 40.3l20.2-11c.9-.5 1.2-1.5.7-2.4-.5-.8-1.5-1.2-2.4-.7L36.4 37.5l-.1.1V22.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V42.8L57.2 56c.3.2.6.3.9.3.6 0 1.2-.3 1.5-.8.5-.9.3-1.9-.5-2.5z"/>
	</g>
</svg>
	);
};

export default KelvinAlt;