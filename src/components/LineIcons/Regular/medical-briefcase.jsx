import React from 'react';

function MedicalBriefcase(props) {
	const title = props.title || "medical briefcase";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54 19.4H43.9C43.7 13.1 38.4 8 32.1 8c-6.4 0-11.6 5.1-11.8 11.4H10c-4.8 0-8.8 3.9-8.8 8.8v19.1c0 4.8 3.9 8.8 8.8 8.8h44c4.8 0 8.8-3.9 8.8-8.8V28.1c0-4.8-4-8.7-8.8-8.7zm-21.9-7.9c4.5 0 8.1 3.5 8.3 7.9H23.7c.3-4.4 3.9-7.9 8.4-7.9zm27.2 35.8c0 2.9-2.4 5.3-5.3 5.3H10c-2.9 0-5.3-2.4-5.3-5.3V28.1c0-2.9 2.4-5.3 5.3-5.3h44c2.9 0 5.3 2.4 5.3 5.3v19.2z"/>
		<path d="M37.4 36.3h-3.7v-3.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.7h-3.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.7v3.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.7h3.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default MedicalBriefcase;