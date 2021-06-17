import React from 'react';

function HospitalBedAlt2(props) {
	const title = props.title || "hospital bed alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56 24.3H15.4v-.6c0-4.3-3.5-7.8-7.8-7.8H4.8V8.8C4.8 7.8 4 7 3 7s-1.7.8-1.7 1.8v46.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.9h54.5v5.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V31c-.2-3.7-3.3-6.7-7-6.7zm3.3 6.7v5.2H4.8v-8.4H56c1.8 0 3.3 1.5 3.3 3.2zm-28.8 8.7v6.4h-12v-6.4h12zm3.5 0h10.6v6.4H34v-6.4zM7.6 19.4c2.4 0 4.3 2 4.3 4.3v.6H4.8v-4.9h2.8zM4.8 39.7H15v6.4H4.8v-6.4zm43.3 6.4v-6.4h11.2v6.4H48.1z"/>
		<path d="M51.8 14.6h2.6v2.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.6h2.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H58V8.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.6h-2.6c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
	</g>
</svg>
	);
};

export default HospitalBedAlt2;