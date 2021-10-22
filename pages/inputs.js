import React from "react";

const list1 =[
{
  id:1,
  name:"To'yxonalar",
},
{
  id:2,
  name:"Taklifnomalar",
},
{
  id:3,
  name:"Gullar",
},
{
  id:4,
  name:"Oshpazlar",
},
{
  id:5,
  name:"Sahna bezaklari",
},
{
  id:6,
  name:"Uzuklar",
},
]

const list2=[
  {
    id:1,
    name:"San`atkorlar",
  },
  {
    id:2,
    name:"To‘y liboslari",
  },
  {
    id:3,
    name:"Sozandalar",
  },
  {
    id:4,
    name:"Tasvir va montaj",
  },
  {
    id:5,
    name:"Fotostudiolar",
  },
]
const list3=[
  {
    id:1,
    name:"Mashinalar",
  },
  {
    id:2,
    name:"Multi  qahramonlar",
  },
  {
    id:3,
    name:"Sovg‘alar",
  },
  {
    id:4,
    name:"Shirinliklar",
  },
]
export const Inputs = () => {
    return (
        <div className="section2">
        <div className="p-4 pt-5 d-flex justify-content-center"> 
         <input type="search" placeholder="Qidirish" className="input01-style me-4"/>
         <input type="search" placeholder="Viloyat , shahar" className="w-25 ms-5 input01-style"/>
        </div>
        <h1 className="text01-style text-center p-5">
          Xizmatlarimiz
        </h1>
        <div className="d-flex justify-content-center">
        {
                   list1.map(value=>{
                       return(
                        <div key={value.id} className="lists-style mx-2">
                          <toyxona />
                       <p >{value.name}</p>
                        </div>
                       )
                   })
                }
      </div>
      <div className="d-flex justify-content-center mt-4">
        {
                   list2.map(value=>{
                       return(
                        <div key={value.id} className="lists-style mx-2">
                       <p >{value.name}</p>
                        </div>
                       )
                   })
                }
      </div>
      <div className="d-flex justify-content-center mt-4">
        {
                   list3.map(value=>{
                       return(
                        <div key={value.id} className="lists-style mx-2">
                       <p >{value.name}</p>
                        </div>
                       )
                   })
                }
      </div>
        </div>
    )
}

export default Inputs;