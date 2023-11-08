import React from "react";
import Banner from "../../components/studentFreelancer/banner/Banner";
import FreelancerSimple from "../../components/studentFreelancer/freelancerSimple/FreelancerSimple";
import ContactForm from "../../components/contact/contactform/ContactForm";
import SupportStudent from "../../components/home/supportStudent/SupportStudent";

const AboutPage = () => {
  return (
    <>
      <Banner heading="About Us" />
      <FreelancerSimple />
      <SupportStudent
        image1="/asserts/images/home/c4.jpg"
        image2="/asserts/images/home/c5.jpg"
        image3="/asserts/images/home/c6.jpg"
      />
      <ContactForm/>
    </>
  );
};

export default AboutPage;
