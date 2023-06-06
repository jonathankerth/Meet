import React from "react";
import "./WelcomeScreen.css";
function WelcomeScreen(props) {
	return props.showWelcomeScreen ? (
		<div className="WelcomeScreen">
			<h1>Welcome to the Meet app</h1>
			<h4>
				Log in to see upcoming events around the world for full-stack developers
			</h4>

			<div className="button_cont" style={{ textAlign: "center" }}>
				<button
					onClick={() => {
						props.getAccessToken();
					}}
					rel="nofollow noopener"
					class="btn-text"
				>
					<b>Sign in with google</b>
				</button>
			</div>

			<a
				href="https://github.com/jonathankerth/meet/blob/main/public/Meet%20Privacy%20Policy.html"
				rel="nofollow noopener"
			>
				Privacy policy
			</a>
		</div>
	) : null;
}
export default WelcomeScreen;
