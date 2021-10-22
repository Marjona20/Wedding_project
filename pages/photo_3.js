import "../public/noname.jpg"
import "../public/Vector 6.jpg"
const massiv=[
    {
        id:1,
        image: "noname.jpg"
    },
    {
        id:2,
        image: "noname.jpg"
    },
    {
        id:3,
        image: "noname.jpg"
    },
   
]
export const Photo_3 = () => {
    return (
      <div className="section3 fon"> 
       <h1 className="text03-style text-center p-5">
          Instagram
        </h1>
            <div className="map">
                {
                   massiv.map(value=>{
                       return(
                        <div key={value.id}>
                                <img src={value.image} className="img-width1" alt="" />
                        </div>
                       )
                   })
                }
                </div>
                <h1 className="text04-style text-center p-5">
          Follow <img src="Vector 6.jpg"></img>
        </h1>
      </div>
    )
}

export default Photo_3;