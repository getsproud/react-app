import React from 'react';

function CropAlt(props) {
	const title = props.title || "crop alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 53.7h-5.2V8.8c0-.8-.7-1.5-1.5-1.5h-46V1.5C9.7.7 9.1 0 8.2 0S6.7.7 6.7 1.5v5.8H1.5C.7 7.3 0 8 0 8.8s.7 1.5 1.5 1.5h5.2v44.9c0 .8.7 1.5 1.5 1.5h46v5.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.8h5.2c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.4-1.5zm-8.2 0H9.7V10.3h44.5v43.4z"/>
	</g>
</svg>
	);
};

export default CropAlt;