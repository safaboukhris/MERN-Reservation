const Amenities = () => {
  return (
      <>
          <h1 className="text-center text-4xl mt-40 mb-12 font-semibold text-[#154849]">
              ÉQUIPEMENTS
          </h1>
          <div className="flex justify-center px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-48 max-w-5xl">
                  {/* Item 1 */}
                  <div className="flex flex-col items-center">
                      <img
                          src="/3.png"
                          alt="Photo 1"
                          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
                      />
                      <h3 className="mt-4 text-lg font-semibold text-gray-600 italic">
                          Café
                      </h3>
                  </div>
                  {/* Item 2 */}
                  <div className="flex flex-col items-center">
                      <img
                          src="/2.png"
                          alt="Photo 2"
                          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
                      />
                      <h3 className="mt-4 text-lg font-semibold text-gray-600 italic">
                          Connexion internet
                      </h3>
                  </div>
                  {/* Item 3 */}
                  <div className="flex flex-col items-center">
                      <img
                          src="/1.png"
                          alt="Photo 3"
                          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
                      />
                      <h3 className="mt-4 text-lg font-semibold text-gray-600 italic">
                          Des postes équipés
                      </h3>
                  </div>
              </div>
          </div>
      </>
  );
};

export default Amenities;
