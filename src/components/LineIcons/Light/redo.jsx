import React from 'react';

function Redo(props) {
	const title = props.title || "redo";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.6 20.5L49.3 5.4c-.4-.4-1.1-.6-1.6-.4-.6.2-.9.8-.9 1.4V20H18.6C8.4 20 0 28.8 0 39.5S8.4 59 18.6 59h15.6c.8 0 1.5-.7 1.5-1.5S35 56 34.2 56H18.6C10 56.1 3 48.7 3 39.5S10 23 18.6 23h28.1v13.6c0 .6.4 1.2.9 1.4.2.1.4.1.6.1.4 0 .8-.2 1.1-.5l14.3-15.1c.5-.5.5-1.5 0-2zM49.7 32.8V10.2l10.7 11.3-10.7 11.3z"/>
	</g>
</svg>
	);
};

export default Redo;