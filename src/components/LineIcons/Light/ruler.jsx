import React from 'react';

function Ruler(props) {
	const title = props.title || "ruler";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.4 2.4C47.2 1 46.1 0 44.7 0H19.2c-1.5.1-2.5 1.2-2.5 2.5v59.1c.1 1.4 1.2 2.4 2.6 2.4h25.5c1.4 0 2.6-1.1 2.6-2.5V2.4zm-3 58.6H19.6v-8.1h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8v-5.3H32c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H19.6v-5.3h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8V28H32c.8 0 1.5-.7 1.5-1.5S32.8 25 32 25H19.6v-5.3h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8v-5.3H32c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H19.6V3h24.7v58z"/>
	</g>
</svg>
	);
};

export default Ruler;