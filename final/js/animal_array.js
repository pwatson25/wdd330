// let newArray = [];
// var result = [{}];
// for (var i = 0; i < newArray.length; i++) {
//     result[newArray[i].img] = newArray[i].img;
// }

// const fetchAll = async (urls) => {
//     const res = await Promise.all(urls.map(u => fetch(u)))
//     const jsons = await Promise.all(res.map(r => r.json()))

//     console.log(jsons);


//     for (let i = 0; i < jsons.length; i++) {
//         for (let j = 0; j < 2; j++) {
//           // newArray[i] = {'name': jsons[i].hits[j].tags, 'img': jsons[i].hits[j].previewURL};
//             newArray.push({
//                 'img': jsons[i].hits[j].previewURL
//             });
//         }
//     }
// }



// const urls = [
//     'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=cats&per_page=3',
//     'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=dogs&per_page=3',
//     'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=horse&per_page=3',
//     'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=bird&per_page=3',
//     'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=foxes&per_page=3',
// ]
// fetchAll(urls);

// export {
//     newArray
// };


export default class ApiHelper {
  async apiRequest(url) {
    const response = await fetch(url);
    const data = await response.json();

    if(!response.ok) {
      console.log("Error: " + response);
    } else {
      return data;
    }
    return data;
  }
}