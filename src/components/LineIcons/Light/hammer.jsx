import React from 'react';

function Hammer(props) {
	const title = props.title || "hammer";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56 8.3H39v-4C39 1.9 37.1 0 34.8 0h-5.5C26.9 0 25 1.9 25 4.3v4H8c-1.4 0-2.5 1.1-2.5 2.5V31c0 1.4 1.1 2.5 2.5 2.5h17v26.2c0 2.4 1.9 4.3 4.3 4.3h5.5c2.4 0 4.3-1.9 4.3-4.3V33.5H56c1.4 0 2.5-1.1 2.5-2.5V10.8c0-1.4-1.2-2.5-2.5-2.5zm-28-4c0-.7.5-1.3 1.2-1.3h5.5c.8 0 1.3.6 1.3 1.3v4h-8v-4zm8 55.4c0 .7-.6 1.3-1.3 1.3h-5.5c-.7 0-1.3-.6-1.3-1.3V33.5H36v26.2zm19.5-29.2h-47V11.3h46.9v19.2z"/>
	</g>
</svg>
	);
};

export default Hammer;