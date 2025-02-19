import "../../assets/styles/Contact.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Feedback from "./Feedback";
import { motion } from "framer-motion";
function Contactus() {
  return (
    <>
      <Header />
      <div className="twocontainer">
        <center>
          <div className="contact">
            <h1 className="para1 mt-3">Contact Us!</h1>
            <p className="cp">
              <i className="bx bxs-home-smile"></i> Coimbatore,Tamil Nadu
            </p>
            <p className="cp">
              <i className="bx bx-envelope"></i> perfectgarden@gmail.com
            </p>
            <p className="cp">
              <i className="bx bx-phone"></i> +91 68234 56788
            </p>
            <p className="cp">
              <i className="bx bx-printer"></i>+91 89234 56789
            </p>
          </div>
        </center>
        <center>
          <motion.div
            layout
            className="card"
            style={{ borderRadius: "1rem" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="card-top" layout="position">
              <div className="card-top__header">
                <h3>Plant care</h3>
              </div>
            </motion.div>

            <motion.div
              className="card-content"
              initial={{ clipPath: "circle(0% at 0 0)" }}
              animate={{ clipPath: "circle(140.9% at 0 0)" }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                type: "spring",
                damping: 25,
                stiffness: 100,
              }}
            >
              <p>
                Show a monthly calendar with highlighted dates for specific
                gardening tasks, events, or reminders.
              </p>
              <p>Suggest new plants or varieties based on gardening history.</p>
              <p>
                Showcase a featured plant with a beautiful image and interesting
                facts or care tips
              </p>
            </motion.div>
          </motion.div>
        </center>
        <div className="feedback">
          <Feedback />
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Contactus;
