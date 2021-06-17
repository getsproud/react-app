import React from 'react';

function HospitalSign(props) {
	const title = props.title || "hospital sign";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 9.2H24c-3.2 0-5.8 2.6-5.8 5.8v4.1L4.8 20.7v-9.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v40.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-9.1l13.5 1.6V49c0 3.2 2.6 5.8 5.8 5.8h33c3.2 0 5.8-2.6 5.8-5.8V15c-.1-3.2-2.7-5.8-5.9-5.8zM4.8 39.8V24.2l13.5-1.6v18.8L4.8 39.8zM59.3 49c0 1.2-1 2.3-2.3 2.3H24c-1.2 0-2.3-1-2.3-2.3V15c0-1.2 1-2.3 2.3-2.3h33c1.2 0 2.3 1 2.3 2.3v34z"/>
		<path d="M49.2 30.3h-6.9v-6.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v6.9h-6.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.9v6.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.9h6.9c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default HospitalSign;