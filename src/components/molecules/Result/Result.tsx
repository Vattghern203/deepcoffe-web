/**
 * v0 by Vercel.
 * @see https://v0.dev/t/q2dzJ5cHjo7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Progress } from "@/components/ui/progress"

export default function Result() {
  return (
    <article className="max-w-4xl mx-auto p-8 bg-card border border-border rounded-lg">
      <div className="flex justify-between items-start">
        <section className="w-1/3">
          <img
            alt="Sample Image"
            className="rounded-lg"
            height="300"
            src="https://cafeutam.com.br/_temas/t_site/imagens/emughczt-LY_UTAM_Banner_CafeAlemBebida_26ago2021.jpg"
            style={{
              aspectRatio: "250/300",
              objectFit: "cover",
              objectPosition: "center"
            }}
            width="250"
          />
          {/* <Button className="mt-4" variant="default">
            Save
          </Button> */}
        </section>

        <section className="w-2/3 pl-8">
          <h2 className="text-2xl font-bold mb-2 text-start">These are the results</h2>
          <p className="text-sm mb-4 text-start">01/04/2024</p>
          <h3 className="self-start font-semibold mb-2 text-start">Result percentages</h3>
          <ol className="space-y-2 text-start">
            <li className="flex items-center">
              <span className="w-24 capitalize">peste</span>
              <Progress className="w-[60%]" value={69} />
              <span className="ml-2 font-medium">69%</span>
            </li>
            <li className="flex items-center">
              <span className="w-24">peste2</span>
              <Progress className="w-[60%]" value={22} />
              <span className="ml-2">22%</span>
            </li>
            <li className="flex items-center">
              <span className="w-24">peste3</span>
              <Progress className="w-[60%]" value={11} />
              <span className="ml-2">11%</span>
            </li>
            <li className="flex items-center">
              <span className="w-24">peste bubonic</span>
              <Progress className="w-[60%]" value={0} />
              <span className="ml-2">0%</span>
            </li>
          </ol>
        </section>
      </div>
    </article>
  )
}