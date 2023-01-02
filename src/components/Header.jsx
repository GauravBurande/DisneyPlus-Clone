import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

const Header = () => {

    const handleAuth = () => {
        provider.setCustomParameters({ prompt: 'select_account' });
        signInWithPopup(auth, provider).then(result => console.log(result))
            .catch(error => alert(error.message))
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="disney+" />
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="home" />
                    <span>HOME</span>
                </a>
                <a href="/home">
                    <img src="/images/search-icon.svg" alt="home" />
                    <span>SEARCH</span>
                </a>
                <a href="/home">
                    <img src="/images/watchlist-icon.svg" alt="watchlist" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/home">
                    <img src="/images/original-icon.svg" alt="originals" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/home">
                    <img src="/images/movie-icon.svg" alt="movies" />
                    <span>MOVIES</span>
                </a>
                <a href="/home">
                    <img src="/images/series-icon.svg" alt="series" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Login onClick={handleAuth}>Login</Login>
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    margin: 0;
    padding: 0;
    margin-left: 25px;
    margin-right: auto;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            width: 20px;
            max-height: 20px;
            height: 20px;
            z-index: auto;
        }
        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08px;
            padding: 2px 5px;
            white-space: nowrap;
            position: relative;

            ::before {
            background-color: rgb(249, 249, 249);
            border-radius: 0 0 4px 4px;
            bottom: -10px;
            content: '';
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
            }
        }

        :hover {
            span::before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
            }
        }


    }

    @media (max-width: 768px) {
        display: none;
    }
`

const Login = styled.a`
    background-color: rgb(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;

    :hover {
        background-color: #f9f9f9;
        color: #000;
        cursor: pointer;
        border-color: transparent;
    }
`



export default Header
