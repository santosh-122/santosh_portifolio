import { React, useState } from 'react';
import { IoMdCloudDownload } from "react-icons/io";
import Spinner from 'react-bootstrap/Spinner';

function DownloadPdf() {
    const [loader, setLoader] = useState(false);

    const showMessageAfterDelay = () => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
            handleDownload();
        }, 2000);
    };

    const handleDownload = () => {
        const pdfUrl = '/pdf/resume.pdf'; // Update the URL with your PDF file path
        const anchor = document.createElement('a');
        anchor.href = pdfUrl;
        anchor.download = 'santoshkumar_resume.pdf'; // Update the file name if needed
        anchor.click();
    };

    return (
        <div className='mt-4' style={{ backgroundColor: "#F1F1EF" }} id="Resume">
            <div className='pt-4'>
            <h3 style={{color:"#838383"}}> Download My Resume</h3>
            {(loader === true) &&
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
             <Spinner animation="grow" variant="danger" />
             <Spinner animation="grow" variant="warning" />
             <Spinner animation="grow" variant="info" />
             </div>
            }
            {(loader === false) &&
                <button style={{ border: "none" }} onClick={showMessageAfterDelay}><IoMdCloudDownload style={{ color: 'red', fontSize: '100px' }} /></button>
            }
            </div>
        </div>
    );
}

export default DownloadPdf;
