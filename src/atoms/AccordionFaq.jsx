import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const AccordionFaq = (props) => {

  
  useEffect(() => {
    AOS.init({
      duration: 2500
    });
  }, []);

  const {Header,Title} = props;
  return (
    <>
        <div className='flex flex-col md:w-2/3 w-full mb-5' data-aos="fade-up">
            <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header">{Header}
                </AccordionSummary>
                <AccordionDetails className='bg-[#212121] text-white'>
                  {Title}
                </AccordionDetails>
            </Accordion>
        </div>
    </>
  )
}

export default AccordionFaq