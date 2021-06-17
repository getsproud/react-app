import React from 'react';

function MusicNote(props) {
	const title = props.title || "music note";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.4 1.3H40.1c-4.1 0-7.5 3.2-7.5 7.1v36.1c-2.8-2.5-7-4-11.6-4-8.3 0-15.1 5-15.1 11.2 0 6.2 6.8 11.2 15.1 11.2s15.1-5 15.1-11.2v-.4-43c0-2 1.8-3.6 4-3.6h16.3c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6zM21 59.3c-6.3 0-11.6-3.5-11.6-7.7s5.3-7.7 11.6-7.7 11.6 3.5 11.6 7.7-5.3 7.7-11.6 7.7z"/>
	</g>
</svg>
	);
};

export default MusicNote;