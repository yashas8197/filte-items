const listItem = document.querySelector('#item-list');

const items = [
  { id: 1, item: 'Item 1', status: 'In Sale' },
  { id: 2, item: 'Item 2', status: 'New Release' },
  { id: 3, item: 'Item 3', status: 'New Release' },
  { id: 4, item: 'Item 4', status: 'In Sale' },
  { id: 5, item: 'Item 5', status: 'In Sale' },
]

const statusRadioBtn = document.getElementsByName('status')

function renderList(selectedStatus) {

  const filterStatus = selectedStatus === 'all' ? items : items.filter(item => item.status === selectedStatus)


  const listContainer = filterStatus.map(item => `
    <li>
      <strong>ID: </strong>${item.id}<br>
      <strong>Item: </strong>${item.item}<br>
      <strong>Status: </strong>${item.status}<br>
      <hr>
    </li>
  `)

  listItem.innerHTML = listContainer.join('')
}

renderList('all')


statusRadioBtn.forEach(radioBtn => {
  radioBtn.addEventListener('change', function() {
    renderList(this.value)
  })
})



