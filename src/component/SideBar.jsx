import '@coreui/coreui/dist/css/coreui.min.css';
import '@coreui/icons/css/all.min.css';
import React, { useState } from 'react';
import { CSidebar, CSidebarHeader, CSidebarBrand, CSidebarNav, CNavItem } from '@coreui/react';
import { BiSolidFoodMenu, BiSolidBookHeart, BiSolidBowlHot, BiSolidDrink } from "react-icons/bi";
import NavBar from './NavBar';

function SideBar() {

    return (
        <> <NavBar></NavBar>
        <CSidebar id='sidebar' className='sidebar border-end' unfoldable>
            <CSidebarHeader className='border-bottom'>
                <CSidebarBrand>
                    <BiSolidFoodMenu className="header-icon" />
                    <span className="header-text">RecipeBase</span></CSidebarBrand>
            </CSidebarHeader>
            <CSidebarNav>
                <CNavItem href="my-fav-recipes">
                    <BiSolidBookHeart className="nav-icon" />
                    <span className="nav-text">My Favorite Recipes</span>
                </CNavItem>
                <CNavItem href="food-recipes-list">
                    <BiSolidBowlHot className="nav-icon" />
                    <span className="nav-text">Food Recipes List</span>
                </CNavItem>
                <CNavItem href="drink-recipes-list">
                    <BiSolidDrink className="nav-icon" />
                    <span className="nav-text">Drink Recipes List</span>
                </CNavItem>
            </CSidebarNav>
        </CSidebar></>
    );
}

export default SideBar;
