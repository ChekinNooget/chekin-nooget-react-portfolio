import React from "react"
import sidePicture from "../../../static/assets/images/auth/login.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function () {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: "url(" + sidePicture + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="right-column">
				<div className="contact-bullet-point">
					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="phone" />
						</div>
						<div className="text">wah me no have phone</div>
					</div>
					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="envelope" />
						</div>
						<div className="text">
							<a href="mailto:chekinnooget@gmail.com">chekinnooget@gmail.com</a>
						</div>
					</div>
					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="map-marked-alt" />
						</div>
						<div className="text">why would i tell you.</div>
					</div>
				</div>
			</div>
		</div>
	)
}
