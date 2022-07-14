import React from "react"
import profilePicture from "../../../static/assets/images/bio/chicken-nugget.png"
export default function () {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: "url(" + profilePicture + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="right-column">
				{" "}
				<p>
					Chekin Nooget is the all powerful leader of the Chicken Nugget cult.
					Legend has it he stumbled upon a shiny chicken nugget in the
					wilderness, and it gave him magical powers.
				</p>
			</div>
		</div>
	)
}
