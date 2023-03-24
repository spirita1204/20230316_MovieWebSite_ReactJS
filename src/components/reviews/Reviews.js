import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import uuid from 'react-uuid';
import React from 'react'

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {
                //getMovieData method at App.js
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;//db = imdbId

    useEffect(()=>{
        getMovieData(movieId);
    },[])

    const addReview = async (e) =>{
        console.log("addReview start");
        e.preventDefault();
        const rev = revText.current;
        try{
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});
            //id會有問題 TypeError: reviews is not iterable
            const updatedReviews = [uuid(), {body:rev.value}];//...reviews解壓縮props
            rev.value = "";
            setReviews(updatedReviews);
        }
        catch(err){
            console.error(err);
        }
    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews;