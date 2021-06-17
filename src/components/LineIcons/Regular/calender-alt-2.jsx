import React from 'react';

function CalenderAlt2(props) {
	const title = props.title || "calender alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 10.4h-6.1V7.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.9H16.6V7.5c0-1-.8-1.8-1.8-1.8S13 6.5 13 7.5v2.9H7c-3.2 0-5.8 2.6-5.8 5.8v36.3c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V16.2c0-3.2-2.6-5.8-5.8-5.8zM4.8 28.5h10v11.4h-10V28.5zm13.4 0h12v11.4h-12V28.5zm12.1 14.9v11.3h-12V43.4h12zm3.5 0h12v11.3h-12V43.4zm0-3.5V28.5h12v11.4h-12zm15.5-11.4h10v11.4h-10V28.5zM7 13.9h6.1v2.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.8h30.8v2.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.8H57c1.2 0 2.3 1 2.3 2.3V25H4.8v-8.8c0-1.3 1-2.3 2.2-2.3zM4.8 52.5v-9.1h10v11.3H7c-1.2 0-2.2-1-2.2-2.2zM57 54.7h-7.7V43.4h10v9.1c0 1.2-1.1 2.2-2.3 2.2z"/>
	</g>
</svg>
	);
};

export default CalenderAlt2;