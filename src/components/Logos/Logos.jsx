import styles from './Logos.module.css'
const logos = [
  {
    id: 1,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/221.svg',
  },
  {
    id: 2,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/220.svg',
  },
  {
    id: 3,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/219.svg',
  },
  {
    id: 4,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/218.svg',
  },
  {
    id: 5,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/217.svg',
  },
  {
    id: 6,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/216.svg',
  },
  {
    id: 7,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/215.svg',
  },
  {
    id: 8,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/214.svg',
  },
  {
    id: 9,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/213.svg',
  },
  {
    id: 10,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/212.svg',
  },
  {
    id: 11,
    name: 'Logo Name',
    height: 35,
    width: 130,
    src: 'https://img.logoipsum.com/211.svg',
  },
];

const Logos = () => {
    // Duplicate the logos to create a seamless loop
    const duplicatedLogos = [...logos, ...logos];
  
    return (
      <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-36 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-tight tracking-wide text-neutral-900 dark:text-neutral-50">
            Trusted by the world’s most unknown companies
          </h2>
  
          <div className={`mx-auto mt-10 overflow-hidden ${styles['animated-scroll']}`}>
            <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 logos-container">
              {duplicatedLogos.map((logo) => (
                <img
                  key={logo.id}
                  className="max-h-10 w-auto object-contain"
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Logos