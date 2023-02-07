import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { BsPlayFill } from "react-icons/bs";
import Home2 from "../../components/Home2/Home2";
import Home3 from "../../components/Home3/Home3";
import Home4 from "../../components/Home4/Home4";
import Home5 from "../../components/Home5/Home5";
import Home7 from "../../components/Home7/Home7";
import Home8 from "../../components/Home8/Home8";
import Home9 from "../../components/Home9/Home9";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  const options2 = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="home" id="home">
        <div className="home-1">
          <div className="home-txt">
            <motion.p {...options} style={{ color: "rgb(255, 88, 0)" }}>
              Digital Marketing
            </motion.p>
            <div className="text">
              <motion.span {...options} transition={{ delay: 0.2 }}>
                M
              </motion.span>
              <motion.span {...options} transition={{ delay: 0.3 }}>
                a
              </motion.span>
              <motion.span {...options} transition={{ delay: 0.4 }}>
                x
              </motion.span>
              <motion.span {...options} transition={{ delay: 0.5 }}>
                i
              </motion.span>
              <motion.span {...options} transition={{ delay: 0.6 }}>
                m
              </motion.span>
              <motion.span {...options} transition={{ delay: 0.7 }}>
                i
              </motion.span>
              <motion.span {...options} transition={{ delay: 0.8 }}>
                z
              </motion.span>
              <motion.span {...options} transition={{ delay: 0.9 }}>
                e
              </motion.span>
              <br />
              <motion.span {...options} transition={{ delay: 1 }}>
                y
              </motion.span>
              <motion.span {...options} transition={{ delay: 1.1 }}>
                o
              </motion.span>
              <motion.span {...options} transition={{ delay: 1.2 }}>
                u
              </motion.span>
              <motion.span {...options} transition={{ delay: 1.3 }}>
                r{" "}
              </motion.span>
              <motion.span {...options} transition={{ delay: 1.4 }}>
                V
              </motion.span>
              <motion.span {...options} transition={{ delay: 1.5 }}>
                i
              </motion.span>
              <motion.span {...options} transition={{ delay: 1.6 }}>
                s
              </motion.span>
              <motion.span {...options} transition={{ delay: 1.7 }}>
                i
              </motion.span>
              <motion.span {...options} transition={{ delay: 1.8 }}>
                b
              </motion.span>
              <motion.span {...options} transition={{ delay: 1.9 }}>
                i
              </motion.span>
              <motion.span {...options} transition={{ delay: 2.1 }}>
                l
              </motion.span>
              <motion.span {...options} transition={{ delay: 2.2 }}>
                i
              </motion.span>
              <motion.span {...options} transition={{ delay: 2.3 }}>
                t
              </motion.span>
              <motion.span {...options} transition={{ delay: 2.4 }}>
                y
              </motion.span>
            </div>
            <motion.p {...options} transition={{ delay: 2 }} className="para">
              Share processes and data securely on a need to know basis need for
              reconciliation it combines
            </motion.p>
            <div className="buttons">
              <motion.a
                {...options2}
                transition={{ delay: 2 }}
                style={{ transition: "all 0.3s linear" }}
                className="btn2"
                href={"/contact"}
              >
                Get Started
              </motion.a>
              <motion.a
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 2 }}
                style={{ transition: "all 0.3s linear" }}
                className="ytbtn"
                href={"https://youtube.com"}
              >
                <BsPlayFill />
              </motion.a>
            </div>
          </div>
          <div className="home-img">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ transition: "all 0.3s linear" }}
              className="img"
            >
              <motion.img
                initial={{ scaleZ: 0, opacity: 0 }}
                whileInView={{ scaleZ: 1, opacity: 1 }}
                transition={{ delay: 1.4 }}
                style={{ transition: "all 0.5s linear" }}
                src="/images/macbook_mockup-1.png"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <Home2 />
        <Home3 />
        <Home4 />
        <Home5 />
        <div className="whats-app">
          <a href="http://wa.me/qr/7COUQGIELTRM1" target={"_blank"}>
            <IoLogoWhatsapp />
            <span>+8183924439</span>
          </a>
        </div>
      </section>
      <Home7 />
      <Home8 />
      <Home9 />
    </>
  );
};

export default Home;
