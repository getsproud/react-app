import React from 'react';

function AddFiles(props) {
	const title = props.title || "add files";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M23.7 25.2h6.8V32c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.8h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8v-6.8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.8h-6.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M53.1 0H10.9C9.5 0 8.3 1.1 8.3 2.6v38.1c0 1.3.6 2.6 1.5 3.5l19.7 18.5c.9.9 2.1 1.4 3.4 1.4h20.2c1.4 0 2.6-1.1 2.6-2.6V2.6c0-1.5-1.2-2.6-2.6-2.6zM14.7 44.6h13.9c1.1 0 1.9.8 1.9 1.9v13L14.7 44.6zm38 16.4H33.5V46.4c0-2.7-2.2-4.9-4.9-4.9h-17c-.2-.3-.3-.6-.3-1V3h41.4v58z"/>
	</g>
</svg>
	);
};

export default AddFiles;