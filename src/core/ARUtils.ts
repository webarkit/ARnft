export function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

export function isMobile(): boolean {
    //return /Android|mobile|iPad|iPhone/i.test(navigator.userAgent)
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        return true;
    }
    return false;
}
export function isIOS(): boolean {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // true for mobile device
        return true;
    }
    return false;
}

export function getConfig(configData: string, data: object): boolean {
 fetch(configData)
  .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then((response) => {
      // printing the response only for testing
      console.log(response);
      data = response;
    })
    .catch(function(error) {
        console.error(error);
        return Promise.reject(false);
      });
  return true;
}
