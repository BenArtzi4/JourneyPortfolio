import { GithubIcon, Linkedin, MailIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white py-8 shadow-md">
      <div className="container mx-auto px-4 text-left">
        <h1 className="text-6xl md:text-5xl sm:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Gal Ben Artzi
        </h1>
        <h2 className="text-2xl md:text-xl sm:text-lg text-gray-600 mb-6">
          Software Engineer | DevOps
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:Benartzi4@gmail.com"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <MailIcon size={20} className="pb-[2px]" />
            <span>Benartzi4@gmail.com</span>
          </a>
          <a
            href="https://github.com/BenArtzi4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <GithubIcon size={20} className="pb-[2px]" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gal-ben-artzi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <Linkedin size={20} className="pb-[2px]" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}
