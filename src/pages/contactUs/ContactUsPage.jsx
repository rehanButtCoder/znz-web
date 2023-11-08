import React from "react";
// import "./ContactUs.css";
import Map from "../../components/contact/map/Map";
import Faq from "../../components/contact/faq/Faq";
import ContactForm from "../../components/contact/contactform/ContactForm";
import Banner from "../../components/studentFreelancer/banner/Banner";
import NFooter from "../../components/footer/Footer";

const ContactUsPage = () => {
  return (
    <>
      <Banner heading="Contact Us" classContactBanner="classContactBanner" />
      {/* <Map /> */}
      <ContactForm head="Get in " spann="touch" description="Connect with us today and let's start a conversation" descritop2=" that opens new possibilities"/>
      <Faq />
      {/* <NFooter /> */}
    </>
  );
};

export default ContactUsPage;
