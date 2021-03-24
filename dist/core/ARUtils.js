export function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
export function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
export function isIOS() {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
export function getConfig(configData, data) {
    fetch(configData)
        .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
        .then((response) => {
        console.log(response);
        data = response;
        console.log(data);
        return (response);
    })
        .catch(function (error) {
        console.error(error);
        return Promise.reject(false);
    });
    return true;
}
export function getConfig2(configData, callback) {
    fetch(configData)
        .then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
        .then((response) => {
        console.log(response);
        callback(response);
    })
        .catch(function (error) {
        console.error(error);
        return Promise.reject(false);
    });
    return true;
}
export function getConfig3(configData) {
    fetch(configData)
        .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
        .then((response) => {
        console.log(response);
        const eventData = new CustomEvent('getConfig', { detail: { config: response } });
        document.dispatchEvent(eventData);
        return (response);
    })
        .catch(function (error) {
        console.error(error);
        return Promise.reject(false);
    });
    return true;
}
//# sourceMappingURL=ARUtils.js.map