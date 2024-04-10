import { Col, Row } from "react-bootstrap";

export const MailchimpForm = () => {

  return (
    <>
    <section className="cv" id="cv">
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Click the button to <br></br>Download full Resume
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
                <a
                  href="https://drive.google.com/file/d/1kGnhpC6BDVSrfNBIacMgMSb75OPEv_0v/view?usp=sharing"
                  target="_blank"
                  download
                >
                  <button type="submit">Download</button>
                  
                </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
    </section>
    </>
  )
}
