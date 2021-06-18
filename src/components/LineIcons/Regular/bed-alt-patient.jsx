import React from 'react';

function BedAltPatient(props) {
	const title = props.title || "bed alt patient";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.6 21.7H8.4c-4 0-7.2 3.2-7.2 7.2v3.5c0 1 .8 1.8 1.8 1.8h7.2v13.9c-2.2.8-3.9 2.9-3.9 5.4 0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8c0-2.6-1.8-4.9-4.2-5.5v-4.2h38.7v4.3c-2.3.7-4 2.9-4 5.5 0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8c0-2.6-1.7-4.8-4-5.5V34.2h5c1 0 1.8-.8 1.8-1.8v-3.5c0-3.9-3.3-7.2-7.2-7.2zM14.4 53.6c0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-1.2.9-2.2 2.1-2.3h.2c1.3 0 2.3 1 2.3 2.3zm39.8 2.2c-1.3 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1 2.3 2.3 0 1.3-1 2.3-2.3 2.3zm-1.7-15.5H13.7v-6.1h38.7v6.1zm6.8-9.6H4.8v-1.8c0-2 1.7-3.7 3.7-3.7h47.1c2 0 3.7 1.7 3.7 3.7v1.8z"/>
		<path d="M23.8 17.9h31.4c1.8 0 3.2-1.4 3.2-3.2v-2.3c0-4.2-3.4-7.7-7.7-7.7H23.8c-1.6 0-3 1.3-3 3V15c0 1.6 1.4 2.9 3 2.9zm.5-9.7h26.4c2.3 0 4.2 1.9 4.2 4.2v2H24.3V8.2z"/>
		<path d="M11.9 17.5c3.4 0 6.2-2.8 6.2-6.2S15.3 5 11.9 5s-6.2 2.8-6.2 6.2 2.8 6.3 6.2 6.3zm0-9c1.5 0 2.7 1.2 2.7 2.7S13.4 14 11.9 14s-2.7-1.2-2.7-2.7 1.2-2.8 2.7-2.8z"/>
	</g>
</svg>
	);
};

export default BedAltPatient;