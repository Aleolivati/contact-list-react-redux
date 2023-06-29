import { AvatarContainer, MainContainer } from './styles'

import {
  AvatarsItems,
  isClicked,
  selectedAvatar
} from '../../store/reducers/avatar'
import { useDispatch } from 'react-redux'

const AvatarDropdown = () => {
  const dispatch = useDispatch()

  const { avatars } = AvatarsItems

  return (
    <MainContainer>
      <AvatarContainer>
        {avatars.map((a) => (
          <li key={a.id}>
            <img
              src={a.icon}
              alt={a.label}
              onClick={() => {
                dispatch(isClicked(false))
                dispatch(selectedAvatar(a))
              }}
            />
          </li>
        ))}
      </AvatarContainer>
    </MainContainer>
  )
}

export default AvatarDropdown
