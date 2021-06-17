import React from 'react';

function HospitalSign(props) {
	const title = props.title || "hospital sign";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.5 8.4H23.4c-3 0-5.5 2.5-5.5 5.5v4.9L3 20.5v-9.9c0-.8-.7-1.5-1.5-1.5S0 9.8 0 10.6v42.8c0 .8.7 1.5 1.5 1.5S3 54.2 3 53.4v-9.9l14.9 1.8v4.9c0 3 2.5 5.5 5.5 5.5h35.1c3 0 5.5-2.5 5.5-5.5V13.9c0-3.1-2.5-5.5-5.5-5.5zM3 40.5v-17l14.9-1.8v20.5L3 40.5zm58 9.6c0 1.4-1.1 2.5-2.5 2.5H23.4c-1.4 0-2.5-1.1-2.5-2.5V13.9c0-1.4 1.1-2.5 2.5-2.5h35.1c1.4 0 2.5 1.1 2.5 2.5v36.2z"/>
		<path d="M50.1 30.5h-7.6v-7.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v7.6h-7.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h7.6v7.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.6h7.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default HospitalSign;