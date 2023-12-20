const About = () => {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8">
      <div className="flex max-w-4xl flex-col space-y-7">
        <h3 className="text-lg font-medium uppercase tracking-wide text-neutral-800 dark:text-neutral-200">
          Tagline
        </h3>

        <h2 className="text-4xl font-bold leading-tight tracking-wide text-neutral-900 dark:text-neutral-50 xl:text-5xl">
          Short heading goes in here
        </h2>

        <p className="text-lg text-neutral-600 dark:text-neutral-400">
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
          nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
          Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
          nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
          Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
          nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
          Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
        </p>

        <div className="flex space-x-8">
          <a
            href="#"
            className="rounded-md bg-neutral-900 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-300 dark:focus-visible:outline-neutral-400"
          >
            Button
          </a>

          <a
            href="#"
            className="rounded-md bg-transparent px-10 py-3 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-500 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:text-neutral-100 dark:ring-neutral-600 dark:hover:bg-neutral-800 dark:focus-visible:outline-neutral-400"
          >
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default About