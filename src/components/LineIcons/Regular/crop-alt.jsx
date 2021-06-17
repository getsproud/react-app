import React from 'react';

function CropAlt(props) {
	const title = props.title || "crop alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 52.3h-4.6V13.9c0-3.2-2.6-5.8-5.8-5.8H11.1V3c0-1-.8-1.8-1.8-1.8S7.6 2 7.6 3v5.2H3c-1 0-1.7.8-1.7 1.7S2 11.7 3 11.7h4.6v38.4c0 3.2 2.6 5.8 5.8 5.8h39.5V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.2H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-49.9-2.2V11.7h39.5c1.2 0 2.3 1 2.3 2.3v38.4H13.4c-1.3-.1-2.3-1.1-2.3-2.3z"/>
	</g>
</svg>
	);
};

export default CropAlt;