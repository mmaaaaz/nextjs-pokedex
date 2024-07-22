import Balancer from "react-wrap-balancer"

const TextBalance = ({ title }: { title: string }) => {
  return (
    <>
      <Balancer>{title}</Balancer>
    </>
  )
}

export default TextBalance
