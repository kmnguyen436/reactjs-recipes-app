import '@coreui/coreui/dist/css/coreui.min.css';
import '@coreui/icons/css/all.min.css';
import React from 'react';
import { CSidebar, CSidebarHeader, CSidebarBrand, CSidebarNav, CNavItem } from '@coreui/react';
import { Link } from 'react-router-dom';
import { BiSolidFoodMenu, BiSolidBookHeart, BiSolidBowlHot, BiSolidDrink } from "react-icons/bi";
import NavBar from './NavBar';

function SideBar() {

    return (
        <>
        {/* creating interactable sidebar that pops open when use hovers */}
            <NavBar />
            <CSidebar id='sidebar' className='sidebar border-end' unfoldable>
                <CSidebarHeader className='border-bottom'>
                    <CSidebarBrand>
                        <BiSolidFoodMenu className="header-icon" />
                        <span className="header-text">RecipeBase</span>
                    </CSidebarBrand>
                </CSidebarHeader>
                <CSidebarNav>
                    <CNavItem className='nav-item'>
                        <Link className='link' to="/my-fav-recipes">
                            <BiSolidBookHeart className="nav-icon" />
                            <span className="nav-text">My Favorite Recipes</span>
                        </Link>
                    </CNavItem>
                    <CNavItem>
                        <Link className='link' to="/food-recipes-list">
                            <BiSolidBowlHot className="nav-icon" />
                            <span className="nav-text">Food Recipes List</span>
                        </Link>
                    </CNavItem>
                    <CNavItem>
                        <Link className='link' to="/drink-recipes-list">
                            <BiSolidDrink className="nav-icon" />
                            <span className="nav-text">Drink Recipes List</span>
                        </Link>
                    </CNavItem>
                </CSidebarNav>
            </CSidebar>
        </>
    );
}

export default SideBar;
