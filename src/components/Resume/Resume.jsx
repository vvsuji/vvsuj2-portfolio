import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import pdf from '../../assets/SujiFalconSWEResume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import Particle from '../Particle';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
	'https://github.com/Brandon-Alvarez-03/Brandon-Alvarez-03.github.io/blob/main/my-portfolio/src/assets/Resume_Brandon_Alvarez.pdf';

function Resume() {
  const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

  return (
		<div>
			<Container fluid className='resume-section'>
				<Row style={{ justifyContent: 'center', position: 'relative' }}>
					<Button
						variant='primary'
						href={pdf}
						target='_blank'
						style={{ maxWidth: '250px' }}>
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button>
				</Row>

				<Row className='resume'>
					<Document file={pdf} className='d-flex justify-content-center'>
						<Page pageNumber={1} scale={width > 786 ? 1.4 : 0.6} />
					</Document>
				</Row>
			</Container>
		</div>
	);
}

export default Resume;

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function Resume() {
// 	const [width, setWidth] = useState(1200);

// 	useEffect(() => {
// 		setWidth(window.innerWidth);
// 	}, []);

// 	return (
// 		<div>
// 			<Container fluid className='resume-section'>
// 				{/* <Particle /> */}
// 				<Row style={{ justifyContent: 'center', position: 'relative' }}>
// 					<Button
// 						variant='primary'
// 						href={pdf}
// 						target='_blank'
// 						style={{ maxWidth: '250px' }}>
// 						<AiOutlineDownload />
// 						&nbsp;Download Resume
// 					</Button>
// 				</Row>

// 				<Row className='resume'>
// 					<Document file={pdf} className='d-flex justify-content-center'>
// 						<Page pageNumber={1} scale={width > 786 ? 1.4 : 0.6} />
// 					</Document>
// 				</Row>
// 			</Container>
// 		</div>
// 	);
// }

// export default Resume;
