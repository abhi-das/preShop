import { connect } from "react-redux";
import Home from "../components/home";
// import { RootState } from "../store/reducers";


// export const homeMapStateToProp = (state: RootState) => ({})

const HomeContainer = connect(null, null)(Home);
export default HomeContainer;