import React, { useEffect } from 'react'
import styled from 'styled-components'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useDispatch, useSelector, } from 'react-redux'
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                navigate('/home')
            }
        })
        // eslint-disable-next-line
    }, [userName])

    const setUser = async (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: await user.photoURL,
        }))
    }

    const handleAuth = () => {
        provider.setCustomParameters({ prompt: 'select_account' });

        if (!userName) {
            signInWithPopup(auth, provider).then(result => { setUser(result.user) })
                .catch(error => alert(error.message))
        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                navigate('/')
            }).catch((error) => {
                alert(error.message)
            })
        }
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="disney+" />
            </Logo>

            {
                !userName ? (<Login onClick={handleAuth}>Login</Login>) :
                    (<>
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
                        <SignOut>
                            <UserImg src={userPhoto} alt={userName} />
                            <DropDown>
                                <span onClick={handleAuth}>Sign Out</span>
                            </DropDown>
                        </SignOut>
                    </>)
            }
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

const UserImg = styled.img`
    height: 60%;
    max-width: 100%;
    letter-spacing: 1.5px;
    font-size: medium;
    border-radius: 50%;
`
const DropDown = styled.div`
    position: absolute;
    top: 55px;
    right: 15px;
    background: rgb(19, 19, 19);
    border: rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 1.5px;
    opacity: 0;
    transition: all .3s;
`

const SignOut = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 100%;

    :hover {
        ${DropDown} {
            opacity: 1;
            transition: all .6s;
        }
    }
`


export default Header
