
export default function Form({userData,handelChange}) {

  return (
    <>
      <div className="form-left w-full">
        
        {/* user personal data */}
        <div className="user-data checkout-box mt-5">
            <h2 className="text-center font-bold uppercase text-backgroundColor text-lg mb-5">contact info</h2>
            <div className="user-data capitalize flex justify-between gap-y-7 flex-wrap">

                {/* main telephone number */}
                <div className="w-[49%] max-md:w-full">
                    <label htmlFor="tel-box" className="label">phone number</label>
                    <input 
                        type="tel" 
                        name="telOne"
                        value={userData.telOne}
                        onChange={handelChange}
                        id="tel-box" 
                        required 
                        className="input-box"
                    />
                </div>

                {/* optional telephone number */}
                <div className="w-[49%] max-md:w-full">
                    <label htmlFor="second-tel-box" className="label">second phone no.(optional)</label>
                    <input 
                        type="tel" 
                        name="telOp"
                        value={userData.telOp}
                        onChange={handelChange}
                        id="second-tel-box" 
                        className="input-box"
                    />
                </div>

                {/* user name */}
                <div className="w-[49%] max-md:w-full">
                    <label htmlFor="user-name" className="label">full name</label>
                    <input 
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handelChange}
                        id="user-name"
                        required 
                        className="input-box"
                    />
                </div>

                {/* email address box */}
                <div className="w-[49%] max-md:w-full">
                    <label htmlFor="mail-box" className="label">e-mail</label>
                    <input 
                        type="email" 
                        name="email"
                        value={userData.email}
                        onChange={handelChange}
                        id="mail-box" 
                        required 
                        className="input-box"
                    />
                </div>

            </div>
        </div>

        {/* user location data */}
        <div className="location-data checkout-box mt-5">
            <h2 className="text-center font-bold uppercase text-backgroundColor text-lg mb-5">location</h2>
            <div className="user-data capitalize flex justify-between gap-y-7 flex-wrap">

                {/* address box */}
                <div className="w-full">
                    <label htmlFor="address" className="label">address</label>
                    <input 
                        type="text" 
                        name="address"
                        value={userData.address}
                        onChange={handelChange}
                        id="address" 
                        required 
                        className="input-box w-full"
                    />
                </div>

                {/* city box */}
                <div className="w-[49%] max-md:w-full">
                    <label htmlFor="city" className="label">city</label>
                    <input 
                        type="tel" 
                        name="city"
                        value={userData.city}
                        onChange={handelChange}
                        required
                        id="city" 
                        className="input-box "
                    />
                </div>

                {/* Building name/number box */}
                <div className="w-[49%] max-md:w-full">
                    <label htmlFor="Building name/number" className="label">Building name/number:</label>
                    <input 
                        type="text" 
                        name="building"
                        value={userData.building}
                        onChange={handelChange}
                        id="Building name/number"
                        className="input-box"
                    />
                </div>

                {/* floor box */}
                <div className="w-[49%] max-md:w-full">
                    <label htmlFor="floor" className="label">floor</label>
                    <input 
                        type="text" 
                        name="floor"
                        value={userData.floor}
                        onChange={handelChange}
                        id="floor"
                        className="input-box"
                    />
                </div>

                {/* appartment box */}
                <div className="w-[49%] max-md:w-full">
                    <label htmlFor="appartment" className="label">appartment</label>
                    <input 
                        type="text" 
                        name="appartment"
                        value={userData.appartment}
                        onChange={handelChange}
                        id="appartment"
                        className="input-box"
                    />
                </div>

                {/* exstra data box */}
                <div className="w-full">
                    <label htmlFor="extra-details" className="label">extra details</label>
                    <textarea  
                        id="extra-details" 
                        name="exstraD"
                        value={userData.exstraD}
                        onChange={handelChange}
                        placeholder="Write any additional details here....."
                        className="input-box w-full h-24 p-2 placeholder:text-sm text-gray-400"
                    >
                    </textarea>
                </div>

            </div>
        </div>

      </div>
    </>
  )
}
