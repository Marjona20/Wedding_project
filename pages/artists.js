import "../public/1.jpg"
import "../public/2.jpg"
import "../public/3.jpg"
import "../public/4.jpg"

const massiv=[
    {
        id:1,
        name: "Davron Kabulov",
        title: "Boshlovchi",
        image: "1.jpg"
    },
    {
        id:2,
        name: "Munisa Rizayeva ",
        title: "San'atkor",
        image: "2.jpg"
    },
    {
        id:3,
        name: "Sardor Mamadaliyev",
        title: "San'atkor",
        image: "3.jpg"
    },
    {
        id:4,
        name: "Via Maroqand",
        title: "San'atkor",
        image: "4.jpg"
    }
]
export const Artist = () => {
    return (
      <div className="section3"> 
       <h1 className="text01-style p-5">
          San'atkorlar
        </h1>
            <div className="map">
                {
                   massiv.map(value=>{
                       return(
                        <div key={value.id} className="">
                            <div className="mt-0">
                                <img src={value.image} className="img-width" alt="" />
                            </div>
                            <div className="card-footer">
                                <h6>{value.name}</h6>
                                <p>{value.title}</p>
                            </div>
                        </div>
                       )
                   })
                }
              
                </div>
                <div className="mt-5" >
                <div   className="icon1">
                               <p >San'atkorlar</p>
                        </div>
                        <div   className="icon1 ms-5">
                              <p>Sozandalar</p>
                        </div>
                </div> 
      </div>
    )
}

export default Artist;