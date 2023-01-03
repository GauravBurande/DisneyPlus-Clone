import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
    return (
        <Container>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0,1));
`

export default Viewers
