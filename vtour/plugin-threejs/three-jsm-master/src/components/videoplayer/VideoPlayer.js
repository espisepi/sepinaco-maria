
        class VideoPlayer {
            constructor(videoSrc, width = 640, height = 360) {
                this.videoSrc = videoSrc;
                this.width = width;
                this.height = height;
                this.init();
            }

            init() {
                this.addStyles();
                this.createVideoContainer();
            }

            addStyles() {
                const style = document.createElement('style');
                style.textContent = `
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        background-color: #f0f0f0;
                    }
                    .video-container {
                        text-align: center;
                    }
                    video {
                        display: block;
                        margin: 0 auto;
                    }
                    .controls {
                        margin-top: 10px;
                    }
                    button {
                        padding: 10px 20px;
                        margin: 5px;
                        cursor: pointer;
                    }
                `;
                document.head.appendChild(style);
            }

            createVideoContainer() {
                const videoContainer = document.createElement('div');
                videoContainer.className = 'video-container';

                const video = document.createElement('video');
                video.id = 'myVideo';
                video.width = this.width;
                video.height = this.height;
                video.controls = true;

                const source = document.createElement('source');
                source.src = this.videoSrc;
                source.type = 'video/mp4';
                video.appendChild(source);
                videoContainer.appendChild(video);

                const controls = this.createControls(video);
                videoContainer.appendChild(controls);

                document.body.appendChild(videoContainer);
            }

            createControls(video) {
                const controls = document.createElement('div');
                controls.className = 'controls';

                const playButton = document.createElement('button');
                playButton.textContent = 'Play';
                playButton.onclick = () => video.play();
                controls.appendChild(playButton);

                const pauseButton = document.createElement('button');
                pauseButton.textContent = 'Pause';
                pauseButton.onclick = () => video.pause();
                controls.appendChild(pauseButton);

                const stopButton = document.createElement('button');
                stopButton.textContent = 'Stop';
                stopButton.onclick = () => {
                    video.pause();
                    video.currentTime = 0;
                };
                controls.appendChild(stopButton);

                return controls;
            }
        }

        // Inicializa el reproductor de video con el archivo de video 'video.mp4'
        {/* new VideoPlayer('video.mp4'); */}
