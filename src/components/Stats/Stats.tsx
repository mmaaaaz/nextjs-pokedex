import Table from "./Table"

const Stats = ({
  stats,
}: {
  stats: { key: string; value: string | number }[]
}) => {
  return <Table data={stats} title="Stats" />
}

export default Stats
