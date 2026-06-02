import HeroIcon from "../assets/hero.png"
import LinkButton from "../props/linkbutton"

export default function Projects(){

  return(
    <main>
      <article className = "flex flex-col border border-red 100 p-8 w-50 h-50">
        <h1 className = "text-lg">Mortgage-Lending-Model-with-FairNNV</h1>
        <img
          src = {HeroIcon}
          alt = "Image not Avalable"
        />
        <p className = "text-sm">
          Applying FairNNV to formally verify racial fairness in U.S. mortgage lending. 
          Neural network classifiers trained on 2024 HMDA Tennessee data are verified 
          for counterfactual and individual fairness with respect to race 
          (White vs. Black applicants) using NNV star-set reachability analysis. 
          Includes original and adversarial debiased models exported.
        </p>
        <LinkButton></LinkButton>
      </article>
    </main>
  )
}