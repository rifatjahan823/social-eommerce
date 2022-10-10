import React from 'react';
import Banner from './banner/Banner';
import Faq from './faq/Faq';
import Features from './features/Features';
import Footer from './footer/Footer';
import Header from './header/Header';
import Price from './price/Price';
import ShoppableStory from './shoppableStory/ShoppableStory';
import StoryAdds from './storyAdds/StoryAdds';
import Widget from './widget/Widget';

const MainLayout = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <ShoppableStory></ShoppableStory>
        <StoryAdds></StoryAdds>
        <Features></Features>
        <Price></Price>
        <Faq></Faq>
        <Widget></Widget>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout