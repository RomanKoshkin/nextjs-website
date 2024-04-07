import { ProjectWithBadges } from 'components/ProjectWithBadges'


export default function FirstPost() {
    return (
      <div>
        <h4>Projects</h4>
    <div className="flex flex-row items-center justify-center mb-10 w-full gap-4">
      <ProjectWithBadges url="https://github.com/RomanKoshkin/Alienify" title="Alienify" badges={["asdf"]}>
		Image style and content transformation using a GAN. The model blends the orininal StyleGAN2 and
		the same network but fine-tuned on another dataset (e.g. aliens and zombies). You can train the
		network on your own dataset.
	</ProjectWithBadges>
  <ProjectWithBadges url="https://github.com/RomanKoshkin/S2ST" title="TransLLaMa" badges={["NLP", "LLMOps", "NMT"]}>
  LLM-based simultaneous machine translation. As part of my research internship at the NLP Group of AHCL (NAIST), I built and trained an LLM-based model for simultaneous speech-to-text machine translation. Check out the paper and code.
	</ProjectWithBadges>
  </div>

  <div className="flex flex-row items-center justify-center mb-10 w-full gap-4">
      <ProjectWithBadges url="https://github.com/RomanKoshkin/Alienify" title="Alienify" badges={["asdf"]}>
		Image style and content transformation using a GAN. The model blends the orininal StyleGAN2 and
		the same network but fine-tuned on another dataset (e.g. aliens and zombies). You can train the
		network on your own dataset.
	</ProjectWithBadges>
  <ProjectWithBadges url="https://github.com/RomanKoshkin/Alienify" title="Alienify" badges={["asdf"]}>
		Image style and content transformation using a GAN. The model blends the orininal StyleGAN2 and
		the same network but fine-tuned on another dataset (e.g. aliens and zombies). You can train the
		network on your own dataset.
	</ProjectWithBadges>
  </div>
  </div>
    )
    // <h1>First Post</h1>;
  }