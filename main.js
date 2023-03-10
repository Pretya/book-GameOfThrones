
function book (houses, symbolOfPower, families) {
  const countSymbol = houses.length - 1;
  return `<p>"${houses[0]} всегда платят свои долги", - произнес он. - "Мы также являемся самой богатой семьей в Вестеросе. Мы не нуждаемся в помощи других, чтобы преуспеть. Мы - ${houses[0]}".
  ${families.northHouseMainCharecter} посмотрел на него презрительно. "Вы можете иметь золото и власть, Ланнистер, но мы ${houses[1]} имеем силу и честь. Это гораздо более ценно".
  Они стояли напротив друг друга, словно ${countSymbol} символа разных миров: Ланнистер - в богатой красной одежде, а Старк - в грубой серой шерсти. Но в этот момент ${families.northHouseMainCharecter} был сильнее, потому что он был защитником Севера и его народа.</p>
  
  
  <p>"Мы - ${houses[2]}", - сказала ${families.onMountainsHouseMainCharecter}. - "Мы одни из богатейших и могущественных родов в долине, и мы не собираемся позволять никому угрожать нашему дому".
  ${families.richHouseMainCharecter} улыбнулся. "Никто не угрожает вашему дому, моя леди", - произнес он. - "Я просто пришел посетить вас и насладиться красотой этой прекрасной долины. Кроме того, я пришел с важным делом. Я ищу помощи в борьбе за ${symbolOfPower}, и я знаю, что ваш дом может быть полезен мне в этом".</p>`
}

 document.getElementById('book1').innerHTML = book(['Ланнистеры','Старки', 'Талли'], 'Железный трон', {northHouseMainCharecter: 'Нед Старк', richHouseMainCharecter: 'Тирион Ланнистер', onMountainsHouseMainCharecter: 'Лиза'});
 document.getElementById('book2').innerHTML = book(['Ланнистеры','Старки', 'Талли'], 'Железный трон', {});
 document.getElementById('book3').innerHTML = book(['Ланнистеры','Старки', 'Талли'], 'Железный трон', {});
 
 
