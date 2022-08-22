export default function Contact() {
  return (
    <section id="contato" className="w-full h-[50vh] bg-black p-2">
      <div className="container mx-auto pt-24">
        <h1 className="text-5xl text-gray-500 font-bold">Contato</h1>
        <hr className="border-gray-500" />
        <br />
        <ul className="w-full flex flex-wrap items-center gap-8 justify-center">
          <li>
            <a
              className="text-gray-400 text-lg"
              href="http://github.com/darkisda"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 text-lg"
              href="https://www.instagram.com/luansouza_n/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 text-lg"
              href="https://www.linkedin.com/in/luan-de-souza-5088641ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 text-lg"
              href="mailto:luandesouzanascimento2011@gmail.com"
            >
              Email
            </a>
          </li>
          <li>
            <a className="text-gray-400 text-lg" href="tel:+558499805-9100">
              Telefone para contato
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
