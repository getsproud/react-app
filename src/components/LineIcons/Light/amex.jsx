import React from 'react';

function Amex(props) {
	const title = props.title || "amex";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.8 14.1H2.2c-1.2 0-2.2 1-2.2 2.2v31.3c0 1.2 1 2.2 2.2 2.2h59.5c1.2 0 2.2-1 2.2-2.2V16.3c.1-1.2-.9-2.2-2.1-2.2zM61 46.9H3V17.1h58v29.8z"/>
		<path d="M12.4 35.8h5.1l.7 2.8h4.1V27.7h.3L25.8 38H28l3.1-10.3h.3v10.9h2.1V25.4h-3.7l-3 10.3-3-10.3H20v12.4l-3.1-12.4h-4.3L9.3 38.5h2.1l1-2.7zm2.1-8.7h1l1.6 6.8h-4.2l1.6-6.8z"/>
		<path d="M46.4 38.5h.2l2.9-5 2.8 5h2.4L50.8 32l3.9-6.8h-2.4l-2.9 5.2-2.8-5.2H35.5v13.1h8.6c0 .2 2.3.2 2.3.2zm-8.8-5.7h5.1V31h-5v-3.7h7.5l2.8 5-2.8 4.4h-7.6v-3.9z"/>
	</g>
</svg>
	);
};

export default Amex;