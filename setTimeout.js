function someCall() {
  let promises = []
  promises.push(getPlatform)
  promises.push(getRegion)
  promises.push(getLanguage)
  promises.push(getConfirmButton)
  promises.push(getCountryCode)

  Promise.all(promises).then((response) => {
    console.log('dllApiComplete : ' + response)
    // this.getInfo()
  }, (error) => {
    // router.push('/storeError')
  }).catch((error) => {
    // router.push('/storeError')
  });
}

const a = () => new Promise((resolve, reject) => {
  
});
