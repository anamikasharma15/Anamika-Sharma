import React from 'react';
import { Container } from 'react-bootstrap';
import SkillBar from 'react-skillbars';

const MySkill = () => {
    const skills = [
        {type: "HTML", level: 95},
        {type: "CSS", level: 85},
        {type: "Bootstrap", level: 90},
        {type: "Tailwind", level: 80},
        {type: "UI Material ", level: 75},
        {type: "Javascript", level: 70},
        {type: "React", level: 92},
      ];
    return (
        <div>
           <Container>
           <div style={{marginTop:'90px'}}>
               <h3 className="text-center mt-5 mb-5" style={{fontSize:"30px",fontWeight:'bold', fontFamily:'cursive'}}>My Key <span style={{fontSize:"30px",fontWeight:'bold',color:'#002db3'}}>Skills</span></h3>

              <SkillBar skills={skills}/>
               </div>
           </Container>
        </div>
    );
};

export default MySkill;