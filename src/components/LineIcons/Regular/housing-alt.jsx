import React from 'react';

function HousingAlt(props) {
	const title = props.title || "housing alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 22H47.9v-4.7c0-2.3-1.4-4.4-3.5-5.3L30.8 6.2c-1.8-.8-3.8-.6-5.4.4-1.6 1.1-2.6 2.9-2.6 4.8v1.5H6c-2.6 0-4.8 2.1-4.8 4.8v35.9c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V26.8c0-2.7-2.2-4.8-4.8-4.8zM4.8 53.6V17.7c0-.7.6-1.3 1.3-1.3h16.8v38.4H6c-.7 0-1.2-.6-1.2-1.2zm21.5-38.9v-3.2c0-.8.4-1.5 1-1.9.6-.4 1.4-.5 2.1-.2L43 15.2c.8.4 1.4 1.2 1.4 2.1v37.5H26.3V14.7zm33 38.9c0 .7-.6 1.3-1.3 1.3H47.9V25.5H58c.7 0 1.3.6 1.3 1.3v26.8z"/>
	</g>
</svg>
	);
};

export default HousingAlt;