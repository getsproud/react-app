import React from 'react';

function Tooth(props) {
	const title = props.title || "tooth";

	return (
		<svg height="64" id="Capa_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 6C54.7.8 51.9.1 49.5.1c-2.3 0-4.8.9-7.4 1.8H42C39 3 35.5 4.1 31.8 4.1c-3.7 0-7.2-1.2-10.3-2.3C18.8.9 16.3 0 14 0c-2.2 0-5.1.7-8.5 5.9-4.2 6.5-1.6 13.9.6 20.5 1.3 3.6 2.4 7.1 2.4 10.2 0 7.1.8 14.1 2.2 19.3 1.3 5 3.1 8 4.9 8 2.7 0 3.9-4.2 5.5-10.7C23.2 45 25.5 38.1 32 38.1c6.4 0 8.3 6.5 10 14.2 1.5 7.1 2.7 11.5 6.6 11.5 1.1 0 3.3-1 5-8.1 1.3-5 2-12 2-19.2 0-3 1.1-6.4 2.3-9.9v-.1c2.3-6.7 4.8-14.3.5-20.5zm-3.3 19.6v.1c-1.3 3.8-2.5 7.4-2.5 10.9 0 6.9-.7 13.7-1.9 18.4-1 4-2 5.4-2.4 5.8-1-.3-1.9-2.1-3.3-9-1.4-6.6-3.6-16.6-12.9-16.6-9.4 0-12 10.5-13.8 17.5-.5 1.8-1.6 6.2-2.5 7.9-.5-.8-1.3-2.3-2.1-5.3-1.3-5-2.1-11.7-2.1-18.6 0-3.6-1.3-7.3-2.6-11.2C6.7 19 4.6 12.8 8 7.6 11 3 13 3 14 3c1.8 0 4.1.8 6.5 1.7 3.3 1.2 7 2.5 11.3 2.5 4.2 0 7.9-1.3 11.1-2.4h.1c2.4-.8 4.6-1.6 6.4-1.6 1 0 3.2 0 6.4 4.6 3.6 4.9 1.5 11.2-.7 17.8z"/>
	</g>
</svg>
	);
};

export default Tooth;