import React from 'react';

function Passport(props) {
	const title = props.title || "passport";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.4 0H12.6c-.8 0-1.5.7-1.5 1.5v61c0 .8.7 1.5 1.5 1.5h36.8c1.9 0 3.5-1.6 3.5-3.5v-57c0-1.9-1.6-3.5-3.5-3.5zm.5 60.5c0 .3-.2.5-.5.5H14.1V3h35.3c.3 0 .5.2.5.5v57z"/>
		<path d="M32 11.1c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8-4.4-9.8-9.8-9.8zm0 16.6c-3.8 0-6.8-3.1-6.8-6.8 0-3.8 3.1-6.8 6.8-6.8 3.8 0 6.8 3.1 6.8 6.8 0 3.8-3 6.8-6.8 6.8z"/>
		<path d="M40.3 38.8H23.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h16.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M37.5 47.1h-11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.6-1.5z"/>
	</g>
</svg>
	);
};

export default Passport;