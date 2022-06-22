import Button from "../components/Button"
import Hover from "../components/Hover"
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <section className="mt-16 ">
      <span className="font-mono text-2xl md:text-3xl">
        console.
        <span className="text-light_main dark:text-dark_main">log</span>(
      </span>
      <h1 className="text-4xl md:text-6xl font-bold">
        <span className="text-light_main dark:text-dark_main">&quot;</span>
        Subhendu Karma.
        <span className="text-light_main dark:text-dark_main">&quot;</span>
        <span className="hidden md:inline hover:wave ">👋</span>{" "}
      </h1>
      <span className="font-mono text-3xl">
        )<span className="text-light_main dark:text-dark_main">;</span>
      </span>
      <h3 className="text-xl md:text-4xl my-3">
        <Typewriter
          options={{
            strings: [
              "i'm a web developer.",
              "i love solving problems.",
              "i'm a competitive programmer",
              "i love javascript and C++",
              "i am learning typescript rn.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
      <p className="md:text-xl text-light_text dark:text-dark_text mb-8">
        Lorem ipsum <Hover href="#">dolor</Hover> sit amet consectetur
        adipisicing elit. Nostrum saepe cumque debitis placeat consequuntur
        praesentium error, nihil, eligendi modi esse necessitatibus, quae quidem
        molestias maxime facilis fugiat blanditiis natus harum.
      </p>
      <Button className="hover:animate-pulse transition-all bg-light_main dark:bg-dark_main rounded-md">
        Hire me!
      </Button>
    </section>
  )
}

export default Hero
