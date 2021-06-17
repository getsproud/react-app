import React from 'react';

function Margin(props) {
	const title = props.title || "margin";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8H57c3.2 0 5.8-2.6 5.8-5.8V7c0-3.2-2.6-5.7-5.8-5.7zM59.3 7v7.5H46.7V4.8H57c1.2 0 2.3 1 2.3 2.2zm0 39H46.7V18h12.6v28zM4.8 18h12.6v28H4.8V18zm16 0h22.3v28H20.8V18zM43.2 4.8v9.8H20.8V4.8h22.4zM7 4.8h10.3v9.8H4.8V7c0-1.2 1-2.2 2.2-2.2zM4.8 57v-7.5h12.6v9.8H7c-1.2 0-2.2-1.1-2.2-2.3zm16 2.3v-9.8h22.3v9.8H20.8zm36.2 0H46.7v-9.8h12.6V57c0 1.2-1.1 2.3-2.3 2.3z"/>
	</g>
</svg>
	);
};

export default Margin;