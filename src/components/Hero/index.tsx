import React, { FC } from 'react'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import Link from '@/components/Link'

import styles from './Hero.module.scss'

interface IHero {
  heading: string
  url?: string
  intro?: string
  image?: string
  simple?: boolean
}

const Hero: FC<IHero> = ({
  heading,
  url,
  intro,
  image,
  simple,
}) => (
  <section className={`${styles.section} ${simple ? styles.simple : ''}`}>
    <div className={styles.copy}>
      <Heading level={1}>{heading}</Heading>
      {url ? (
        <Link className={styles.link} href={url}>View site</Link>
      ) : ''}
      {image ? (
        <div className={styles.image}>
          <Image className='img-responsive' src={image} alt='' width={1920} height={1080} />
        </div>
      ) : ''}
      {intro && <p className={styles.intro}>{intro}</p>}
    </div>
  </section>
)

export default Hero