import React from 'react';
import './About.css';
import AboutEmployee from './AboutEmployee';

const employees = [
{
    id: 1,
    name: "Patrick",
    desc: "Patrick, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae omnis mollitia. Corrupti harum natus eos minus iure, vel quidem iste aperiam quam tenetur a nesciunt fugit in. At, molestias.",
    img: "https://i.postimg.cc/TY8wNKYv/patrick.png"
},
{
    id: 2,
    name: "Spongebob",
    desc: "Spongebob, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae omnis mollitia. Corrupti harum natus eos minus iure, vel quidem iste aperiam quam tenetur a nesciunt fugit in. At, molestias.",
    img: "https://i.postimg.cc/d1ymJRjq/spongebob.png"
},
]
function About() {
    return (
      <section className="about" id="staffPage">
          <div className="container">
          <h1>Nasi specjaliści</h1>
          {employees.map(employee => {
              return <AboutEmployee name={employee.name} desc={employee.desc} img={employee.img} key={employee.id}></AboutEmployee>
          })}
          </div>
      </section>
    );
  }
  export default About;