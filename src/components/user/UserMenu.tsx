import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '/img/comment/commenter_1.jpg'
import UserMenuItems from './UserMenuItems';
import UserOffCanvasMenu from './UserOffCanvasMenu';

const UserMenu = (props) => {

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
							<UserMenuItems />
						</div>
						<div className="col-md-9 col-7 d-lg-none" >
							<div className="offcanvas-menu-area">
								<UserOffCanvasMenu />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserMenu;