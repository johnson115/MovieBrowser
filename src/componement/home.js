import Hero from "./hero";
import Browser from "./browser movie";

const Home = () => {
    return (
        <>
        <div class="all">
  <div class="row gx-5">
    <div class="col h-100 bg-black vh-100">
     <div class="p-3">
          
      <img src="https://cdn.pixabay.com/photo/2013/07/13/14/03/film-162029_1280.png
" className="figure-img  mx-auto  "  alt="logo"></img></div>
    </div>
    <div class="col bg-warning vh-100">
      <div className="cont">
        <h1>
      <Hero text={"John's CineNexa movies"} class="text-warning"/>
      </h1>
      </div>
      <h2 className="text-dark">Welcome</h2>
      <p>Experience endless hours of entertainment on our free website. Whether you're a movie enthusiast or a series lover, we've got you covered. Explore our diverse collection and immerse yourself in the world of captivating stories</p>
      <div className="loop">
      <button className="text-warning"> take a look </button>
      <img className="peekimg" src="
https://th.bing.com/th/id/OIP.H_Fqx5oxCCpfckDtDCRukgAAAA?pid=ImgDet&rs=1" alt="peek"></img>
      </div>
      <Browser/>
    </div>
  </div>
</div>

        </>
    )
}
export default Home;