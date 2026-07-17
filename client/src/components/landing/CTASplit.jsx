import React from 'react'
import ctaImage from "../../assets/style_image.png";
import FadeUp from './FadeUp';
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const CTASplit = ({C,serif,sans}) => {
  return (
    <section className="bg-[#F8F5F0]">
      <div className="grid min-h-[380px] grid-cols-1 lg:grid-cols-2">
        <div
          className="min-h-[300px] lg:min-h-[380px] bg-cover bg-left bg-no-repeat"
          style={{
            backgroundImage: `url(${ctaImage})`,
          }}/>
        <div className="flex items-center justify-center bg-[#EDE8E0] px-6 py-14 md:px-12 lg:px-16">
          <FadeUp>
            <div>
              <h2
                className="mb-5 text-4xl font-bold leading-tight text-[#2E2621] md:text-5xl"
                style={{ fontFamily: "Cormorant Garamond" }}>
                Ready to Elevate
                <br />
                Your Style?
              </h2>
              <p className="mb-8 max-w-sm text-[15px] leading-7 text-[#6F7B82]">
                Join Layrd and let AI help you create
                outfits that truly represent your style.
              </p>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2E2621] px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#243C47]">
                  Get Started for Free →
                </Link>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}


export default CTASplit