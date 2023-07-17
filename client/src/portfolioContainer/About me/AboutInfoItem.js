import React from 'react';
import PText from './PText';
import styled from "styled-components";
const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  margin-bottom:7rem;
  .title {
    margin-top:-3rem;
    font-size: 3rem;
    color:var(--gray-2);
  }
  .items {
    
    display: flex;
    gap: 1.5rem;
    position: absolute;
   
    left: 35rem;
  }
  
  .item {
    
    
    border-radius: 8px;
    color:var(--gray-2);
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
    
  }
  
    
  
`;

const  AboutInfoItem=({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) =>{
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      
      </div>
      
    </AboutItemStyles>
  );
}
export default  AboutInfoItem;