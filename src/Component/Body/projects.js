
const callouts = [
  {
    name: 'Nearly',
    description: 'Website for College Students to Find Apartments',
    imageSrc:'https://res.cloudinary.com/djpqqdkqg/image/upload/v1706904233/NearlyWebsite_o5075s.png',
    imageAlt: 'Image of the website which was designed for this project',
    href: 'https://github.com/sreedhar-shreyas/INFO6150_NEARLY.git',
  },
  {
    name: 'MHelp',
    description: 'Oneline Platform for Booking Medical Appointments',
    imageSrc: 'https://res.cloudinary.com/djpqqdkqg/image/upload/v1706912912/hospital_l7juyg.jpg',
    imageAlt: 'Image of the some Background of the project MHelp',
    href: 'https://github.com/Karthikvanabhojana1/MHELP.git',
  },

]

export default function Projects() {
  return (
    <div >
      <div className="mx-auto max-w-7xl pt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl pb-10 lg:max-w-none">
          <h2 className="font-bold text-gray-900 text-white  text-3xl text-bold">Projects</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500 text-white">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 text-white">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
