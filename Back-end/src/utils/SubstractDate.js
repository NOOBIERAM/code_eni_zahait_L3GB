module.exports = {
    date : async () => {
        const oneDay = 86400000
        const today = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(new Date())
          }, 500)
        })
        const yyyy = today.getFullYear().toString()
        const mm = (today.getMonth() + 1).toString().padStart(2, "0")
        const dd = today.getDate().toString().padStart(2, "0")
        const fullDate = `${yyyy}-${mm}-${dd}` 

        let date = new Date(fullDate)

        let RealDate = []
        for (let index = 0; index < 10; index++) {
            RealDate[index] = date.toISOString()
            let newDate = new Date(date - oneDay) 
            date = new Date(newDate)
        }

        return RealDate
    },
    takeDate : async () => {
      const today = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(new Date());
        }, 500);
      });
      const yyyy = today.getFullYear().toString();
      const mm = (today.getMonth() + 1).toString().padStart(2, "0");
      const dd = today.getDate().toString().padStart(2, "0");
      const fullDate = `${yyyy}-${mm}-${dd}T00:00:00.000Z`; 
      return fullDate;
  }
  
}