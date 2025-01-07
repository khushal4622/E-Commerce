import React from 'react';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb';

const ProductFeatures = () => {
  return (
    <>
      <style>{`
        /* Custom CSS */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          animation: fadeIn 1.2s ease-in-out;
        }
      `}</style>
      <section className="bg-primary rounded-xl mt-6 p-8 fade-in mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow hover:shadow-lg hover:transform hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-center w-16 h-16  rounded-full text-4xl text-yellow-500">
              <TbArrowBackUp />
            </div>
            <div>
              <h4 className="h4 capitalize text-gray-800">Easy Return</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci
                corporis assumenda, nostrum maxime sit!
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow hover:shadow-lg hover:transform hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-center w-16 h-16  rounded-full text-4xl text-red-500">
              <TbTruckDelivery />
            </div>
            <div>
              <h4 className="h4 capitalize text-gray-800">Fast Delivery</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci
                corporis assumenda, nostrum maxime sit!
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow hover:shadow-lg hover:transform hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-center w-16 h-16 rounded-full text-4xl text-blue-500">
              <RiSecurePaymentLine />
            </div>
            <div>
              <h4 className="h4 capitalize text-gray-800">Secure Payment</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci
                corporis assumenda, nostrum maxime sit!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductFeatures;
