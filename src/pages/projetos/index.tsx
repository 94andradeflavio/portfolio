import { GetStaticProps } from 'next'
import { Footer } from '../../components/Footer'
import Header from '../../components/Header'
import { ProjetoItem } from '../../components/ProjetoItem'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismicio'
import { ProjetosContainer } from '../../styles/ProjetosStyles'
import { ProjetosProps } from '../../types/Projetos'
import { useEffect } from 'react'
import Head from 'next/head'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Projetos({ projetos }: ProjetosProps) {
  useEffect(() => {
    Aos.init({
      duration: 1500
    })
  }, [])

    return (
        <ProjetosContainer>
            <Head>
              <title>Projetos | Meu portfólio</title>
              <meta
                name="description"
                content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
              />
              <meta property="og:image" content="/ogimage.png" />
              <meta property="og:image:secure_url" content="/ogimage.png" />
              <meta name="twitter:image" content="/ogimage.png" />
              <meta name="twitter:image:src" content="/ogimage.png" />
              <meta
                property="og:description"
                content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
              />
            </Head>

            <Header />

            <main className="container">
                { projetos.map((projeto, index) => (
                    <div 
                      key={ projeto.slug } 
                      data-aos='flip-up'
                      data-aos-delay={ index * 150 }>
                      <ProjetoItem 
                          title={ projeto.title }
                          type={ projeto.type }
                          slug={ projeto.slug }
                          imgUrl={ projeto.thumbnail } />
                    </div>
                )) }
            </main>

        </ProjetosContainer>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
  
    const projectResponse = await prismic.query(
      [Prismic.Predicates.at('document.type', 'portfolio')],
      { orderings: '[document.first_publication_date desc]' }
    )
  
    const projetos = projectResponse.results.map(projeto => ({
      slug: projeto.uid,
      title: projeto.data.title,
      type: projeto.data.type,
      description: projeto.data.description,
      link: projeto.data.link.url,
      thumbnail: projeto.data.thumbnail.url
    }))
  
    return {
      props: {
        projetos
      },
      revalidate: 86400 // deixar um dia (86400)
    }
}