import React from 'react';

function DoorAlt(props) {
	const title = props.title || "door alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.1 26.5c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2s5.2-2.3 5.2-5.2c0-2.8-2.3-5.2-5.2-5.2zm0 6.9c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7s1.7.8 1.7 1.7c0 .9-.8 1.7-1.7 1.7z"/>
		<path d="M61 59.3h-6.2V7c0-3.2-2.6-5.8-5.8-5.8H14.9c-3.2 0-5.8 2.6-5.8 5.8v52.3H3c-1 0-1.8.8-1.8 1.8S2 62.8 3 62.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-48.3 0V7c0-1.2 1-2.3 2.3-2.3h34.2c1.2 0 2.3 1 2.3 2.3v52.3H12.7z"/>
	</g>
</svg>
	);
};

export default DoorAlt;