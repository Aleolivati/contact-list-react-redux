import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Avatars from '../../models/avatar'

type AvatarState = {
  avatars: Avatars[]
}

export const AvatarsItems: AvatarState = {
  avatars: [
    {
      id: 0,
      label: 'Avatar 1',
      icon: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Bear'
    },
    {
      id: 1,
      label: 'Avatar 2',
      icon: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Bandit'
    },
    {
      id: 2,
      label: 'Avatar 3',
      icon: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Tigger'
    },
    {
      id: 3,
      label: 'Avatar 4',
      icon: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Baby'
    },
    {
      id: 4,
      label: 'Avatar 5',
      icon: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Cleo'
    },
    {
      id: 5,
      label: 'Avatar 6',
      icon: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Bailey'
    },
    {
      id: 6,
      label: 'Avatar 7',
      icon: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Coco'
    },
    {
      id: 7,
      label: 'Avatar 8',
      icon: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Sasha'
    }
  ]
}

type Props = {
  avatar: Avatars
  isClicked: boolean
}

const initialState: Props = {
  avatar: AvatarsItems.avatars[0],
  isClicked: false
}

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    selectedAvatar: (state, action: PayloadAction<Avatars>) => {
      state.avatar = action.payload
    },
    isClicked: (state, action: PayloadAction<boolean>) => {
      state.isClicked = action.payload
    }
  }
})

export const { selectedAvatar, isClicked } = avatarSlice.actions
export default avatarSlice.reducer
