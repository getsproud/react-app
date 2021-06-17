import React from 'react';

function Megaphone(props) {
	const title = props.title || "megaphone";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.4 1.7C58.5.2 56-.3 53.7.3L16.4 9.4H8.7c-4.4 0-8 3.6-8 8V34c0 3.9 2.8 7.2 6.5 7.8l4.9 21c.2.7.8 1.2 1.5 1.2h8.2c.5 0 .9-.2 1.2-.6s.4-.8.3-1.3l-4.6-19.7 35 8.6c.6.2 1.3.2 1.9.2 1.7 0 3.4-.6 4.8-1.7 1.9-1.5 2.9-3.6 2.9-6v-36c0-2.2-1.1-4.4-2.9-5.8zM18.1 12L33 8.4v34.5l-14.9-3.7V12zM3.7 34V17.3c0-2.7 2.2-5 5-5h6.5v26.6H8.7c-2.8 0-5-2.2-5-4.9zm11.1 27l-4.3-18.6h5.1L19.9 61h-5.1zm45.5-17.4c0 1.4-.6 2.7-1.8 3.6-1.2.9-2.7 1.2-4.2.9L36 43.6v-36l18.4-4.5c1.5-.4 3 0 4.2.9 1.1.9 1.8 2.2 1.8 3.6v36z"/>
	</g>
</svg>
	);
};

export default Megaphone;