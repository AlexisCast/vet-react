import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavBar />
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<p>
				Quis est est officia labore. Amet do non do sint eiusmod ex nisi
				culpa. Enim eu cillum minim pariatur deserunt ad ad officia
				minim dolor sit. Proident laboris ipsum amet est ipsum aliqua
				amet fugiat. Excepteur et exercitation minim aliqua nisi
				voluptate. Pariatur quis id sit mollit proident nisi esse. Nulla
				deserunt laborum veniam ex laboris amet mollit nulla nostrud ut
				ea sunt elit. Ex deserunt ipsum eu deserunt exercitation id in
				id velit ut non qui excepteur. Excepteur officia est sit tempor
				et. Deserunt velit est irure eu labore dolor elit ea commodo
				enim irure. Et aliqua pariatur magna incididunt pariatur. Duis
				culpa sunt duis qui non pariatur elit ex voluptate dolore. Eu
				minim pariatur esse cupidatat do cupidatat sint sit aute ullamco
				minim. Minim excepteur ad laborum quis qui laboris esse aliquip
				exercitation fugiat magna deserunt. Minim laboris enim dolor
				pariatur tempor nisi amet. Irure sit occaecat sunt id cillum
				duis veniam culpa. Fugiat cillum deserunt officia tempor ullamco
				irure. Dolor magna Lorem quis non fugiat sunt laborum quis est
				reprehenderit. Cillum irure et aliquip voluptate excepteur
				laborum laborum aliqua sint aliqua eiusmod in ea. Sint cillum
				veniam commodo sunt irure voluptate. Sint Lorem reprehenderit
				amet ad officia dolor ad enim commodo nostrud ullamco.
				Consectetur ut labore Lorem commodo tempor commodo nisi ullamco.
				Laboris pariatur ut culpa adipisicing labore deserunt
				consectetur consectetur et excepteur. Culpa veniam elit id
				dolore est ipsum et non Lorem pariatur officia. Minim pariatur
				aliquip ad dolor est dolor minim ullamco quis aliqua. In labore
				irure aliqua eiusmod proident non ad enim. Dolore adipisicing
				veniam consectetur nisi labore ad id cupidatat. Officia commodo
				do id culpa. Est ullamco occaecat exercitation amet minim id
				elit officia ea aute aute. Eiusmod proident fugiat cillum
				laboris. Duis labore nisi anim id irure culpa. Tempor excepteur
				quis ut cillum labore in velit amet duis sint ut laboris.
				Occaecat et anim officia velit voluptate exercitation non velit
				incididunt cupidatat excepteur enim aliqua. Elit ut mollit culpa
				reprehenderit aliquip. Dolor adipisicing ut laboris velit est
				aute. Est ut et ipsum ea enim laborum nostrud tempor do aute
				nisi pariatur duis veniam. Incididunt dolor magna occaecat amet
				velit culpa sit ad. Aliqua mollit Lorem exercitation et mollit
				anim sit duis eiusmod esse excepteur. Lorem ex ad in ex. Nostrud
				ut magna laborum dolor officia ut veniam magna anim magna nulla
				veniam ut cillum. Incididunt duis elit tempor labore. Voluptate
				magna voluptate velit ullamco excepteur culpa ad magna do enim
				proident cillum proident amet. Adipisicing irure officia dolor
				labore officia non fugiat. Aliquip nostrud officia et esse ipsum
				dolor.
			</p>
		</>
	);
}

export default App;
