export default (value) => {
    const date = new Date(value)
    //  return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})
     return date.toLocaleString(['ja-JP'], {month: 'short', day: '2-digit', year: 'numeric'})
    // return date.toLocaleString("ja-JP",{hour12:false})
    // return date.toLocaleString("ja-JP-u-ca-japanese")
  }
  