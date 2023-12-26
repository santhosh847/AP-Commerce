import NewArrival from "./components/NewArrivals/NewArrivals";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<NewArrival />
			<Footer />
		</div>
	);
}

export default App;
