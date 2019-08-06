const storageHelper = {
    save: (key, value) => {
      localStorage.setItem(key, value);
    },
    getValue: (key) => localStorage.getItem(key)
   }
   export default storageHelper