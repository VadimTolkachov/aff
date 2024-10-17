function addOffer() {
  
  const url = 'http://api-leadsdivision.affise.com/3.0/admin/offer'; // URL вашего API

  // Данные для отправки
  const data = {
    
    title: "test",
    advertiser: "635bac9d8c862dc50f7d75e7", // ID рекламодателя
    url: "http://pr.com", // URL оффера
    payments: [ // Данные о платеже в строковом формате
      {
        countries: ["US", "CA", "AU", "NZ"],
        cities: [],
        devices: [],
        os: [],
        goal: "1",
        total: 70,
        revenue: 49,
        currency: "usd",
        title: "Default",
        type: "percent",
        url: null,
        country_exclude: false,
        with_regions: false,
        goal_id: 1,
        sub1: null,
        sub2: null,
        sub3: null,
        sub4: null,
        sub5: null,
        sub6: null,
        sub7: null,
        sub8: null,
        id: null
      }
    ]
  };

  
  Logger.log(JSON.stringify(data))


  
  const options = {
    method: 'post',
    headers: {
      'API-Key': '53ae26f474c1c50f5b5dc4425148d1c5'
    },
    contentType: 'application/x-www-form-urlencoded', // Указываем тип контента
    payload: data, // Данные для отправки
    muteHttpExceptions: true
    
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    Logger.log('Response Code: ' + response.getResponseCode()); // Логируем код ответа
    Logger.log('Response Body: ' + response.getContentText()); // Логируем тело ответа
  } catch (error) {
    Logger.log('Error: ' + error);
  }
}

// Функция для запуска добавления оффера
function run() {
  addOffer(); // Запуск функции добавления оффера
}
