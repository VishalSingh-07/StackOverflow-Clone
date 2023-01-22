import React from "react"
import "./Header.css"
import logo from "../../assets/logo-stackoverflow.svg"
// import logo from "../../assets/code.png"
import SearchIcon from "@mui/icons-material/Search"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import InboxIcon from "@mui/icons-material/Inbox"
import HelpCenterIcon from "@mui/icons-material/HelpCenter"

function Header() {
	return (
		<header>
			<div className="header-container">
				<div className="header-left">
					<img src={logo} alt="logo"></img>
					{/* <h1>CodeHelper</h1> */}

					<h3>Products</h3>
				</div>
				<div className="header-middle">
					<div className="header-search-container">
						<SearchIcon />
						<input type="text" placeholder="Search..."></input>
					</div>
				</div>
				<div className="header-right">
					<div className="header-right-container">
						<AccountBoxIcon />
						<InboxIcon />
						<HelpCenterIcon />
						<svg
							aria-hidden="true"
							class="svg-icon iconStackExchange"
							width="24"
							height="24"
							viewBox="0 0 18 18"
							fill="rgba(0,0,0,0.5)"
							style={{
								cursor: "pointer",
							}}
						>
							<path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
						</svg>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
