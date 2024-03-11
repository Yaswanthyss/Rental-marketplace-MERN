import { Route, Routes, Navigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Topbar from "./components/headbar";
import Hotel from "./components/Categories/hotel";
import Camera from "./components/Categories/cameras";
import Party from "./components/Categories/party";
import Bus from "./components/Categories/bus";
import Dozer from "./components/Categories/dozer";
import Decorative from "./components/Categories/decorative";
import Car from "./components/Categories/car";
import Bike from "./components/Categories/bike";
import CarDetails from "./components/Categories/details";
import Rent from "./components/Categories/rent";
import Tools from "./components/Categories/tools";
import Electronics from "./components/Categories/electonics";
import Garden from "./components/Categories/gardening";
import Adventure from "./components/adventuregears";
import Construction from './components/Categories/construction';
import Rental from "./components/Categories/rental";
import RentalDisplay from "./components/Categories/Rentaldisplay";
import Other from "./components/Categories/other";




function App() {
	const user = localStorage.getItem("token");

	return (
		<div>
			<Topbar/>
		<Routes>
			{user && <Route path="/" exact element={<Hotel />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/hotel" exact element={<Hotel />} />
			<Route path="/cameras" exact element={<Camera />} />
			<Route path="/party" exact element={<Party />} />
			<Route path="/bus" exact element={<Bus />} />
			<Route path="/bike" exact element={<Bike />} />
			<Route path="/dozer" exact element={<Dozer />} />
			<Route path="/decorative" exact element={<Decorative />} />
			<Route path="/car" exact element={<Car />} />
			<Route path="/details" element={<CarDetails />} />
			<Route path="/rent" exact element={<Rent/>} />
			<Route path="/tools" exact element={<Tools/>} />
			<Route path="/electronics" exact element={<Electronics/>} />
			<Route path="/gardening" exact element={<Garden/>} />
			<Route path="/adventuregears" exact element={<Adventure/>} />
			<Route path="/construction" exact element={<Construction/>} />
			<Route path="/rentaldisplay" exact element={<RentalDisplay />} />
			<Route path="/other" exact element={<Other/>} />
			
		</Routes>
		</div>
	);
}

export default App;

