import { GetStaticPaths, GetStaticProps } from 'next'
import { BannerProjeto } from '../../../components/BannerProjeto'
import Header from '../../../components/Header'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../../services/prismicio'
import { ProjetoContainer } from '../../../styles/ProjetoStyles'
import { IProjeto } from '../../../types/Projetos'
import { useRouter } from 'next/router'
import { LoadingScreen } from '../../../components/LoadingScreen'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Head from 'next/head'

interface ProjetoProps {
    projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
    useEffect(() => {
        Aos.init({
          duration: 1500
        })
    }, [])

    const router = useRouter()

    if(router.isFallback) {
        return <LoadingScreen />
    }

    return (
        <ProjetoContainer>
            <Head>
              <title>{ projeto.title } | Meu portfólio</title>
              <meta
                name="description"
                content={ projeto.description }
              />
              <meta property="og:image" content={ projeto.thumbnail } />
              <meta property="og:image:secure_url" content={ projeto.thumbnail } />
              <meta name="twitter:image" content={ projeto.thumbnail } />
              <meta name="twitter:image:src" content={ projeto.thumbnail } />
              <meta
                property="og:description"
                content={ projeto.description }
              />
            </Head>

            <Header />

            <BannerProjeto 
                title={ projeto.title }
                type={ projeto.type }
                imgUrl={ projeto.thumbnail } />

            <main data-aos='fade-up'>
                <p>{ projeto.description } </p>
                <button type="button">
                    <a target='_blank' href={ projeto.link }>Ver projeto online</a>
                </button>
            </main>
        </ProjetoContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient()
    const projetos = await prismic.query([
        Prismic.predicates.at('document.type', 'portfolio')
    ])

    const paths = projetos.results.map(projeto => ({
        params: {
            slug: projeto.uid
        }
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async context => {
    const prismic = getPrismicClient()
    const { slug } = context.params
  
    const response = await prismic.getByUID('portfolio', String(slug), {})
  
    const projeto = {
        slug: response.uid,
        title: response.data.title,
        type: response.data.type,
        description: response.data.description,
        thumbnail: response.data.thumbnail.url,
        link: response.data.link.url
    }
  
    return {
      props: {
        projeto
      },
      revalidate: 86400 // deixar um dia (86400)
    }
}