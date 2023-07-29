import React, { FC } from 'react'
import Card from '@/components/Card'
import Heading from '@/components/Heading'

import styles from './CardSection.module.scss'

interface ICardSection {
  heading: string
  iconCards?: boolean
  cards: {
    id: number
    name: string
    label: string
    content?: string
    cta?: {
      href: string
      text?: string
      target?: '_blank' | '_self'
    }
  }[]
}

const CardSection: FC<ICardSection> = ({
  heading,
  iconCards,
  cards
}) => (
  <section className={styles.section}>
    <Heading className={styles.heading} level={2}>{heading}</Heading>
    {cards.length && (
      <div className={styles.cards}>
        {cards.map((card) => {
          const {
            id,
            name,
            label,
            content,
            cta
          } = card

          return (
            <Card
              key={`${name}-${id}`}
              iconCard={iconCards}
              srHeading
              name={name}
              heading={label}
              content={content}
              cta={cta}
            />
          )
        })}
      </div>
    )}
  </section>
)

export default CardSection