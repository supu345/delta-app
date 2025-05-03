import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div className=" flex flex-col px-7 py-9 mt-9">
        <p className=" text-black text-4xl md:text-6xl font-bold">Contact Us</p>
      </div>

      {/* Map Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-10 px-4 py-5">
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.464171484602!2d90.34286707533641!3d23.76647987865942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c08318495821%3A0x7343a1a49666d2c1!2sThe%20New%20Delta%20Apparels%20Limited!5e0!3m2!1sen!2sbd!4v1746172732681!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full md:px-9 md:w-1/2 flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-bold">
            THE NEW DELTA APPARELS LTD
          </p>
          <p className="mt-2 w-1/2">
            Plot # 6,8 &10, Road # 1/A, Turag,housing, Mohammadpur.;
            Mohammadpur,PS; Dhaka-1207; Bangladesh
          </p>
          <p className="mt-2">01911264165 & 01743974636</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
