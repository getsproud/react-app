import React from 'react';

function FlowChartAlt(props) {
	const title = props.title || "flow chart alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.8 31.1c0-3.9-2.8-7.2-6.5-8V11.7c0-3.1-2.5-5.7-5.7-5.7h-6.2v-.5c0-2.6-2.1-4.8-4.8-4.8H23.9c-2.6 0-4.8 2.1-4.8 4.8V10c0 2.6 2.1 4.8 4.8 4.8H30v7.5c-.6.2-1.1.6-1.6 1.1l-4.3 4.3c-1.9 1.9-1.9 4.9 0 6.7l4.3 4.3c.5.5 1 .8 1.6 1.1v9.4h-6.1c-2.6 0-4.8 2.1-4.8 4.8v.5h-5.8c-1.2 0-2.2-1-2.2-2.2V39.1c3.7-.8 6.4-4.1 6.4-8 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2 0 3.9 2.8 7.2 6.4 8v13.2c0 3.1 2.5 5.7 5.7 5.7H19v.5c0 2.6 2.1 4.8 4.8 4.8h15.8c2.6 0 4.8-2.1 4.8-4.8V58h6.2c3.1 0 5.7-2.5 5.7-5.7V39.1c3.7-.8 6.5-4.1 6.5-8zm-58 0c0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7-4.7-2.2-4.7-4.7zm17.8-21V5.5c0-.7.6-1.3 1.3-1.3h15.8c.7 0 1.3.6 1.3 1.3V10c0 .7-.6 1.3-1.3 1.3H23.9c-.7 0-1.3-.5-1.3-1.2zm4 21.8c-.5-.5-.5-1.3 0-1.8l4.3-4.3c.2-.2.6-.4.9-.4.3 0 .6.1.9.4l4.3 4.3c.2.2.4.6.4.9s-.1.6-.4.9l-4.3 4.3c-.5.5-1.3.5-1.8 0l-4.3-4.3zm14.3 26.6c0 .7-.6 1.3-1.3 1.3H23.9c-.7 0-1.3-.6-1.3-1.3V54c0-.7.6-1.3 1.3-1.3h15.8c.7 0 1.3.6 1.3 1.3v4.5zm9.7-4h-6.2V54c0-2.6-2.1-4.8-4.8-4.8h-6.1v-9.4c.6-.2 1.1-.6 1.6-1.1l4.3-4.3c1.9-1.9 1.9-4.9 0-6.7l-4.3-4.3c-.5-.5-1-.8-1.6-1.1v-7.5h6.1c2.6 0 4.8-2.1 4.8-4.8v-.5h6.2c1.2 0 2.2 1 2.2 2.2V23c-3.7.8-6.4 4.1-6.4 8 0 3.9 2.8 7.2 6.4 8v13.2c0 1.3-1 2.3-2.2 2.3zm4-18.7c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.2 4.7-4.7 4.7z"/>
	</g>
</svg>
	);
};

export default FlowChartAlt;