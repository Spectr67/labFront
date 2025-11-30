function setAccounts(accounts) {
  localStorage.setItem('accounts', JSON.stringify(accounts))
}
function getAccounts() {
  const data = localStorage.getItem('accounts')
  return data ? JSON.parse(data) : []
}

export { getAccounts, setAccounts }
