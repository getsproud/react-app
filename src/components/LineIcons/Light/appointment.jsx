import React from 'react';

function Appointment(props) {
	const title = props.title || "appointment";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.5 10.3h-5.3V5.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v4.7H12.8V5.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v4.7H4.5c-2.5 0-4.5 2-4.5 4.5v40.6c0 2.5 2 4.5 4.5 4.5h55c2.5 0 4.5-2 4.5-4.5V14.8c0-2.5-2-4.5-4.5-4.5zm-55 3h5.3v4.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4.6h38.3v4.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4.6h5.3c.8 0 1.5.7 1.5 1.5v9.5H3v-9.5c0-.8.7-1.5 1.5-1.5zm55 43.6h-55c-.8 0-1.5-.7-1.5-1.5V27.3h58v28.1c0 .8-.7 1.5-1.5 1.5z"/>
		<path d="M38.7 40.6h-5.2v-5.2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.2h-5.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.2v5.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.2h5.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Appointment;