type PageParams = {
  params: {
    params: string[]
  }
}

export default function page({params}: PageParams) {
  console.log({params})
  return (
    <div>{params.params}</div>
  )
}
