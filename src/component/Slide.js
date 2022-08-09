import React from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from'react-router-dom';
import video1 from './video/video1.mp4';
// import video2 from './video/video2.mp4';
import video3 from './video/video3.mp4';

const Slide = () => {
  return (
   
    <Carousel fade={true} pause={false} className="slide_video">
      <Carousel.Item interval={20000}>
        <video autoPlay loop muted
          className="d-block w-100 video1"
          src={video1}
          style={{
            height : "100vh",
            objectFit:"cover",
            zIndex:"-1",
            
        }}
          alt="First slide"
        />

        <Carousel.Caption
        className="slide_content"
         style={{
          postion:"fixed",
          left:"-500px",
          top:"40%",
          fontSize:"20px"
         
        }}
        >
          <h3 style={{color:"#fff"}}>Pleasure ＆ relaxation</h3>

          <p>자연에서 온 편안함을 한번 느껴보세요.</p>

          <p><Link to="./facility" style={{color:"#fff" ,textDecoration:"none"}}>더보기</Link></p>

        </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item interval={20000}>
        <video autoPlay loop muted
          className="video2"
          src={video2}
          style={{
            
            height : "100vh",
            objectFit:"cover",
            zIndex:"-1",
        }}
          alt="Second slide"
        />
        <Carousel.Caption
          className="slide_content"
          style={{
          postion:"fixed",
          left:"-520px",
          top:"38%",
          fontSize:"20px"
         
        }}
        >
          <h3 style={{color:"#fff"}}>Happy dining</h3>

          <p>당일 들어온 신선한 재료로 만든 최고급<br/> 음식을 만나보세요</p>

          <p><Link to="./facility" style={{color:"#fff" ,textDecoration:"none"}}>더보기</Link></p>

        </Carousel.Caption>
      </Carousel.Item> */}

      <Carousel.Item interval={20000}>
        <video autoPlay loop muted
          className="d-block w-100 video3"
          src={video3}
          style={{
            height : "100vh",
            objectFit:"cover",
            zIndex:"-1",
        }}
          alt="Third slide"
        />
        <Carousel.Caption
        className="slide_content"
        style={{
          postion:"fixed",
          left:"-520px",
          top:"38%",
          fontSize:"20px"
         
        }}
        >
          <h3 style={{color:"#fff"}}>best location</h3>

          <p>쇼핑물과 인접한 거리 ＆ 아름다운 야경을 <br/>느껴보세요</p>

          <p><Link to="./facility" style={{color:"#fff" ,textDecoration:"none"}}>더보기</Link></p>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  )
}

export default Slide;