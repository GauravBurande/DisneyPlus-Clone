import { collection, getDocs } from 'firebase/firestore/lite'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'
import db from '../firebase'
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
import Viewers from './Viewers'

const Home = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)

    useEffect(() => {

        let recommends = []
        let newDisneys = []
        let originals = []
        let trending = []

        const fetchMovieData = async () => {
            const querySnapshot = await getDocs(collection(db, "movies"));
            querySnapshot.forEach((doc) => {
                switch (doc.data().type) {
                    default:
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }]
                        break;

                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
                        break;

                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        break;

                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                        break;
                };
            });
            dispatchMovies()
        }

        fetchMovieData()

        const dispatchMovies = () => {
            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending,
            }))
        }

    }, [dispatch, userName])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding:0 calc(3.5vw + 5px);

    ::after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        z-index: -1;
    }
`

export default Home
