import Faq from "react-faq-component";
import React, { Component } from "react";

const data = {
  title: "Frequently Asked Questions (FAQ) ",
  rows: [
    {
      title:
        "Which age groups can register for vaccination on the this portal?",
      content: `All beneficiaries aged 18 years and above can register for vaccination.`,
    },
    {
      title: "Is online registration mandatory for Covid-19 vaccination?",
      content:
        "Vaccination Centers provide for a limited number of on-spot registration slots every day. Beneficiaries aged 45 years and above can schedule appointments online or walk-in to vaccination Centers. Beneficiaries aged 18 years and above can schedule appointments online or walk-in to Government vaccination Centers. However, beneficiaries aged 18-44 years should mandatorily register themselves and schedule appointment online before going to a Private vaccination centre. In general, all beneficiaries are recommended to register online and schedule vaccination in advance for a hassle-free vaccination experience.",
    },
    {
      title: "When should I take the 2nd dose of vaccination?",
      content: `It is recommended that the 2nd dose of COVAXIN should be administered in the interval of 28 days to 42 days after the 1st dose. The 2nd dose of COVISHIELD should be administered in the interval of 84 days to 112 days after the 1st dose. The second dose of SPUTNIK V should be administered in the interval of 21 days to 90 days after the 1st dose.`,
    },
    {
      title: "Is vaccination free at all Vaccination Centres?",
      content:
        "No. Currently, vaccination is free at Government hospitals and charged at INR 250 in Private hospitals for beneficiaries aged 45 years and above. From 1st May onwards, the Vaccination for people of 45 years or more will continue to be free at the Government facilities. For people between 18 to 44 years the States will announce the policy relating to payment. Vaccination will be priced by private facilities and you can see the price of each vaccine at the time of booking.",
    },
  ],
};

const styles = {
  bgColor: "#18206F",
  titleTextColor: "white",
  rowTitleColor: "#FFFDD0",
  rowContentColor: "white",
  arrowColor: "yellow",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

class Faqq extends Component {
  render() {
    return (
      <div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    );
  }
}

export default Faqq;
