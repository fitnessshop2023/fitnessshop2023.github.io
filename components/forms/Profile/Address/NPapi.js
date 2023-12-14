export const fetchRgion = async (region) => {
    try {
      const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST', // Важливо вказати метод POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: '84fed10c9c1ce634e13f6136681b369a',
          modelName: 'Address',
          calledMethod: 'getAreas',
          methodProperties: {
            FindByString : region,
          },
        }),
      });
  
      const data = await res.json();
      const regionData = data.data.map((item) => ({
        itemUA: item.Description,
        itemEN: item.Description,
        Ref: item.Ref
      }));
      // console.log(regionData)
      return regionData;
    } catch (error) {
      console.log(error);
      throw error; // Обробляйте помилки або прокидайте їх далі для обробки на рівні вище
    }
};

export const fetchCity = async (city, ref) => {
    try {
      const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST', // Важливо вказати метод POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: '84fed10c9c1ce634e13f6136681b369a',
          modelName: 'Address',
          calledMethod: 'getCities',
          methodProperties: {
            AreaRef: localStorage.getItem('ref'),
            FindByString : city,
          },
        }),
      });
  
      const data = await res.json();
      const citiesData = data.data.map((item) => ({
        itemUA: item.Description,
        itemEN: item.DescriptionTranslit,
      }));
      console.log(citiesData)
      return citiesData;
    } catch (error) {
      console.log(error);
      throw error; // Обробляйте помилки або прокидайте їх далі для обробки на рівні вище
    }
};

export const fetchDep = async (city, id) => {
    try {
      const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST', // Важливо вказати метод POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: '84fed10c9c1ce634e13f6136681b369a',
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName : city,
            WarehouseId : id
          },
        }),
      });
  
      const data = await res.json();
      const depsData = data.data.map((item) => ({
        itemUA: item.Description,
        itemEN: item.Description,
      }));
      // console.log(depsData)
      return depsData;
    } catch (error) {
      console.log(error);
      throw error; // Обробляйте помилки або прокидайте їх далі для обробки на рівні вище
    }
};