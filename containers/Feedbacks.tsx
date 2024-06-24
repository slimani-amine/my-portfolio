import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import { motion } from "framer-motion";

const Feedbacks = () => {
  return (
    feedbacks && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="fa fa-star text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Our Clients Feedback</h4>
              </div>
            </div>
            <Row className="g-3">
              {feedbacks.map((data, i) => {
                return (
                  <Col key={i} lg={6}>
                    <FeedbackCard {...data} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </motion.div>
    )
  );
};

export default Feedbacks;
