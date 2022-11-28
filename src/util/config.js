export const config = (window.localStorage.getItem("token")!=="")?{
    headers: {
        'Content-type': 'application/json',
        //'Authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("token"))
      }
}:"";