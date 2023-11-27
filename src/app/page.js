// Filename: src/pages/app.js
'use client'
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import './custom-scroll.css'
import { AiOutlineEye } from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi'
import { IoMdAdd } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaCircleCheck } from 'react-icons/fa6'
import { sidebarData } from './data'

export default function App () {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [selectedFeatures, setSelectedFeatures] = useState([])

  const handleFeaturesSelection = feature => {
    console.log('feature', feature.name)

    // Check if the feature is already selected
    const isSelected = selectedFeatures.some(
      selected => selected.name === feature.name
    )

    if (isSelected) {
      // If selected, remove it from the array
      const updatedFeatures = selectedFeatures.filter(
        selected => selected.name !== feature.name
      )
      setSelectedFeatures(updatedFeatures)
    } else {
      // If not selected, add it to the array
      setSelectedFeatures(prevFeatures => [...prevFeatures, feature])
    }

    setSelectedFeature(feature)
  }

  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = index => {
    if (!sidebarData[index].dropDown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(prevIndex => (prevIndex === index ? null : index))
    }
  }

  const handleFeatureSelection = feature => {
    console.log('feature', feature.name)
    setSelectedFeature(feature)
  }

  const isFeatureSelected = feature => {
    return selectedFeatures.some(selected => selected.name === feature.name)
  }

  return (
    <div className='flex min-h-screen'>
      {/* Sidebar */}
      <div className='w-1/5 bg-white max-h-screen custom-scrollbar overflow-y-hidden hover:overflow-y-auto duration-300'>
        {sidebarData.map((item, index) => (
          <>
            <div
              key={index}
              onClick={() => toggleDropdown(index)}
              className='group hover:bg-slate-100 border-b-2 p-4 cursor-pointer transition duration-500 ease-in-out'
            >
              <div className='flex justify-between items-center text-black'>
                <div className='flex items-center gap-3'>
                  <img
                    className='w-5 h-5 opacity-50 group-hover:opacity-100'
                    src={item.img}
                    alt='Healthcare Icon'
                  />
                  <p className='text-sm'>{item.name}</p>
                </div>
                {item.dropDown && activeDropdown != index && (
                  <MdKeyboardArrowDown className='group-hover:text-black text-xl text-transparent' />
                )}
                {activeDropdown === index && (
                  <MdKeyboardArrowUp className='text-black text-xl' />
                )}
              </div>
              {activeDropdown === index && (
                <div className='pt-3'>
                  <p className='text-gray-500 text-xs'>
                    {item.dropDown && item.dropDown.length} features
                  </p>
                </div>
              )}
            </div>
            <div
              className={`dropdown max-h-40 custom-scrollbar overflow-y-hidden hover:overflow-y-auto duration-300 ${
                activeDropdown === index ? 'open' : ''
              }`}
            >
              {item.dropDown &&
                activeDropdown === index &&
                item.dropDown.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleFeatureSelection(item)}
                    className={`flex flex-grow w-full cursor-pointer ${
                      isFeatureSelected(item)
                        ? 'border-l-blue-500'
                        : selectedFeature?.name === item.name
                        ? 'border-l-gray-500'
                        : 'hover:border-l-gray-500'
                    } border-l-4 duration-300 hover:border-l-4 justify-between items-center p-4 border-b-[1px] bg-slate-100 text-black `}
                  >
                    <div className='flex w-full justify-between items-center'>
                      <div className='flex gap-2'>
                        {isFeatureSelected(item) ? (
                          <FaCircleCheck className='text-blue-500 mt-1 text-sm' />
                        ) : (
                          <img
                            className='w-5 h-5 mt-2 opacity-50'
                            src={item.icon}
                            alt='Healthcare Icon'
                          />
                        )}
                        <div>
                          <p className='text-sm'>{item.name}</p>
                          <p className='text-gray-500 text-xs'>
                            from {item.cost}
                          </p>
                          <p className='text-gray-500 text-xs'>
                            from {item.time}
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-x-2'>
                        <div
                          onClick={() => handleFeatureSelection(item)}
                          className={`${
                            selectedFeature?.name === item.name
                              ? 'bg-blue-500'
                              : 'bg-gray-300'
                          } p-2 rounded-md duration-300`}
                        >
                          <AiOutlineEye className='text-white' />
                        </div>
                        <div
                          onClick={() => handleFeaturesSelection(item)}
                          className='bg-gray-300 p-2 rounded-md'
                        >
                          {isFeatureSelected(item) ? (
                            <MdDeleteOutline className='text-white' />
                          ) : (
                            <FiPlus className='text-white' />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        ))}
      </div>

      {/* Playground Area */}
      <div className='flex-1 overflow-y-hidden bg-slate-100 duration-1000'>
        {selectedFeature ? (
          <div
            className={`flex justify-center ${
              selectedFeatures?.length > 0 ? 'h-3/4' : 'h-full'
            } items-center gap-x-6`}
          >
            <div className='bg-white p-3 rounded-3xl border-4 border-slate-200 w-48 h-96'>
              <img
                src={selectedFeature.mobile}
                alt='icon'
                className=' object-fill w-full h-full rounded-md'
              />
            </div>

            <div className='w-1/3'>
              <div className='flex items-center gap-2'>
                <p className='text-black text-lg'>{selectedFeature.name}</p>
                <div
                  onClick={() => handleFeaturesSelection(selectedFeature)}
                  className='bg-white w-7 h-7 items-center justify-center flex border-[1px] cursor-pointer'
                >
                  {isFeatureSelected(selectedFeature) ? (
                    <MdDeleteOutline className='text-black' />
                  ) : (
                    <FiPlus className='text-black' />
                  )}
                </div>
              </div>
              <p className='text-gray-500 py-1 text-xs'>
                {selectedFeature.category}
              </p>
              <div className='py-2'>
                <p className='text-gray-400 text-xs py-1'>
                  {selectedFeature.cost}
                </p>
                <p className='text-gray-400 text-xs py-[1px]'>
                  {selectedFeature.time}
                </p>
              </div>
              <p className='text-black text-sm py-2'>
                {selectedFeature.details}
              </p>
              <div className='bg-white w-24 h-8 items-center justify-center flex border-[1px] cursor-pointer'>
                <p className='text-black text-xs'>Add note</p>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-col relative justify-center items-center h-full'>
            <div className='absolute left-4'>
              <FaArrowLeftLong className='text-black text-xl' />
            </div>

            <p className='text-black text-2xl font-bold'>
              No features selected
            </p>
            <p className='text-black text-sm'>
              Select feature to preview from left
            </p>
          </div>
        )}
        {/* {selectedFeatures?.length > 0 && ( */}
        <div
          className={`h-1/4 ${
            selectedFeatures?.length > 0 ? 'animate-moveUp' : 'animate-moveDown'
          } bg-gray-400 duration-300`}
        >
          <div className='flex justify-center items-center h-full'>
            <p className='text-white text-2xl'>
              Length: {selectedFeatures?.length}
            </p>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  )
}
