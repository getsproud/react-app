import React from 'react';

function Mobile(props) {
	const title = props.title || "Mobile";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47 0H17c-2.9 0-5.2 2.3-5.2 5.2v53.6c0 2.9 2.3 5.2 5.2 5.2h30c2.9 0 5.2-2.3 5.2-5.2V5.2C52.3 2.3 49.9 0 47 0zm2.3 58.8c0 1.2-1 2.2-2.2 2.2H17c-1.2 0-2.2-1-2.2-2.2V5.2C14.7 4 15.7 3 17 3h30c1.2 0 2.2 1 2.2 2.2v53.6z"/>
		<path d="M32 48c-2.6 0-4.8 2.2-4.8 4.8s2.2 4.8 4.8 4.8c2.6 0 4.8-2.2 4.8-4.8S34.6 48 32 48zm0 6.6c-1 0-1.8-.8-1.8-1.8S31 51 32 51s1.8.8 1.8 1.8-.8 1.8-1.8 1.8z"/>
		<path d="M35.3 8.4h-6.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Mobile;