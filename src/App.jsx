import { useState } from "react";
import "./App.css";

function App() {
	let [userNumber, setUserNumber] = useState(0);

	/* Setup loop below */
	let boxen = "";
	for (let i = 0; i < userNumber; i++) {
		const randomSizeValue = Math.random() * (150 - 75) + 75;
		const randomColorValue = Math.floor(Math.random() * 16777215).toString(16);
		boxen = (
			<div
				className="innerBox"
				/* 				style={{
					display: "flex",
					border: "solid 1px white",
					width: `${randomSizeValue}px`,
					height: `${randomSizeValue}px`,
					backgroundColor: `#${randomColorValue}`,
				}} */
			>
				testbox
			</div>
		);
	}

	{
		/* <div class="innerBox" style= "display: flex;
	border: solid 1px white;
	width: ${randomSizeValue}px;
	height: ${randomSizeValue}px;
	background-color: #${randomColorValue}"
	/* onClick=()=>;
	>Box ${i}</div>; */
	}
	return (
		<>
			<div id="formContainer">
				<form>
					<label>
						Number:
						{/* Change the min-max-value parameters later */}
						<input
							id="numberInput"
							type="number"
							name="number"
							min="2"
							max="5"
						/>
					</label>
					<input
						type="submit"
						value="Submit"
						onClick={(event) => {
							event.preventDefault();
							userNumber = document.getElementById("numberInput").value;
							console.log("user clicked: ", userNumber);
							setUserNumber(userNumber);
						}}
					/>
					<input
						type="submit"
						value="Clear"
						onClick={(event) => {
							event.preventDefault();
							setUserNumber(0);
							document.getElementById("numberInput").value = "";
						}}
					/>
				</form>
			</div>
			<div
				id="boxContainer"
				style={{
					display: "flex",
					border: "solid 1px grey",
					height: "200px",
					width: "800px",
				}}
			>
				{userNumber ? boxen : "Empty Container"}
			</div>
		</>
	);
}

export default App;
