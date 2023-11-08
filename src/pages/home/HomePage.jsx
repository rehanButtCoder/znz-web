import React from "react";
// import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Banner from "../../components/home/banner/Banner";
import Freelancer from "../../components/home/freelancers/Freelancer";
import PopularTask from "../../components/home/popularTasks/PopularTask";
import SupportStudent from "../../components/home/supportStudent/SupportStudent";
import Testimonials from "../../components/home/testimonials/Testimonials";
import ShortForm from "../../components/shortForm/ShortForm";
// import Cards from "../../components/home/sellerCard/Cards";
// import SellerCard from "../../components/home/sellerCard/SellerCardSection";
import SellerCardSection from "../../components/home/sellerCard/SellerCardSection";
import { useEffect } from "react";
import { getAllCategories } from "../../services/seeders/Categories";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../../features/seeders/seederSlice";
// import SellerCard from "../../components/home/sellerCard/SellerCard";

const Home = () => {
  const categories = useSelector((state) => state.seeder.categories);

  // console.log(categories);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const resp = await getAllCategories();
    dispatch(addCategories(resp.data.categoryData));
  };
  useEffect(() => {
    if (!categories?.length > 0) {
    getCategories();
    }
  }, []);

  return (
    <>
      <Banner />
      <Freelancer />
      <SellerCardSection />
      <PopularTask />
      <SupportStudent />
      <Testimonials />
      <ShortForm />
    </>
  );
};

export default Home;
