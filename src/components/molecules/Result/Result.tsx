import { Button } from "@/components/ui/button"
import ImageThumb from "../ImageThumb/ImageThumb"
import { Separator } from "@/components/ui/separator"

interface ResultProps {
  resultTitle: string
  resultDate: string
  sampleImageURL?: string
  resultData: Array<string>
}

export function Result1( { resultTitle, resultData, resultDate, sampleImageURL }:ResultProps ) {

  return (
    {/* <article
      className="rounded-lg border-2 border-solid border-zinc-900 grid grid-cols-2 grid-template-rows: max-content fit-content max-content; gap-6 pt-8 items-start place-items-center place-content-center justify-items-center max-w-[80dvmin] mx-auto"
    >
      <header className="col-start-1 col-end-3">
        <h2 className="text-xl font-bold leading-none tracking-tight">
          {resultTitle}
        </h2>

        <small>
          {resultDate}
        </small>
      </header>

      <section className="flex flex-col gap-4 min-w-fit max-w-[50%]">

        <h3 className="text-md font-semibold leading-none tracking-tight">
          Sample Image
        </h3>

        <ImageThumb
          altText="Sample Image"
          src="https://cafeutam.com.br/_temas/t_site/imagens/emughczt-LY_UTAM_Banner_CafeAlemBebida_26ago2021.jpg"
        />
      </section>

      <section className="flex flex-col gap-4 min-w-fit max-w-[50%] ">

        <h3 className="text-md font-semibold leading-none tracking-tight" >Result percentages</h3>

        <ol className="text-left">
          <li className="text-lg">
            <strong>
              {resultData[0]} 69%
            </strong>
          </li>
          <li className="text-sm">{resultData[1]} 22%</li>
          <li>{resultData[2]} 11%</li>
          <li>{resultData[3]} 0%</li>
        </ol>
      </section>

      <footer className="col-span-2 self-center py-4">
        <Button>
          Save
        </Button>
      </footer>
    </article> */}


  )
}

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