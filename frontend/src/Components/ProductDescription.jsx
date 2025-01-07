import React, { useState } from 'react';

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div>
            <h5 className="h5">Detail</h5>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tenetur culpa sint blanditiis sed, totam quasi odit pariatur ea quisquam. Expedita in numquam molestias doloremque enim voluptatem, consectetur blanditiis sunt?
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam dolores labore blanditiis nam, earum esse porro?
            </p>
            <h5 className="h5 mt-4">Benefits</h5>
            <ul className="list-disc pl-5 text-sm text-gray-30 flex-col gap-1">
              <li>High-quality materials ensure long-lasting durability and comfort.</li>
              <li>Designed to meet the needs of modern, active lifestyles.</li>
              <li>Available in a wide range of sizes and trendy colors.</li>
            </ul>
          </div>
        );
      case 'careGuide':
        return (
          <div>
            <h5 className="h5">Care Guide</h5>
            <ul className="list-disc pl-5 text-sm text-gray-30 flex-col gap-1">
              <li>Wash with cold water and similar colors.</li>
              <li>Do not bleach or tumble dry.</li>
              <li>Iron on low heat if necessary.</li>
              <li>Follow the care instructions on the label for best results.</li>
            </ul>
          </div>
        );
      case 'sizeGuide':
        return (
          <div>
            <h5 className="h5">Size Guide</h5>
            <p className="text-sm">Please refer to the size chart below to select the appropriate fit:</p>
            <table className="w-full text-sm text-left mt-3 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-1">Size</th>
                  <th className="border border-gray-300 px-2 py-1">Chest (inches)</th>
                  <th className="border border-gray-300 px-2 py-1">Waist (inches)</th>
                  <th className="border border-gray-300 px-2 py-1">Hips (inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">Small</td>
                  <td className="border border-gray-300 px-2 py-1">34-36</td>
                  <td className="border border-gray-300 px-2 py-1">28-30</td>
                  <td className="border border-gray-300 px-2 py-1">34-36</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">Medium</td>
                  <td className="border border-gray-300 px-2 py-1">38-40</td>
                  <td className="border border-gray-300 px-2 py-1">32-34</td>
                  <td className="border border-gray-300 px-2 py-1">38-40</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">Large</td>
                  <td className="border border-gray-300 px-2 py-1">42-44</td>
                  <td className="border border-gray-300 px-2 py-1">36-38</td>
                  <td className="border border-gray-300 px-2 py-1">42-44</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1">XL</td>
                  <td className="border border-gray-300 px-2 py-1">46-48</td>
                  <td className="border border-gray-300 px-2 py-1">40-42</td>
                  <td className="border border-gray-300 px-2 py-1">46-48</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="ring-1 ring-slate-900/10 rounded-lg mt-10 mb-10 bg-primary">
      {/* Tab Navigation */}
      <div className="flex gap-3">
        <button
          onClick={() => setActiveTab('description')}
          className={`medium-14 p-3 w-32 ${activeTab === 'description' ? 'border-b-2 border-secondary text-secondary' : ''}`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('careGuide')}
          className={`medium-14 p-3 w-32 ${activeTab === 'careGuide' ? 'border-b-2 border-secondary text-secondary' : ''}`}
        >
          Care Guide
        </button>
        <button
          onClick={() => setActiveTab('sizeGuide')}
          className={`medium-14 p-3 w-32 ${activeTab === 'sizeGuide' ? 'border-b-2 border-secondary text-secondary' : ''}`}
        >
          Size Guide
        </button>
      </div>
      <hr className="h-[1px] w-full" />
      {/* Tab Content */}
      <div className="flex flex-col gap-3 p-3">{renderContent()}</div>
    </div>
  );
};

export default ProductDescription;
