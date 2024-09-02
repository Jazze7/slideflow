import "./App.css";

// routing
import AppRouter from "./routing/routers/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</>
	);
}

export default App;
