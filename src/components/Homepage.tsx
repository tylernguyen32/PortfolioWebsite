import HeroImage from '../assets/hero.png'

export default function Homepage(){

  return(
    <main className="flex flex-row gap-60">

      <section className ="flex flex-col py-10 text-2xl border-4 border-red-500">

        <h1 className = "self-center font-sans font-bold text-grey-100 text-4xl">Hi</h1>
        <h2 className = "self-center font-sans font-bold text-black text-5xl">I am Tyler Nguyen</h2>
        
        <p className = "p-10 w-200 text-grey-50">
          I am currently a Master's student at Vanderbilt University studying computer science.
          I have experience with website developement and implementing machine learning models. 
          I also have a strong background in pharmacy and biochemistry. My current 
          interest is expanding my knowledge on deep learning models. 
        </p>
      </section>

      <img
        src = {HeroImage}
        alt = "Image not availabe"
        className = "flex"
      />

      
    </main>
  )
}

