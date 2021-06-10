import React from 'react'
import './_homeScreen.scss'
import Nav from "../../components/Nav/Nav";
import Banner from "../../components/Banner/Banner";
import requests from '../../axios/Request';
import Row from "../../components/Row/Row";

function HomeScreen() {
    return (
        <div>
            <Nav />
           
           <Banner/>

           <Row   
                title="VEXFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginal}
                isLargeRow
            />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Tranding on TV" fetchUrl={requests.fetchTvTranding}/>
            <Row title="Tranding" fetchUrl={requests.fetchAllTranding}/>
            <Row title="Action Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        </div>
    )
}

export default HomeScreen
