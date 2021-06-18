import React from 'react';

function Molecule(props) {
	const title = props.title || "molecule";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 22.1c-2.8 0-5.2 1.7-6.2 4.2l-12.1-1.6c-.8-2.9-3.4-5.1-6.5-5.1-1.4 0-2.8.5-3.9 1.2l-11.7-9.4c.5-1 .8-2.1.8-3.3 0-3.8-3-6.9-6.8-6.9-3.7.1-6.8 3.2-6.8 7s3 6.9 6.8 6.9c1.3 0 2.5-.4 3.5-1l11.9 9.6c-.4.9-.7 1.9-.7 3 0 2.3 1.1 4.4 2.8 5.6l-3.1 8c-.5-.1-1-.1-1.6-.1-6.1 0-11.1 5.1-11.1 11.3s5 11.3 11.1 11.3 11.1-5.1 11.1-11.3c0-4.4-2.5-8.3-6.2-10.1l3-7.8h.7c3.2 0 5.8-2.2 6.6-5.2l11.6 1.5c.4 3.5 3.2 6.2 6.7 6.2 3.7 0 6.8-3.1 6.8-6.9s-3-7.1-6.7-7.1zM29.3 51.4c0 4.3-3.4 7.8-7.6 7.8s-7.6-3.5-7.6-7.8 3.4-7.8 7.6-7.8 7.6 3.5 7.6 7.8zM8.8 11.6C7 11.6 5.5 10 5.5 8.2S7 4.8 8.8 4.8s3.3 1.5 3.3 3.4-1.5 3.4-3.3 3.4zM30.3 30c-1.8 0-3.3-1.5-3.3-3.4s1.5-3.4 3.3-3.4c1.8 0 3.3 1.5 3.3 3.4S32.1 30 30.3 30zm24.9 2.5c-1.8 0-3.3-1.5-3.3-3.4s1.5-3.4 3.3-3.4 3.3 1.5 3.3 3.4-1.5 3.4-3.3 3.4z"/>
	</g>
</svg>
	);
};

export default Molecule;