"use client"
import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { hyphenateAndLowercase } from '../../utils/index'
import styles from './cards.module.scss'
import { Imag, Title, Button, Para } from './styles'
import { websiteStore } from '@/app/store/websites.store'
import { IRecords } from '@/app'


interface ICard {
  cardObject: IRecords
  ind: number
  url: string
}

export const Card: React.FC<ICard> = ({ cardObject, url }) => {
  const router = useRouter()

  const { setActiveWebsite } = websiteStore((state) => ({
    setActiveWebsite: state.setActiveWebsite
  }))
  // const [allActiveCards, setAllActiveCards] = useState<boolean[]>([])
  // const hoverCard = (e: any, ind: any) => {
  //   console.log(e)
  //   setAllActiveCards({
  //     ...allActiveCards,
  //     [ind]: !allActiveCards[ind],
  //   })
  //   //setActiveCard(!activeCard);
  // }
  const goToPage = useCallback((urlString: string): void => {
    const newUrl = url + '/' + hyphenateAndLowercase({
      text: urlString,
      hyphenate: true,
      lowercase: true,
      punctuation: true
    })
    console.log('newUrl', newUrl)
    debugger
    router.push(newUrl, undefined)

  }, [router, url])

  const handlerOnChange = useCallback(
    (changedState: IRecords) => {
      debugger
      setActiveWebsite(changedState)
      changedState.name && goToPage(changedState.name)
    },
    [setActiveWebsite, goToPage]
  )

  const image = (cardObject: IRecords) => {
    //${cardObject.image}
    //'food/image1.jpg'
    return cardObject.image
  }

  const description = (str = '') => {
    if (str.length > 10) {
      return str = str.substring(0, 100) + "...";
    }


    return str
  }

  return (
    <>
      <div className={styles.flipCard} onClick={() => handlerOnChange(cardObject)}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <Imag src={`images/${image(cardObject)}`} alt={'Picture of the  ' + cardObject?.name} />{' '}
          </div>
          <div className={`${styles.flipCardBack} `} style={{ backgroundColor: cardObject.colour ?? '' }}>
            <Title className='text-2xl'>{cardObject?.name}</Title>
            {cardObject?.description && <Para>{description(cardObject?.description)}</Para>}
            <Button className="btn btn-neutral text-left">Learn More</Button>
          </div>
        </div>
      </div>
    </>
  )
}
