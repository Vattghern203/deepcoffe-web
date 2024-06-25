function Footer() {
  return (
    <footer className="w-full mt-[25%] h-fit py-32 px-6 grid grid-cols-3 grid-rows-3 place-content-center self-end text-center gap-4 border-t-2 border-t-border">

      <section className="col-span-3">
        <ul className="flex flex-col flex-wrap max-h-24">
          <li>
            <a href="#">
              link
            </a>
          </li>
          <li>
            <a href="#">
              link
            </a>
          </li>
          <li>
            <a href="#">
              link
            </a>
          </li>
          <li>
            <a href="#">
              link
            </a>
          </li>
          <li>
            <a href="#">
              link
            </a>
          </li>

        </ul>
      </section>

      <section className="row-start-2 col-span-3">
        <p className="text-sm">
          Made with 🖤 by
          <strong className="ml-[.5ch]">
            <a
              className="hover:underline"
              href="https://github.com/Vattghern203"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Otávio Augusto's GitHub profile"
            >
              @Otávio Augusto
            </a>
          </strong>
        </p>
      </section>

    </footer>
  );
}

export default Footer;
