/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ckR9peimHcc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Company</h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We are a team of passionate designers and developers who are dedicated to creating beautiful and
            functional digital experiences. Our mission is to help businesses and individuals achieve their goals
            through innovative technology solutions.
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Cutting-Edge Technology</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We use the latest tools and frameworks to build high-performance, scalable applications.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">User-Centric Design</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our design process is focused on creating intuitive and engaging user experiences.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Collaborative Approach</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We work closely with our clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}