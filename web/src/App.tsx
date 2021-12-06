import useSocket from './socket/socket';

import { address } from '../config/ip'
import VMCenteredTabs from './tab/tab'
import styled from 'styled-components'

const VMLayout = styled.div`
  min-height: 100vh;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`

const VMFoot = styled.div`
  background: #ccc;
`

const VMHead = styled.div`
  background: #eee;
`

function App() {
  const [socket, status] = useSocket(address)
  return (
    <VMLayout>
      <VMHead>Head</VMHead>
      <VMCenteredTabs />
      <VMFoot>Foot</VMFoot>
    </VMLayout>
  )
}

export default App
