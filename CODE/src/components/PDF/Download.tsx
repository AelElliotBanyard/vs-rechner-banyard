import React from 'react';
import { BlobProvider } from "@react-pdf/renderer";
import { MdDownload, MdLoop } from "react-icons/md";
import { DownloadParams } from '@/types';

const Download = ({ document, printable, filename, check }: DownloadParams) => {
  return (
    <BlobProvider document={document}>
      {({ url, loading, error }) => (
        <a
          className="btn"
          href={printable && !loading ? url || "#" : "#"}
          target={printable && !loading ? "_blank" : "_self"}
          download={filename}
        >
          {printable && !loading ? (
            <MdDownload className="downloadIcon" />
          ) : check != Math.PI ? (
            <MdLoop className="loading" />
          ) : (
            <MdDownload className="downloadIcon" />
          )}
        </a>
      )}
    </BlobProvider>
  );
};

export default Download;