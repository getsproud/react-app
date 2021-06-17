import React from 'react';

function Mouse(props) {
	const title = props.title || "mouse";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C20.4 0 10.9 10.4 10.9 23.2v17.7C10.9 53.6 20.4 64 32 64c5.4 0 10.5-2.2 14.4-6.1 4.3-4.4 6.8-10.6 6.7-17.1V23.2C53.1 10.4 43.6 0 32 0zm18.1 23.2v2.2H33.7V3.1c9.2 1 16.4 9.6 16.4 20.1zM30.7 3.1v22.3H13.9v-2.2c0-10.7 7.5-19.4 16.8-20.1zm13.5 52.7C40.9 59.1 36.5 61 32 61c-10 0-18.1-9-18.1-20.2V28.3h36.2v12.4c.1 5.8-2.1 11.2-5.9 15.1z"/>
	</g>
</svg>
	);
};

export default Mouse;