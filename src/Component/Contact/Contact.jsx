import React from "react";
import Lottie from "lottie-react";
import lottie from "../../assets/contact.json";

const Contact = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center mt-10 mb-10 text-5xl font-bold font-serif text-primary" data-aos="fade-down"> Contact US</h2>
      <div className="md:grid grid-cols-2 items-center container mx-auto px-4">
        <div>
          <Lottie animationData={lottie} />
        </div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
           
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Message:</span>
                  </label>
                  <textarea
                    placeholder="Message "
                    className="textarea textarea-bordered textarea-md w-full max-w-xs"
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary" data-aos="fade-up" >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
