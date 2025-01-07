import React, { useEffect, useState } from 'react';
import Title from '../Components/Title';
import { FaAward, FaUsers, FaBoxOpen, FaCheck } from 'react-icons/fa6';
import { FaHistory, FaStar } from 'react-icons/fa';
import user1 from '../assets/testimonials/user1.png';
import user2 from '../assets/testimonials/user2.png';
import product1 from '../assets/product_1.png';
import product2 from '../assets/product_2_1.png';
import product3 from '../assets/product_3.png';
import product4 from '../assets/product_6.png';
import Footer from '../Components/Footer';

const Testimonials = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>
      {/* Testimonials Section */}
      <div className={`bg-primary mb-16 ${fadeIn ? 'fade-in' : 'fade-out'}`}>
        <div className="max-padd-container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20 mb-16 rounded-2xl">
            <div className="flex flex-col gap-10">
              <Title
                title1="What People"
                title2="Says"
                titleStyles="pb-10"
                paraStyles="!block"
              />
              <div className="flex flex-col gap-1 bg-white p-2 rounded">
                <div className="flex text-yellow-500 gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="medium-14">
                  more than <b>+25,000 reviews</b>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {[user1, user2].map((user, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 rounded-lg p-4 bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                      <img
                        src={user}
                        alt="userImg"
                        height={44}
                        width={44}
                        className="rounded-full"
                      />
                      <h5 className="bold-14">
                        {index === 0 ? 'John Doe' : 'Izabella Stress'}
                      </h5>
                    </div>
                    <div className="bg-secondary text-white rounded-full flex items-center gap-x-2 p-1 px-2 text-xs font-semibold">
                      <FaCheck />
                      Verified
                    </div>
                  </div>
                  <hr className="h-[1px] w-full my-2" />
                  <div className="flex gap-x-1 text-yellow-500 mt-5 mb-1 text-xs">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <h4 className="h4">{index === 0 ? 'High Quality' : 'Modern Design'}</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam accusantium suscipit quo est iure placeat labore
                    deserunt quidem.
                  </p>
                  <div className="flex gap-x-1 mt-5">
                    <img
                      src={index === 0 ? product1 : product3}
                      alt="productImg"
                      height={44}
                      width={44}
                      className="rounded aspect-square object-cover"
                    />
                    <img
                      src={index === 0 ? product2 : product4}
                      alt="productImg"
                      height={44}
                      width={44}
                      className="rounded aspect-square object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Achievements Section */}
      <div className="bg-gray-100 py-16 mb-10">
        <div className="max-padd-container">
          <Title
            title1="Our"
            title2="Achievements"
            titleStyles="text-center pb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
            <div className="achievement-card">
              <FaAward className="text-6xl text-yellow-500 mx-auto mb-3" />
              <h4 className="bold-14">100+ Awards</h4>
            </div>
            <div className="achievement-card">
              <FaUsers className="text-6xl text-yellow-500 mx-auto mb-3" />
              <h4 className="bold-14">50k+ Happy Customers</h4>
            </div>
            <div className="achievement-card">
              <FaBoxOpen className="text-6xl text-yellow-500 mx-auto mb-3" />
              <h4 className="bold-14">500+ Products Sold</h4>
            </div>
            <div className="achievement-card">
              <FaHistory className="text-6xl text-yellow-500 mx-auto mb-3" />
              <h4 className="bold-14">20+ Years of Excellence</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-primary py-16 mb-10">
        <div className="max-padd-container text-center">
        <Title
            title1="Ready to"
            title2="Join Us..."
            titleStyles="text-center pb-5"
          />
          <p className="text-lg mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Seize the
            opportunity to be part of something amazing!
          </p>
          <button className="btn-primary bg-secondary text-white rounded-full px-3 py-1 hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Testimonials;

/* Keyframe Animations Inline Styles */
const styles = `
.fade-in {
  animation: fadeIn 2s ease-in-out;
}
.fade-out {
  animation: fadeOut 2s ease-in-out;
}
.achievement-card {
  transition: transform 0.3s ease;
}
.achievement-card:hover {
  transform: scale(1.1);
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
`;
