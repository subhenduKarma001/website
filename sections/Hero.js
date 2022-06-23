import Button from "../components/Button"
import Hover from "../components/Hover"
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <section className="mt-16 md:mx-10 lg:mx-auto">
      <div className="flex">
        {/* Hero Text */}
        <div>
          <span className="font-mono text-xl md:text-2xl">
            console.
            <span className="text-light_main dark:text-dark_main">log</span>(
          </span>
          <h1 className="text-4xl md:text-4xl font-bold">
            <span className="text-light_main dark:text-dark_main">&quot;</span>
            Subhendu Karmakar.
            <span className="text-light_main dark:text-dark_main">&quot;</span>
            <span className="hidden md:inline hover:wave ">👋</span>{" "}
          </h1>
          <span className="font-mono text-3xl">
            )<span className="text-light_main dark:text-dark_main">;</span>
          </span>
          <h3 className="text-xl md:text-2xl my-3">
            <Typewriter
              options={{
                strings: [
                  "i'm a web developer.",
                  "i love solving problems.",
                  "i'm a competitive programmer.",
                  "i love javascript, python and c++.",
                  "i am learning typescript rn.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className="md:text-lg text-light_text dark:text-dark_text mb-8">
            <p>
              Hello world! I'm Maggie, a high school junior. I enjoy coding
              competitively, building useless but fun things and making
              (generative) art!
            </p>
            <p>
              I'm an executive at the Competitive Programming Initiative,
              helping promote competitive programming through resources such as
              the USACO Guide.
            </p>
            <p>
              Check out ~/projects or my GitHub (@maggie-j-liu) to see more cool
              projects!
            </p>
          </div>
        </div>
        {/* Hero Image */}
        <div className="hidden lg:inline-block">
          <div className="w-72 h-96 mx-5 bg-light_main dark:bg-dark_main rounded-lg shadow-2xl rotate-1 hover:animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col md:inline-block space-y-4 md:space-x-4">
        <Button className="hover:animate-pulse transition-all bg-light_main text-white dark:bg-dark_main rounded-md">
          Email
        </Button>
        <Button className="hover:animate-pulse transition-all bg-light_main text-white dark:bg-dark_main rounded-md">
          Github
        </Button>
        <Button className="hover:animate-pulse transition-all bg-light_main text-white dark:bg-dark_main rounded-md">
          Linkedin
        </Button>
        <Button className="hover:animate-pulse transition-all bg-light_main text-white dark:bg-dark_main rounded-md">
          Twitter
        </Button>
      </div>
    </section>
  )
}

export default Hero
