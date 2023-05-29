function checkAge(age) {
    return (age >=git 18) ? true : confirm('Родители разрешили?');
  }
  
  let age = prompt('Сколько вам лет?', '');
  
  if ( checkAge(age) ) {
    alert( 'Доступ получен' );
  } else {
    alert( 'Доступ закрыт' );
  }












