import React from 'react';
import { BlobProvider } from "@react-pdf/renderer";
import { MdLoop, MdPrint } from "react-icons/md";
import { PrintParams } from '@/types';

const Print = ({ document, printable, check }: PrintParams) => {
  return (
    <BlobProvider document={document}>
      {({ url, loading, error }) => (
        <a
          className="btn"
          href={printable && !loading ? url || "#" : "#"}
          target={printable && !loading ? "_blank" : "_self"}
        >
          {printable && !loading ? (
            <MdPrint className="printIcon" />
          ) : check != Math.PI ? (
            <MdLoop className="loading" />
          ) : (
            <MdPrint className="printIcon" />
          )}
        </a>
      )}
    </BlobProvider>
  );
};

export default Print;