import { render } from "react-dom";
import "./App.css";

function App() {
	let userNumberChoice = 0;
	function renderBoxen() {
		const containerDiv = document.getElementById("boxContainer");
		containerDiv.innerHTML = ``;
		/*       onClick={(event) => {
        event.preventDefault();
        renderEmptyContainer();
      }}; */
		for (let i = 0; i < userNumberChoice; i++) {
			const randomSizeValue = Math.random() * (150 - 75) + 75;
			const randomColorValue = Math.floor(Math.random() * 16777215).toString(
				16
			);
			/* 			let xyz = <div class="innerBox" style= "display: flex;
      border: solid 1px white;
      width: ${randomSizeValue}px;
      height: ${randomSizeValue}px;
      background-color: #${randomColorValue}"
      onClick=()=>;
      >Box ${i}</div>; */
			return xyz;
		}
	}
	function renderEmptyContainer() {
		const containerDiv = document.getElementById("boxContainer");
		containerDiv.innerText = "Empty Container";
	}
	let test = <p>Hi!</p>;
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
							userNumberChoice = document.getElementById("numberInput").value;
							renderBoxen();
						}}
					/>
					<input
						type="submit"
						value="Clear"
						onClick={(event) => {
							event.preventDefault();
							renderEmptyContainer();
						}}
					/>
				</form>
			</div>
			<div
				id="boxContainer"
				style={{
					display: "flex",
					border: "solid 1px grey",
				}}
			>
				Empty Container
				<br />
				{test}
				{renderBox2}
			</div>
		</>
	);
}

export default App;
