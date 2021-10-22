import "../public/cardss.jpg"

const massiv=[
    {
        id:1,
        text: `To‘y`,
        name: "taklifnomasi",
        title: "10 000 so‘m",
        title2:"Dona",
        adres:"Toshkent vil, Toshkent shahar",
        image: "cardss.jpg"
    },
    {
        id:1,
        text: `To‘y`,
        name: "taklifnomasi",
        title: "10 000 so‘m",
        title2:"Dona",
        adres:"Toshkent vil, Toshkent shahar",
        image: "cardss.jpg"
    },
    {
        id:1,
        text: `To‘y`,
        name: "taklifnomasi",
        title: "10 000 so‘m",
        title2:"Dona",
        adres:"Toshkent vil, Toshkent shahar",
        image: "cardss.jpg"
    },
    {
        id:1,
        text: `To‘y`,
        name: "taklifnomasi",
        title: "10 000 so‘m",
        title2:"Dona",
        adres:"Toshkent vil, Toshkent shahar",
        image: "cardss.jpg"
    },
    
]
export const Cards = () => {
    return (
      <div className="section3"> 
       <h1 className="text01-style p-5">
          San'atkorlar
        </h1>
            <div className="map">
                {
                   massiv.map(value=>{
                       return(
                        <div key={value.id}>
                            <div className="mt-0">
                                <img src={value.image} className="w-100 img-width" alt="" />
                            </div>
                            <div className="card-footer">
                                <h5>{value.text} <small className="fs-6">{value.name}</small></h5>
                                <h6>{value.title} / <small className="p">{value.title2}</small></h6>
                                <small className="p">{value.adres}</small>
                            </div>
                        </div>
                       )
                   })
                }
              
                </div>
                <div className="mt-5" >
                <div   className="icon1 px-5">
                               <p >Taklifnomalar</p>
                        </div>
                </div> 
      </div>
    )
}

export default Cards;