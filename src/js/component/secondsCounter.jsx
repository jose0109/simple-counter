import React from "react";

//create your first component
const SecondsCounter = ({seconds}) => {

	let secs = seconds.toString()
	secs = secs.padStart(6,0)

	return (
		<div className="cont bg-dark">
			<div className="row">
				<div className="digit col">
					<div>
						<i class="fa fa-clock"></i>
					</div>
				</div>
				<div className="digit col">{secs[0]}</div>
				<div className="digit col">{secs[1]}</div>
				<div className="digit col">{secs[2]}</div>
				<div className="digit col">{secs[3]}</div>
				<div className="digit col">{secs[4]}</div>
				<div className="digit col">{secs[5]}</div>
			</div>
		</div>
	);
};

export default SecondsCounter;
