import { lazy, Suspense } from 'react'
import { XIcon } from 'lucide-react'

import { AlertDescription, AlertTitle } from '@/components/ui/alert'

import { IconButton, MyAnalises } from '@/components/molecules/'
import { Article } from '@/components/organisms/'
import { NewsContainer } from '@/components/templates/'

const TemporaryPopup = lazy(() => import("@/components/atoms/TemporaryPopUp/TemporaryPopUp"))

export default function News() {

    return (
      <Suspense fallback={<div>Loading...</div>}>

        <MyAnalises />

        <NewsContainer heading='Lorem Ipsum'>
          <Article.Root>

            <Article.Header

              headingText='HONORATO'
              author='Daniel Craig'
              postDate='August 24, 2024'
            />

            <Article.Body
              articleText='Eu nunca vi um time com MAURICIO HONORATO perder um jogo... quer dizer, ele é perfeito, incrível, mira boa, inteligente, lindo... eu honestamente não vejo MAURICIO HONORATO perdendo esse jogo. lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll'

            />

          <IconButton
            icon={XIcon}
            iconLabel='close'
            onClickAction={() => console.log('Cliquei')}
          />
          </Article.Root>

          <TemporaryPopup variant='destructive'>
            <AlertTitle>
              lorem
            </AlertTitle>
            <AlertDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore cumque dolore cupiditate aliquid doloremque possimus animi enim facere hic autem, id ab eligendi natus dignissimos, voluptatem libero voluptatum non.
            </AlertDescription>
          </TemporaryPopup>

        </NewsContainer>
      </Suspense>
    )
}
