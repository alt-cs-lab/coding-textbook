import * as React from "react"
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/" activeStyle>
						Assigned Reading
					</NavLink>
					<NavLink to="/testpage" activeStyle>
						Test Page
					</NavLink>
					<NavLink to='/LTIPage' activeStyle>
						LTI Page
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
