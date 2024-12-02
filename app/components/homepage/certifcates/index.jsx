import React from 'react';
import fs from 'fs';
import path from 'path';
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import { FileText } from 'lucide-react';

// This function will be used in getStaticProps to read PDF files
export function getCertificates() {
  const certificatesDir = path.join(process.cwd(), 'public', 'images', 'certificates');
  
  try {
    // Read all files in the certificates directory
    const fileNames = fs.readdirSync(certificatesDir);
    
    // Filter only PDF files
    const certificates = fileNames
      .filter(fileName => path.extname(fileName).toLowerCase() === '.pdf')
      .map(fileName => ({
        name: fileName
          .replace('.pdf', '')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase()), // Capitalize each word
        pdfPath: `/images/certificates/${fileName}`
      }));
    
    return certificates;
  } catch (error) {
    console.error('Error reading certificates directory:', error);
    return [];
  }
}

// getStaticProps to fetch certificates at build time
export async function getStaticProps() {
  const certificates = getCertificates();
  
  return {
    props: {
      certificates
    }
  };
}

function Certificates({ certificates }) {
  return (
    <div id="certificates" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {certificates.length > 0 ? (
        <div className="w-full my-12">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {certificates.map((certificate, id) => (
              <Link 
                href={certificate.pdfPath} 
                target="_blank" 
                rel="noopener noreferrer"
                key={id}
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <FileText 
                        className="text-white w-10 h-10 group-hover:text-violet-500 transition-colors" 
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg text-center">
                      {certificate.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </Marquee>
        </div>
      ) : (
        <div className="text-center text-gray-400 my-12">
          No certificates found
        </div>
      )}
    </div>
  );
}

export default Certificates;