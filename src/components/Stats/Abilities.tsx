import Table from "./Table"

const Abilities = ({
  abilities,
}: {
  abilities: { key: string; value: string | number }[]
}) => {
  return <Table data={abilities} title="Abilities" />
}

export default Abilities
