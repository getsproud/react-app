import React from 'react';

function MedicalBriefcase(props) {
	const title = props.title || "medical briefcase";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.5 19.6H44.2c-.1-6.6-5.5-12-12.1-12S20 13 20 19.6H8.5c-4.7 0-8.5 3.8-8.5 8.5v20.8c0 4.7 3.8 8.5 8.5 8.5h47c4.7 0 8.5-3.8 8.5-8.5V28.1c0-4.7-3.8-8.5-8.5-8.5zm-23.4-9c5 0 9 4 9.1 9H23c0-5 4.1-9 9.1-9zM61 48.9c0 3-2.5 5.5-5.5 5.5h-47c-3 0-5.5-2.5-5.5-5.5V28.1c0-3 2.5-5.5 5.5-5.5h47c3 0 5.5 2.5 5.5 5.5v20.8z"/>
		<path d="M37.7 37.3h-4.2v-4.2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v4.2h-4.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.2v4.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4.2h4.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default MedicalBriefcase;