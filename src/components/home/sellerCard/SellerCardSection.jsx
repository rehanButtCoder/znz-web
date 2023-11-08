import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { topSellers } from "../../../services/sellerProfile/topSeller";
import Cards from "./Cards";

function SellerCardSection() {
  const [result, setResult] = useState([]);
  console.log(result);
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    // buttons: true,
    // autoplay: true,
    // autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
     
    ]
  };

  async function fetchTopSeller() {
    // debugger;

    try {
      let resp = await topSellers();
      if (resp.status === 200) {
        console.log("response:", resp?.data?.users);
        setResult(resp?.data?.users);
      } else {
        // Handle other status codes if needed
      }
    } catch (error) {
      console.error(error);
      // Handle any error that occurred during the API call
    }
  }

  useEffect(() => {
    fetchTopSeller();
  }, []);

  return (
    <div style={{ margin: "auto" }}>
      <div className="profileHead mb-5">
        <h2 className="what-we-serve">
          Our Top <span className="active">Seller</span>
        </h2>
        <p className="subhead">
          High-performing experts leading the business-to-business.
        </p>
      </div>
      <Container>
        {result?.length > 0 ? (
          <Slider {...settings}>
            {result?.map((data) => (
              <Cards sellerData={data} />
            ))}
          </Slider>
        ) : (
          <Slider {...settings}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Slider>
        )}
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}

export default SellerCardSection;
