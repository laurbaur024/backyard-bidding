import { Button, Container } from "react-bootstrap"
import '../index.css'



const Dashboard = () => {


  return (
    <Container>
      <div className="dashBtn">
        <Button>message.center</Button>
      </div>
      <div className="dashBtn">
        <Button>friend.zone</Button>
      </div>
    </Container>
  )
}

export default Dashboard