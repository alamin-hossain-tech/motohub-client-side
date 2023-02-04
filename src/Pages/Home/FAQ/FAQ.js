import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  AOS.init();
  return (
    <div className="bg-neutral-600">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="container mx-auto pt-56 pb-32 text-center"
      >
        <h4 className="text-blue-600 text-xl font-semibold ">FAQs</h4>
        <h2 className="text-4xl font-semibold text-white ">
          Frequently Ask Question
        </h2>
        <div className="w-2/3 mx-auto pt-12">
          <Accordion className="bg-black">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="py-2">
                {" "}
                Can I See the Inspection Certification?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-start">
                A "certified" used car is just a used car that has been
                inspected, repaired, and restored to near-new condition. That's
                fine, and manufacturer certified used cars can be great deals.
                But a dealer certified car can be a wreck purchased from an
                auction, put together with junkyard parts, and "certified" by
                the dealer on the basis of... whatever. Ask to see the
                inspection and repair work orders so you know what was done to
                the car beforehand.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="py-2">
                Can You Catch Up on the Service?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-start">
                If you're looking at a used car with 100,000 miles on the
                odometer, odds are pretty good that it's got an expensive
                service coming up soon - could be spark plugs, a timing belt, a
                full fluid replacement, transmission filter change, almost
                anything. When you go home to think about your purchase (which
                you should), go online and look up the manufacturer service
                schedule. If the car is coming up on a big service interval,
                have the dealer perform it as a condition of sale.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="py-2">
                What Aftermarket/Dealer Parts Are on the Car?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-start">
                Would you drive to Pep Boys and shell out $200 for a pair of mud
                flaps and stick-on fish-eye mirrors? Of course not. But would
                you notice if your dealer were charging $45,750 instead of
                $45,550? Dealers have a longstanding habit of "doing things"
                with cars - adding "custom" dealer touches and then charging
                customers ten times what they're worth. Ask about aftermarket
                alarms, tinted windows, or the "paint protection package" (aka
                "silicone wax"), and compare those charges to the market value
                of those add-ons.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="py-2">
                What's My Out-the-Door Price?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-start">
                Dealers typically tack on loads of taxes, fees, and charges to
                turn a profit. Some of them are legit and inevitable, like
                documentation fees, registration, and tax. The rest are there to
                bump up the dealer's bottom-line profits. Just skip the BS and
                ask them about your out-the-door price. If you want to negotiate
                down from that, let them figure out which charge to reduce.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="py-2">
                Can I Take It Home for a Test Drive?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-start">
                Different dealerships have different policies on test drives,
                but as a general rule, if you're a serious buyer spending big
                money on a car from a reputable dealer, they're more likely to
                let you take the car on an extended test drive. Ideally, you'd
                want to keep the car overnight, and drive it at least a 50 miles
                before deciding to buy. Anyone who expects you to be cool with
                dropping $50K on a car you've only driven for 15 minutes may
                have something to hide.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
