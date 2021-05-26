export default class Container {
    static createContainer(configData) {
        if (configData.container.create) {
            const container = document.createElement('div');
            container.id = 'app';
            const canvas = document.createElement('canvas');
            canvas.id = 'canvas';
            const video = document.createElement('video');
            video.id = 'video';
            video.setAttribute('autoplay', '');
            video.setAttribute('muted', '');
            video.setAttribute('playsinline', '');
            container.appendChild(video);
            container.appendChild(canvas);
            const loading = document.getElementById('loading');
            document.body.insertBefore(container, loading);
            var containerEvent = new Event('containerEvent');
            document.dispatchEvent(containerEvent);
            return { container: container, canvas: canvas, video: video };
        }
        else {
            const container = document.getElementById(configData.container.containerName);
            const canvas = document.getElementById(configData.container.canvasName);
            var containerEvent = new Event('containerEvent');
            document.dispatchEvent(containerEvent);
            return { container: container, canvas: canvas };
        }
    }
    static createStats(create, configData) {
        if (create && configData.stats.createHtml) {
            const stats = document.createElement('div');
            stats.id = 'stats';
            stats.className = 'ui stats';
            const stats1 = document.createElement('div');
            stats1.id = 'stats1';
            stats1.className = 'stats-item';
            const stats1p = document.createElement('p');
            stats1p.className = 'stats-item-title';
            stats1p.innerText = 'Main';
            stats1.appendChild(stats1p);
            stats.appendChild(stats1);
            const stats2 = document.createElement('div');
            stats2.id = 'stats2';
            stats2.className = 'stats-item';
            const stats2p = document.createElement('p');
            stats2p.className = 'stats-item-title';
            stats2p.innerText = 'Worker';
            stats2.appendChild(stats2p);
            stats.appendChild(stats2);
            const loading = document.getElementById('loading');
            document.body.insertBefore(stats, loading);
        }
    }
    static createLoading(configData) {
        if (configData.loading.create) {
            const loader = document.createElement('div');
            loader.id = 'loading';
            const logo = document.createElement('img');
            logo.src = configData.loading.logo.src;
            logo.alt = configData.loading.logo.alt;
            const loadingMessage = document.createElement('span');
            loadingMessage.setAttribute('class', 'loading-text');
            loadingMessage.innerText = configData.loading.loadingMessage;
            loader.appendChild(logo);
            loader.appendChild(loadingMessage);
            document.body.insertBefore(loader, document.body.firstChild);
        }
    }
}
//# sourceMappingURL=Container.js.map