// Filename: src/pages/app.js
"use client";
import { useState } from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  const [name, setName] = useState('world');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    // Implement logic based on the selected option, if needed
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h3 className="text-xl font-semibold mb-4">Options:</h3>

        {/* Name Options Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Name:
          </label>
          <select
            className="w-full border rounded p-2"
            onChange={(e) => handleNameChange(e.target.value)}
          >
            <option value="world">World</option>
            <option value="John">John</option>
            {/* Add more name options as needed */}
          </select>
        </div>

        {/* Other Options Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Option:
          </label>
          <select
            className="w-full border rounded p-2"
            onChange={(e) => handleDropdownChange(e.target.value)}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      {/* Playground Area */}
      <div className="flex-1 p-8">
        <Greeting name={name} />
        <p>Selected Option: {selectedOption}</p>
      </div>
    </div>
  );
}
