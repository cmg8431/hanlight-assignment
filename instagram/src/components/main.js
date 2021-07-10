import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Aside from './aside';
import HiddenSection from './Section/hiddenSection';
import PostSection from './Section/postSection';

const Container = styled.main`
  width: 100%;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 `
 const BoxContainer = styled.section`
  padding-top: 30px;
  display:flex;
  max-width: 935px;
  margin: 0 auto;
  
  @media screen and (max-width: 500px) {
    padding-top: 0px;
  }
 `
 const MainSection = styled.section`
  min-height: 100%;
 `
 const BoxMagin = styled.div`
   margin-right: 28px;

   @media screen and (max-width: 1000px) {
    margin-right: 0px;
  }
 ` 
const Main = () => {
  return (
    <MainSection>
      <Header />
      <Container>
        <BoxContainer>    
          <BoxMagin>
            <HiddenSection/>
            <PostSection/>
          </BoxMagin>
          <Aside />
        </BoxContainer>
      </Container>
    </MainSection>
  );
}

export default Main;
