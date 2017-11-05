var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;
  var days = 31;

  if( choice === 'February' ) {
    days = 28;
  } else if( choice ==='April' || choice ==='June' || choice ==='September' || choice ==="November") {
    days = 30;
  }
  creatCalendar(days, choice);
}


creatCalendar = function(days, choice){
  h1.textContent = choice;
  list.textContent = '';
  for(var i=1 ; i<=days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}