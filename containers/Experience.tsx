import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    experience && (
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-briefcase-24 text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Experience</h4>
              </div>
            </div>
            <Row className="row-grid align-items-start">
              {experience.map((data, i) => {
                return <ExperienceCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </motion.div>
    )
  );
};

export default Experience;
