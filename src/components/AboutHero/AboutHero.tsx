import heroImg from "../../assets/about/h3.webp"

export default function AboutHero() {
  return (
    <div className="px-5 relative w-full h-[calc(100vh-64px)] md:h-[calc(100vh-121px)]  bg-cover bg-center flex items-center justify-center text-center text-white" 
    style={{ backgroundImage: `url('${heroImg}')` }}>
      <div className="bg-black/40 bg-opacity-50 p-8 rounded-lg container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Our Store Provides You with the Best Shopping Experience</h1>
        <p className="mt-4 text-lg">We are here to offer you the best products from men's and women's clothing and jewelry at the best prices.</p>
        <button className="mt-6 px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500">
          Browse Products
        </button>
      </div>
    </div>
  )
}
