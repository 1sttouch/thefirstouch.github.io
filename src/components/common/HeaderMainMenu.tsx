import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '/img/comment/commenter_1.jpg'
import MenuItems from './HeaderMenuItems';
import OffCanvasMenu from './OffCanvasMenu';
import { useAuth } from '../../hook/authContext';
import { Button, IconButton, Typography } from '@mui/material';
import MenuDropDown from './MenuDropDown';
import UserIconButton from '../user/profile/UserIconButton';
import CartIconButton from '../purchase/CartIconButton';
import { useNavigate } from 'react-router-dom';
import { removeAuthToken } from '../../common/Utils';

const HeaderMainMenu = (props) => {
	const {isLoggedIn} = useAuth() ;
	const { menuBg } = props;
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className={`${menuBg} hd-sec ${isSticky ? 'sticky-menu' : ''}`}>
				<div className={`${menuBg} container`}>
					<div className="row align-items-center">
						<div className="col-lg-3 col-md-3 col-5">
							<div className="logo">
								<Link to="/"><img src={logo} alt="logo" /></Link>
							</div>
						</div>
						<div className="col-lg-7 d-none d-lg-block menu-center">
							<MenuItems />
						</div>

						{
							isLoggedIn ?
							<>							
							<div className="col-lg-1 d-none d-lg-block apply-button-area" style={{position: 'absolute', right: "140px"}}>
								<div className="apply-button" > 
									<UserIconButton/>
								</div>
							</div>
							<div className="col-lg-1 d-none d-lg-block apply-button-area" style={{position: 'absolute', right: "100px"}}>
								<div className="apply-button" > 
									<CartIconButton/>
								</div>
							</div>
							</>
							:
							<>
								<div className="col-lg-1 d-none d-lg-block apply-button-area"
											style={{position: 'absolute', right: "200px", minWidth: "140px"}}>
									<div className="apply-button">
									<Link to="/signup#">Sign Up</Link>
									</div>
								</div>

								<div className="col-lg-1 d-none d-lg-block apply-button-area" 
									style={{position: 'absolute', right: "60px", minWidth: "140px"}}>
									<div className="apply-button">
										<Link to="/signin#">Log In</Link>
									</div>
								</div>
							</>
						}
						<div className="col-md-9 col-7 d-lg-none" >
							<div className="offcanvas-menu-area">
								<OffCanvasMenu />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderMainMenu;