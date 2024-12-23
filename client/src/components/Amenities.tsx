const Amenities = () => {
    return (
        <>
            <h1 className='text-center text-4xl mt-40 mb-12 font-semibold text-[#154849]'>
          AMENITIES
        </h1>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-48 max-w-5xl w-42 h-42'>
            <div className='flex flex-col items-center'>
              <img
                src='/3.png'
                alt='Photo 1'
                className='w-22 h-22 object-cover rounded-lg '
              />
              <h3 className='mt-4 text-lg font-semibold text-gray-600 italic'>
                Café
              </h3>
            </div>
            <div className='flex flex-col items-center'>
              <img
                src='/2.png'
                alt='Photo 2'
                className='w-22 h-22 object-cover rounded-lg '
              />
              <h3 className='mt-4 text-lg font-semibold text-gray-600 italic'>
                connexion internet
              </h3>
            </div>
            <div className='flex flex-col items-center'>
              <img
                src='/1.png'
                alt='Photo 3'
                className='w-22 h-22 object-cover rounded-lg '
              />
              <h3 className='mt-4 text-lg font-semibold text-gray-600 italic'>
                Des postes équipés
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Amenities;