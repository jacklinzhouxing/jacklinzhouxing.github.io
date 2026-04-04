import { motion } from "framer-motion";
import headshot from "@/assets/headshot.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const HomeSection = () => (
  <section id="home" className="py-20 md:py-28">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div {...fadeUp} className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
        <div className="shrink-0">
          <img
            src={headshot}
            alt="Professional headshot"
            className="w-40 h-48 md:w-48 md:h-56 object-cover rounded-sm shadow-md"
          />
        </div>
        <div className="space-y-5">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif-display font-semibold text-foreground leading-tight">
              About Me
            </h1>
            <p className="text-primary font-medium mt-1.5 text-sm tracking-wide">
              An Wang Postdoctoral Fellow
            </p>
            <p className="text-muted-foreground text-sm mt-0.5">
              Fairbank Center for Chinese Studies · Harvard University
            </p>
          </div>
          <div className="w-12 h-px bg-primary/40" />
          <p className="text-foreground/80 leading-relaxed text-[15px]">
            I am an An Wang Postdoctoral Fellow at the <strong className="font-semibold text-foreground">Fairbank Center for Chinese Studies, Harvard University</strong>, and an incoming assistant professor at the <strong className="font-semibold text-foreground">Division of Public Policy, Hong Kong University of Science and Technology</strong>. I hold a Ph.D. in History and Sociology of Technology and Science and a graduate certificate in public policy from Georgia Institute of Technology.
          </p>
          <p className="text-foreground/80 leading-relaxed text-[15px]">
            My research spans sociology of technology and work, science and technology studies (STS), and technology and innovation policy in China, focusing on the social implications and governance of the platform economy, digital infrastructure, and digital labor.
          </p>
          <p className="text-foreground/80 leading-relaxed text-[15px]">
            Based on longitudinal ethnographic research, my dissertation traces and analyzes how digital platforms, gig workers, and tech workers interact with each other and navigate the contingent regulatory environment amid the compressed socioeconomic transition, geopolitical tension, and pervasive techno-nationalism and techno-developmentalism in China.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeSection;
