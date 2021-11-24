import {memo,VFC} from "react";
import { Route,Routes } from "react-router-dom";

import {Login} from "../components/pages/Login";
import {Home} from "../components/pages/Home";
import { homeRoutes } from "./HomeRoutes";

export const Router:VFC = memo(()=>{
	return(
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Home/>}>
				{homeRoutes.map((route)=>{
					<Route key="route.path" path="route.path" element={route.children} />
				})}
			</Route>
		</Routes>
	)
});