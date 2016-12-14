import React from 'react';

class Ul extends React.Component {
	render() {
		return (
			<div>
				<div>
					<ul>
						<li>Zhengzhou</li>
						<li>Nanjing</li>
						<li>ShangHai</li>
					</ul>
				</div>
				<div>
					<ol>
						<li>Shanzhen</li>
						<li>Dalian</li>
						<li>Xianggang</li>
					</ol>
				</div>
			</div>
		);
	}
}

export default Ul;