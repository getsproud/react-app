import React from 'react';

function MusicNote(props) {
	const title = props.title || "music note";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.4 0H39.1c-4 0-7.3 3.1-7.3 6.8v35c-2.7-3.4-7-5.5-11.9-5.5C11.7 36.3 5 42.5 5 50.2S11.8 64 20 64s14.9-6.2 14.9-13.9v-.4V6.8c0-2.1 1.9-3.8 4.3-3.8h16.3c.8 0 1.5-.7 1.5-1.5S56.2 0 55.4 0zM20 61c-6.5 0-11.9-4.9-11.9-10.9S13.4 39.3 20 39.3c6.5 0 11.9 4.9 11.9 10.9S26.5 61 20 61z"/>
	</g>
</svg>
	);
};

export default MusicNote;