import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, UncontrolledCarousel, Table } from 'reactstrap';
import project1_1 from "../../../images/assects/drms_01.png"
import project1_2 from "../../../images/assects/drms_02.png"
import project1_3 from "../../../images/assects/drms_03.png"
import project1_4 from "../../../images/assects/drms_04.png"


const DRMS = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const project_1 = [
        {
            src: project1_1,
            caption: '',
            altText: 'Slide 1',
            key: '1'
        },
        {
            src: project1_2,
            caption: '',
            altText: 'Slide 2',
            key: '2'
        },
        {
            src: project1_3,
            caption: '',
            altText: 'Slide 3',
            key: '3'
        },
        {
            src: project1_4,
            caption: '',
            altText: 'Slide 4',
            key: '4'
        }
    ];

    

    return (
        <section className="pt-5">
            <div className="container">
                <h1>DRMS</h1>
                <div className="conatiner project1 row d-flex shadow-lg bg-light align-items-center" 
                id="project1" data-aos="flip-up" data-aos-delay="800">
                <div className="col-md-1 order-md-last">
                   <div className="lineP2" data-aos="fade-in" data-aos-delay="200"></div>
                </div>
                    <div className="container col-md-3 mt-5 mb-5 order-md-3">
                        <h1 align="center" style={{fontSize:"150px"}} data-aos="fade-left" data-aos-delay="1000">04</h1>
                    </div>
                    <div className="container col-md-8 mt-5 mb-5">
                        <UncontrolledCarousel items={project_1} style={{height:'100px'}} />
                    </div>
                </div><div className="lineP1" data-aos="fade-in" data-aos-delay="200"></div>
                <div className="p-3">
                    <Collapse isOpen={!isOpen} align="center">
                        <div>
                            <CardBody style={{textAlign:"left"}}>
                                <h1>DRMS (Daily Report Management Sytsem). A mini-project for College.</h1>
                            </CardBody>
                        </div>
                    </Collapse>
                </div>
                    <Button color="primary" onClick={toggle} style={{ margin: '5%' }}>Know More</Button>
                <Collapse isOpen={isOpen} align="center">
                    <Card>
                        <CardBody style={{textAlign:"left"}}>
                            DRMS(Daily Report Management System), this is my mini-project for college. 
                            This has mainly two users i.e. faculties and admin, where faculties will make their 
                            daily report of their class attendance and submit it. There is a admin user that can 
                            keep tack of this records.<br/><br/>
                            <p>
                                This is for mini-project, for further addons I am thinking of adding of 'Students Portal' 
                                where the students would put their quries related o their academics, or can also get
                                in touch to their subject teachers.
                            </p>
                            <div className="col-3">
                                    <Table borderless>
                                        <tbody>
                                            <tr>
                                            <td>Status:</td>
                                            <td>On going</td>
                                            </tr>
                                            <tr>
                                            <td>Type:</td>
                                            <td>Solo</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                        </CardBody>
                    </Card>
                        <Button color="outline-primary" onClick={toggle} style={{ margin: '5%' }}>Close</Button>
                </Collapse>
            </div>
        </section>
    )
}

export default DRMS