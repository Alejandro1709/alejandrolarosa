const getYear = (): number => {
  const now = new Date()
  return now.getFullYear()
}

export default getYear