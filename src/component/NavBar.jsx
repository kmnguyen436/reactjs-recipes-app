
import React from 'react'
import { CFormInput, CButton, CForm, CContainer, CNavbar, CNavbarBrand } from '@coreui/react';

export default function NavBar() {
    return (
        <CNavbar className="navbar">
            <CContainer fluid>
                <CNavbarBrand />
                <CForm className="d-flex">
                    <CFormInput type="search" className="me-2" placeholder="Search" />
                    <CButton type="submit" color="success" variant="outline">
                        Search
                    </CButton>
                </CForm>
            </CContainer>
        </CNavbar>
    )
}
