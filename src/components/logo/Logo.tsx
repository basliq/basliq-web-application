import s from './logo.module.css'
import logoSVG from '../../../public/vite.svg'

type LogoProps = {
  withText?: boolean
  animated?: boolean
}

export const Logo = ({withText = true, animated = false}: LogoProps) => {
  // TODO - how to not type an svg import?

  return (
    <figure className={`${s.container} ${animated ? s.animated : undefined}`}>
      <img src={logoSVG as string} alt='Basliq Logo' />
      {withText && <p>Luna</p>}
    </figure>
  )
}
