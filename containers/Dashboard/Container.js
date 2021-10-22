import Link from "next/link";
import ContainerWrapper from './ContainerWrapper';

const menus = [
    { to: "/",  title: "Servislar" },
    { to: "/",  title: "NAME COMPANY" },
    { to: "/",  title: "Portfolio" },
]

const Container = () => {
    return (
        <ContainerWrapper>
            <div className="rightside">
                <header className="p-4 d-flex justify-content-center" >
                    {menus?.map((v, i) => <Link href={v.to}>
                    <div className="text-style">
                    {v.title}
                    </div>
                    </Link>)}
              </header>
            </div>
       </ContainerWrapper>
    )
}

export default Container;
