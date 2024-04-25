import React, {useEffect} from 'react';
import './style.css'
import Container from 'react-bootstrap/Container';


export default function TitleBox({title, desc}) {
    return (
        <Container className='mt-5 pt-md-5 pt-3'>
            <div className="w-100 text-center section-title">
                <span className="title-box purple-text-color fw600">{title}</span>
                <h2 className='text-black mt-3 fw800 lh1-8'>{desc}</h2>
            </div>
        </Container>
    )
}