"use client";
import React from "react";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import SectionBadge from "../layout/SectionBadge";
import BulletList from "../layout/BulletList";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LandingOmSusan = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="flex flex-col items-start mb-2 md:mb-6">
          <SectionBadge>Din terapeut</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">Om mig</h2>
          <h6 className="text-base md:text-lg font-light text-gray-600 max-w-xl leading-relaxed">
            Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut med 20+ års 
            erfaring i arbejdet med børn, unge og familier.
          </h6>
          <div className="w-20 h-0.5 bg-[#1cc18e] mb-8"></div>
        </div>

        {/* Enkelt Card */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full">
              {/* Top badge */}
              <div className="bg-[#1cc18e]/10 border-b border-[#1cc18e]/20 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="inline-block px-3 py-1 border rounded-md text-xs font-light">
                    01
                  </span>
                </div>
                <h4 className="text-xl font-light text-gray-800 mb-2">
                  Min baggrund
                </h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Uddannet psykoterapeut med stor erfaring inden for børn, unge og familier
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-6">
                  <div className="space-y-3 text-gray-700 font-light text-sm leading-relaxed">
                    <p>
                      Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut hos
                      Essentiel integrativ essens, psyke, krop og helbredsterapi (EIP),
                      ved Karen Aaes på Essentielt institut i Århus.
                    </p>

                    <p>
                      Jeg har arbejdet i skoleverdenen i næsten 20 år og har derigennem
                      fået stor indblik i børn, unge og familier.
                    </p>

                    <p>
                      Essentielt institut er godkendt af og medlem af EAIP siden 2004.
                    </p>
                  </div>

                  <BulletList 
                    title="Erfaring med:" 
                    items={[
                      "Børn og unge",
                      "Familier", 
                      "Skoleverdenen",
                      "Integrativ terapi"
                    ]} 
                  />

                  <div className="mt-6 space-y-4">
                    <Accordion 
                      elevation={0} 
                      sx={{ 
                        boxShadow: 'none', 
                        '&:before': { display: 'none' },
                        backgroundColor: 'white',
                        border: '1px solid #1cc18e',
                        '&:hover': {
                          backgroundColor: 'white',
                          '& .MuiAccordionSummary-root': {
                            backgroundColor: '#1cc18e',
                            '& .MuiAccordionSummary-content div': {
                              color: 'white !important',
                            },
                            '& .MuiAccordionSummary-expandIconWrapper': {
                              color: 'white !important',
                            }
                          }
                        },
                        '& .MuiAccordionSummary-root': {
                          padding: '4px 0',
                          minHeight: 'auto',
                        }
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ 
                          padding: '12px',
                          minHeight: 'auto',
                          '& .MuiAccordionSummary-content': {
                            margin: '8px 0'
                          },
                          '& .MuiAccordionSummary-expandIconWrapper': {
                            color: '#1cc18e',
                            fontSize: '1rem',
                            marginTop: '8px',
                            marginBottom: '8px',
                            '&.Mui-expanded': {
                              transform: 'rotate(180deg)',
                            }
                          },
                          '&:hover': {
                            backgroundColor: 'transparent',
                          }
                        }}
                      >
                        <div className="text-gray-700 font-bold px-6 text-xs">Specialiseringer:</div>
                      </AccordionSummary>
                      <AccordionDetails sx={{ padding: '0 0 12px 12px' }}>
                        <BulletList 
                          items={[
                            "Essentiel Integrativ Psykoterapi",
                            "EMDR (WHO-anerkendt)",
                            "Mentaliserende tilgang", 
                            "Chok- og traumeforløsning"
                          ]} 
                        />
                      </AccordionDetails>
                    </Accordion>

                    <Accordion 
                      elevation={0} 
                      sx={{ 
                        boxShadow: 'none', 
                        '&:before': { display: 'none' },
                        backgroundColor: 'white',
                        border: '1px solid #1cc18e',
                        '&:hover': {
                          backgroundColor: 'white',
                          '& .MuiAccordionSummary-root': {
                            backgroundColor: '#1cc18e',
                            '& .MuiAccordionSummary-content div': {
                              color: 'white !important',
                            },
                            '& .MuiAccordionSummary-expandIconWrapper': {
                              color: 'white !important',
                            }
                          }
                        },
                        '& .MuiAccordionSummary-root': {
                          padding: '4px 0',
                          minHeight: 'auto',
                        }
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ 
                          padding: '12px',
                          minHeight: 'auto',
                          '& .MuiAccordionSummary-content': {
                            margin: '8px 0'
                          },
                          '& .MuiAccordionSummary-expandIconWrapper': {
                            color: '#1cc18e',
                            fontSize: '1rem',
                            marginTop: '8px',
                            marginBottom: '8px',
                            '&.Mui-expanded': {
                              transform: 'rotate(180deg)',
                            }
                          },
                          '&:hover': {
                            backgroundColor: 'transparent',
                          }
                        }}
                      >
                        <div className="text-gray-800 font-bold px-6 text-xs">Teoretisk fundament:</div>
                      </AccordionSummary>
                      <AccordionDetails sx={{ padding: '0 0 12px 0' }}>
                        <BulletList 
                          items={[
                            "Jung's analytiske psykologi",
                            "Systemisk tænkning",
                            "NLP metoden",
                            "Intuition og energiarbejde"
                          ]} 
                        />
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[600px]">
            <Image
              src="/images/momma-smile.jpg"
              alt="Susan Albertsen - Psykoterapeut"
              fill
              className="object-cover object-[50%_20%] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-16 md:mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <blockquote className="font-light text-gray-800 leading-relaxed mb-8 italic">
                "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud
                fra ren ubetinget kærlighed. Essens i terapien er at være helhjertet –
                at have hele hjertet med."
              </blockquote>
              <div className="flex justify-center items-center space-x-4">
                <div className="w-8 h-px bg-gray-300"></div>
                <cite className="text-gray-500 font-light not-italic tracking-wide text-sm">
                  Karen Aaes, Essentielt Institut
                </cite>
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingOmSusan;
