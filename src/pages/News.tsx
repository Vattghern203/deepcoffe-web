import Article from '@/components/organisms/Article'
import NewsContainer from '@/components/templates/News/News'

export default function News() {

    return (
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

          </Article.Root>
        </NewsContainer>
    )
}
