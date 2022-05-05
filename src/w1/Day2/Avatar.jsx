import { AvatarStyled, BorderedAvatarStyled, CharAvatarStyled } from './styled'
import { colors } from '../../misc'

const Avatar = ({ img, name, size }) => {
  return (
    <AvatarStyled noImg={!img} size={size}>
      {img ? <img src={img} alt={name} /> : <p>{name[0].toUpperCase()}</p>}
    </AvatarStyled>
  )
}

export const BorderedAvatar = ({ outline = colors.primary, ...rest }) => {
  return (
    <BorderedAvatarStyled outline={outline}>
      <Avatar {...rest} />
    </BorderedAvatarStyled>
  )
}

export const ChatAvatar = ({ status, ...rest }) => {
  return (
    <CharAvatarStyled status={status}>
      <Avatar {...rest} />
    </CharAvatarStyled>
  )
}

export default Avatar
