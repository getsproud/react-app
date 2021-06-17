import React from 'react';

function SignPole(props) {
	const title = props.title || "sign pole";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.1 9.4H33.8V3c0-1-.8-1.8-1.8-1.8S30.2 2 30.2 3v6.4H12.9c-2.6 0-4.8 2.1-4.8 4.8v15.1c0 2.6 2.1 4.8 4.8 4.8h17.3v27c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V34h17.3c2.6 0 4.8-2.1 4.8-4.8v-15c-.1-2.7-2.2-4.8-4.8-4.8zm1.2 19.8c0 .7-.6 1.3-1.3 1.3H12.9c-.7 0-1.3-.6-1.3-1.3v-15c0-.7.6-1.3 1.3-1.3H51c.7 0 1.3.6 1.3 1.3v15z"/>
	</g>
</svg>
	);
};

export default SignPole;