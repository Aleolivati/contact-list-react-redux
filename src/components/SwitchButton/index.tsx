import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { MaterialUISwitch } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { themeChange } from '../../store/reducers/theme'

const CustomizedSwitches = () => {
  const themeState = useSelector(
    (state: RootReducer) => state.theme.usingDarkTheme
  )
  const dispatch = useDispatch()
  function changeTheTheme() {
    if (themeState) {
      dispatch(themeChange(false))
    } else {
      dispatch(themeChange(true))
    }
  }
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked={false} />}
        label=""
        onClick={() => changeTheTheme()}
      />
    </FormGroup>
  )
}

export default CustomizedSwitches
