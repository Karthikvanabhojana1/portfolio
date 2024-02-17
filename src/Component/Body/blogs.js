
const callouts = [
  {
    name: 'JWT Authentication in Spring Boot',
    description: 'Mastering JWT Authentication in Spring Boot: A Step-by-Step Guide',
    imageSrc:'https://res.cloudinary.com/djpqqdkqg/image/upload/v1708110577/Welcome_to_FigJam_rula1d.jpg',
    imageAlt: 'Image of the website which was designed for this project ',
    href: 'https://medium.com/@karthikvanabhojana/mastering-jwt-authentication-in-spring-boot-a-step-by-step-guide-9082322f473c',
  }

]

export default function Blogs() {
  return (
    <div >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl pb-10 lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 text-white font-protest-strike text-3xl text-bold">Blogs</h2>

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
                <h3 className="mt-6 text-sm text-gray-500 text-white ">
                  <a href={callout.href}>
                    <span className="absolute inset-0 protest-strike" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 text-white protest-strike">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
