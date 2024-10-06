document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.getElementById('lyrics-list');
    const buttonContainer = document.querySelectorAll('.buttons-container span');
    const playBtn = buttonContainer[0];
    const songOption = buttonContainer[1];
    const songoverlay = document.querySelector('.songlist-overlay');
    const closeOverlay = document.querySelector('.song-close');
    const progressTruck = document.querySelector('.progress-truck');


    let currentSong = null;
    let currentLyrics = null;
    let currentLyricsIndex = 0; // Track the current lyric line
    let lastLyricIndex = -1;
    

    const songs  = ['Audio (1).mp3', 'Audio (2).mp3', 'Audio (3).mp3', 'Audio (4).mp3'];
    const images = [
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        'img5.jpg',
        'img6.jpg',
        'img7.jpg',
        'img8.jpg',
        'img9.jpg',
        'img10.jpg',
        'img11.jpg',
        'img12.jpg',
        'img13.jpg',
        'img14.jpg',
        'img15.jpg',
        'img16.jpg',
        'img17.jpg',
        'img18.jpg',
        'img19.jpg',
        'img20.jpg',
        'img21.jpg',
        'img22.jpg',
        'img23.jpg',
        'img24.jpg',
        'img25.jpg',
    ];

    const animations = ['anim-fade-in', 'anim-slide-in', 'anim-zoom-in', 'anim-wobble-left', 'anim-wobble-right', 'anim-wobble-top', 'anim-shake-top', 'anim-roll-bottom', 'anim-roll-top', 'anim-fade-backward', 'anim-slide-right', 'anim-scale-forward'];

    const lyrics4 = [   {text: "Bruz Lily - Strongest" , start:0, end:6},
                        {text:'You sit there with that look on your face like you won', start:7, end:11},
                        {text:'Like nothing that I say is gonna change how you feel now', start:12, end:15},
                        {text:'You sit there and you tell me you fell outta love',start:18, end:21},
                        {text:'And we are in your way so you just gotta leave now', start:23, end:26},
                        {text:'And we just need to understand your reasons', start:27, end:29},
                        {text:'And you are gonna justify this treason', start:30, end:32},
                        {text:'By telling me the promises that we sworn ain\'t enough (ain\'t enough)', start:33, end:36},
                        {text:'So now you gonna be another person?', start:37, end:40},
                        {text:'And how do I explain this shit to our son?', start: 41, end:42},
                        {text:'How\'d you tell a toddler about a girlfriend? Daddy\'s gone', start:43, end:46},
                        {text:'Well, I will be the strongest that he ever knew', start:48, end:52},
                        {text:'And I will be there when he needs a love strong enough', start:53, end:58},
                        {text:'Don\'t worry, I will carry your share for us', start: 59, end:61},
                        {text:'No matter how bad the storm', start:61, end:63},
                        {text:'I will be strongest that he ever knew', start:64, end:67},
                        {text:'And we\'ll leave you alone', start:68, end:70},
                        {text:"Bruz Lily", start:71, end:80},
                        {text:' You sit there with your phone in your hands and you\'re hurt', start:81, end:84},
                        {text:'You tell me that you feel like you lost me when he came', start:86, end:89},
                        {text:'I\'m sorry, but I cannot connect with your words', start:91, end:94},
                        {text:'Cause right now what matters isn\'t yours but it\'s his name', start:96 , end:99 },
                        {text:'And we just need to find another income', start: 100, end: 102},
                        {text:'Cause she wants you to help her with her own one', start:103 , end:105 },
                        {text:'And you want me to tell me that what you\'ve done is okay (is okay)', start:106 , end:109 },
                        {text:'So now you gonna be another father?', start: 110, end:112 },
                        {text:'And I will be a different kind of mother?', start:113, end: 114},
                        {text:'And how you\'d tell a toddler bout step-brothers? Daddys strayed',start:115 , end:120 },
                        {text:'Well, I will be the strongest that he ever knew',start: 122 , end:125 },
                        {text:'And I will be there when he needs a love strong enough',start:126 , end:131 },
                        {text:'Don\'t worry, I will carry your share for us',start:132 , end:134 },
                        {text:'No matter how bad the storm', start:135 , end:137 },
                        {text:'I will be strongest that he ever knew', start:138 , end:140 },
                        {text:'And we\'ll leave you alone', start:141 , end:143 },
                        {text:'Let\'s talk about family', start:152 , end:153 },
                        {text:'Let\'s talk about family', start:154 , end:156 },
                        {text:'Let\'s talk of the ties and the lies', start:157 , end:158 },
                        {text:'And the love that we had in this family', start:159 , end:161 },
                        {text:'Let\'s talk about honesty', start:162 , end:164 },
                        {text:'You know nothing about honesty', start:165 , end:167 },
                        {text:'Let go of your hands and our plans', start:168 , end:169 },
                        {text:'And the chance that we had with this family', start:170 , end:173 },
                        {text:'Well, I will be the strongest that he ever knew', start: 174 , end:177 },
                        {text:'And I will be there when he needs a love strong enough' , start:178 , end:183 },
                        {text:'Don\'t worry, I will carry your share for us', start:184 , end: 187},
                        {text:'No matter how bad the storm', start: 188, end:189 },
                        {text:'I will be strongest that he ever knew', start:190 , end:192 },
                        {text:'And we\'ll leave you alone', start:193 , end:194 },
                        {text:'Oh, na-na, we\'ll leave you alone', start: 198, end:200 },
                        {text:'We\'ll leave you alone', start:203 , end:205 },
                    ];
    
    const lyrics1 = [   {text: 'Bruz Lily', start:0, end:6},
                        {text:'You never wrapped your arms around me in the night', start:7, end:10},
                        {text:'But I can feel them', start: 11, end: 14},
                        {text:'I\'ve never looked across the room and caught your eyes', start:15, end:18},
                        {text:'But I can see them', start: 19, end:20},
                        {text:'Somewhere out there in the pouring rain', start:21, end:23},
                        {text:'Wondering if I feel the same', start:24, end:26},
                        {text:'No, I don\'t even know your name yet', start:27, end:31},
                        {text:'But every time I fall, fall, and fall again', start:32, end:37},
                        {text:'I\'m just getting one step closer to you, and in the end', start:38, end:44},
                        {text:'I know that we\'ll find each other there', start: 45, end:48},
                        {text:'And even though it seems so far', start: 49, end:51},
                        {text:'I\'m getting close each time I fall, fall, and fall again (fall again)', start: 52, end:58},
                        {text:'And I\'ll meet you in the end', start:59, end:63},
                        {text: 'Bruz Lily', start:64, end:66},
                        {text:'In the end', start:67, end:70},
                        {text: "Bruz Lily", start:71, end:72},
                        {text:'And I\'ll meet you in the end', start:73, end:76},
                        {text: "Bruz Lily", start:77, end:80},
                        {text:'In the end', start:81, end:83},
                        {text: "Bruz Lily", start:84, end:86},
                        {text:'And I\'ll meet you', start:87, end:89},
                        {text:'You never whispered little nothings in the dark',start:90, end:93},
                        {text:'But I can hear them', start:94, end:96},
                        {text:'I\'ve never held you so damn close, I feel your heart', start:97, end:99},
                        {text:'But I know it\'s beating', start:100, end:101},
                        {text:'Somewhere out there in the pouring rain', start:102, end:105},
                        {text:'Wondering if I feel the same', start:106, end:109},
                        {text:'No, I don\'t even know your name yet', start:110,end:113},
                        {text:'But every time I fall, fall, and fall again', start:114, end:119},
                        {text:'I\'m just getting one step closer to you, and in the end', start:120, end:126},
                        {text:'I know that we\'ll find each other there', start:127, end:130},
                        {text:'And even though it seems so far', start:131, end:133},
                        {text:'I\'m getting close each time I fall, fall, and fall again', start:134, end:140},
                        {text:'And I\'ll meet you in the end, in the end, in the end', start:141, end:147},
                        {text:'I\'ll meet you in the end, in the end, in the end', start:148, end:154},
                        {text:'I\'ll meet you in the end', start:155, end:158},
                        {text: 'Bruz Lily', start:159, end:163},
                        {text:'In the end', start:164, end: 166},
                        {text:'I\'ll meet you in the end', start:168, end:174},
                        {text:'I\'ll meet you in the end' ,start:176 , end:181},
                        {text:'I\'ll meet you in the end', start:182, end: 187},
                        {text: 'Bruz Lily', start:189, end:224}
                    ];

    const lyrics2 = [
                        {text:'Bruz Lily Lost control', start:0, end:6},
                        {text:'Hmm, yea', start:7, end:10},
                        {text:'Mirrors they never lie',start:11, end:12},
                        {text:'Don\'t see myself inside', start:13, end:15},
                        {text:'Why can\'t I get it right?', start:16, end:17},
                        {text:'I don\'t know', start:18, end:20},
                        {text:'You\'re always watching me fall',start:21, end:22},
                        {text:'Shadows they like my wall', start:23, end:25},
                        {text:'Why do I feel so small?',start:26, end:28},
                        {text:'I don\'t know',start:29, end:30},
                        {text:'So I walk into the dead of night', start:31, end:34},
                        {text:'Where my monsters like to hide', start:35, end:36},
                        {text:'Chaos feels so good inside', start:36, end:38},
                        {text:'Now I know',start:39, end:41},
                        {text:'I\'ve lost, I\'ve lost', start:42, end:43},
                        {text:'I\'ve lost control again', start:44 ,end:45},
                        {text:'Always do the same and I\'m to blame', start:46, end:48},
                        {text:'I\'ve lost control again', start:49, end:51},
                        {text:'I don\'t, I don\'t', start:52, end: 54},
                        {text:'I don\'t know who I am', start:55, end:56},
                        {text:'Always do the same and I\'m to blame', start:57, end:59},
                        {text:'I\'ve lost control again', start:60, end:62},
                        {text:'Bruz Lily', start:63, end:83},
                        {text:'Tired of being afraid', start:84, end:85},
                        {text:'But lately, I lost my faith', start: 86, end:88},
                        {text:'What is love without pain',start:89, end:90},
                        {text:'It ain\'t home',start:91, end:93},
                        {text:'You\'re watching me but I\'m below', start:94, end:95},
                        {text:'When I get caught I hope', start:96, end:98},
                        {text:'It\'s the kind of blackout that will', start:99, end: 100},
                        {text:'Take me home', start:101, end: 103},
                        {text:'So I walk into the dead of night', start:104, end: 106},
                        {text:'Where my monsters like to hide', start:107, end:109},
                        {text:'Chaos feels so good inside', start:110, end:111},
                        {text:'Now I know', start:112, end:114},
                        {text:'I\'ve lost, I\'ve lost', start: 115, end:117 },
                        {text:'I\'ve lost control again', start:118 , end : 119},
                        {text:'Always do the same and I\'m to blame',start:120 , end:122 },
                        {text:'I\'ve lost control again',start:123 , end:124 },
                        {text:'I don\'t, I don\'t',start:125 , end:126 },
                        {text:'I don\'t know who I am',start:127 , end:129 },
                        {text:'Always do the same and I\'m to blame',start:130 , end:133 },
                        {text:'I\'ve lost control again',start:134 , end:136 },
                        {text:'Bruz Lily', start:137, end:155},
                        {text:'I know that I\'m a mess',start:156 , end:157 },
                        {text:'But I ain\'t trying to be the best',start:158 , end:161 },
                        {text:'So, whatever\'s coming next',start:162 , end:163 },
                        {text:'I better pray',start:164 , end:166 },
                        {text:'Never said I was an angel',start:167 , end:168 },
                        {text:'I am damaged all the way',start:169 , end:171 },
                        {text:'So whatever\'s coming next',start:172 , end:173 },
                        {text:'Start better pray',start:174 , end:176 },
                        {text:'I\'ve lost, I\'ve lost',start:177 , end:179 },
                        {text:'I\'ve lost control again',start:180 , end:182 },
                       {text:'Always do the same and I\'m to blame',start:183 , end:185 },
                        {text:'I\'ve lost control again',start:186 , end:187 },
                        {text:'I don\'t, I don\'t',start:188 , end:190 },
                        {text:'I don\'t know who I am',start:191 , end:192 },
                        {text: 'Always do the same and I\'m to blame', start:193, end:195},
                        {text:'I\'ve lost control again', start:196, end: 199},
                        {text:'Bruz Lily', start:200, end:222},
    ];
    const lyrics3 = [
                        {text:'Bruz Lily', start:0, end:7},
                        {text:'Umm', start:8, end: 9},
                        {text:'Yeah, yeah ', start: 10, end: 14},
                        {text:'Yeah, yeah ', start: 15, end: 17},
                        {text:'Do you think you could try and (try and)', start: 18, end: 21},
                        {text:'Tell me what\'s got you hiding? (What\'s got you hiding?)', start: 22, end: 24},
                        {text:'What\'s all on your mind when you can\'t sleep', start: 25, end: 29},
                        {text:'I can see that you\'re holding (you\'re holding)', start: 30, end: 33},
                        {text:'Holding back and not showing (not showing)', start: 34, end: 36},
                        {text:'What\'s all on your mind when you\'re with me', start: 37, end: 40},
                        {text:' I just wanna tell you now (tell you now)', start: 41, end: 43},
                        {text:'I would never let you down (let you down)', start: 44, end: 46},
                        {text:'If you feel like you\'re falling to the ground (falling to the ground)', start: 47, end: 52},
                        {text:'You don\'t wanna take that chance (take that chance)', start: 53, end: 55},
                        {text:'Thinkin\' I won\'t understand (understand)', start: 56, end: 58},
                        {text:'But honestly, I promise you I can (promise you I can)', start: 59, end: 65},
                        {text:'Take my hand',start: 67, end: 69},
                        {text:'Believe me when I say',start: 70, end: 72},
                        {text:'I\'m here for you always (here for you always)',start: 73, end: 78},
                        {text:'Take my hand',start: 79, end: 81},
                        {text:'And everything could change',start: 82, end: 84},
                        {text:'But one thing stays the same',start: 85, end: 87},
                        {text:'I\'m here for you always',start: 88, end: 91},
                        {text:'Bruz Lily', start:92, end:99},
                        {text:'I\'m here for you always',start: 100, end: 103},
                        {text:'Bruz Lily', start:104, end:110},
                        {text:'I just wanna tell you', start:111, end:112},
                        {text:'I\'m here for you always',start: 113, end: 116},
                        {text:'Bruz Lily', start:117, end:120},
                        {text:'Hear the waves of the ocean',start: 121, end: 123},
                        {text:'They will never stop flowing',start: 124, end: 126},
                        {text:'It helps when you feel uncertainty',start: 127, end: 130},
                        {text:'I just wanna tell you now (tell you now)',start: 130, end: 133},
                        {text:'I would never let you down (let you down)',start: 134, end: 136},
                        {text:'If you feel like you\'re falling to the ground (falling to the ground)',start: 137, end: 143},
                        {text:'Take my hand (take my hand)',start: 144, end: 146},
                        {text:'Believe me when I say',start: 147, end: 150},
                        {text:'I\'m here for you always (here for you always)',start: 151, end: 155},
                        {text:'Take my hand (take my hand)',start: 157, end: 159},
                        {text:'And everything could change',start: 160, end: 162},
                        {text:'But one thing stays the same',start: 163, end: 165},
                        {text:'I\'m here for you always',start: 166, end: 170},
                        {text:'Bruz Lily', start:171, end:177},
                        {text:'I\'m here for you always',start: 178, end: 180},
                        {text:'I\'m here for you always',start: 184, end: 187},
                        {text:'I just wanna tell you',start: 195, end: 196},
                        {text:'I\'m here for you always',start: 197, end: 199},
                        {text:'Take my hand',start: 200, end: 201},
                        {text:' Believe me when I say',start: 202, end: 203},
                        {text:'I\'m here for you always',start: 204, end: 205},
                            ];

    function createImageSlide (image, index, lyrics) {

        slideshowContainer.innerHTML = '';

        const newList  = document.createElement('li');

        const imageContaner = document.createElement('div');
        imageContaner.classList.add('image-container');
        imageContaner.innerHTML = ` <img src="${image}" alt="${index + 1}">`;
        newList.appendChild(imageContaner);

        const lyricsContainer = document.createElement('div');
        lyricsContainer.classList.add('lyrics-container');
        lyricsContainer.innerHTML = `<p>${lyrics}</p>`;
        newList.appendChild(lyricsContainer);

        // Apply a random animation class
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        newList.classList.add(randomAnimation);

        slideshowContainer.appendChild(newList);
    }

    

    // Function to update the lyrics and image based on current song time
    function updateLyricsAndImage(currentTime) {
        // Only update if there are lyrics for the current song
        if (currentLyrics && currentLyricsIndex < currentLyrics.length) {
            const currentLyric = currentLyrics[currentLyricsIndex];

            // Check if current time is within the start and end time of the current lyric
            if (currentTime >= currentLyric.start && currentTime <= currentLyric.end) {
                // Only update if the lyric index has changed
                if (currentLyricsIndex !== lastLyricIndex) {
                    // Use modulo to loop back to the beginning of the images array if needed
                    const imageIndex = currentLyricsIndex % images.length;

                    // Update the image and lyric display
                    createImageSlide(images[imageIndex], currentLyricsIndex, currentLyric.text);

                    // Update the last lyric index
                    lastLyricIndex = currentLyricsIndex;
                }
            }

            // Move to the next lyric if the current time has passed the end of the current lyric
            if (currentTime > currentLyric.end) {
                currentLyricsIndex++;
            }
        }
    }

    
    

    songOption.addEventListener('click', () => {
        songoverlay.classList.add('active');
    });

    closeOverlay.onclick = () => {
        songoverlay.classList.remove('active');
    }

    songs.forEach((song, index) => {
        const newLi = document.createElement('li');
        newLi.textContent = song.replace('.mp3', '');

        newLi.addEventListener('click', () => {
            songoverlay.classList.remove('active');
            const audio = new Audio(song);
        
            slideshowContainer.innerHTML = '';
            currentLyricsIndex = 0; // Reset the lyrics index
            lastLyricIndex = -1; // Reset the last lyric index
        
            // Use switch statement to set the appropriate lyrics based on the song index
            switch (index) {
                case 0:
                    currentLyrics = lyrics1; // Set the lyrics to lyrics1 for this song
                    break;
                case 1:
                    currentLyrics = lyrics2; // Set the lyrics to lyrics2 for this song
                    break;
                case 2:
                    currentLyrics = lyrics3; // Set the lyrics to lyrics3 for this song
                    break;
                case 3:
                    currentLyrics = lyrics4; // Set the lyrics to lyrics4 for this song
                    break;
                default:
                    currentLyrics = null; // No lyrics for other songs (or add other lyrics if needed)
                    break;
            }
        
            playsong(audio);
        });        
        document.querySelector('#songList').appendChild(newLi);
    });

    function playsong(audio) {
        if(currentSong && currentSong !== audio ) {
            currentSong.pause();
        }

        if (currentSong && !currentSong.paused) {
            currentSong.pause();
            updatePlayBtn(false);
            return; // Exit the function if the current song is paused
        }

        currentSong = audio;

        currentSong.play();
        updatePlayBtn(true);


        currentSong.addEventListener('timeupdate', () => {
            const percent = (currentSong.currentTime / currentSong.duration) * 100;

            document.querySelector('.progress-bar').style.width = `${percent}%`;

            updateLyricsAndImage(currentSong.currentTime);
        });

        currentSong.addEventListener('ended', () => {
            updatePlayBtn(false);
            currentLyricsIndex = 0; // Reset the lyrics index
            lastLyricIndex = -1; // Reset the last lyric index                       
        })
    }

    function updatePlayBtn(state) {
        playBtn.innerHTML =  state ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }

    playBtn.onclick = () => {
        if(currentSong) {
            playsong(currentSong);

        }
        else{
            songoverlay.classList.add('active');
        }
    }

    progressTruck.onclick = (e) => {
        const width = progressTruck.clientWidth;
        const clickX = e.offsetX;
    
        const duration = currentSong.duration;
    
        if (currentSong) {
            // Update the song's current time based on the click position
            const newTime = (clickX / width) * duration;
            currentSong.currentTime = newTime;
    
            // Adjust the currentLyricsIndex based on the new time
            resetLyricsIndex(newTime);
    
            // Update the lyrics and image based on the new current time
            updateLyricsAndImage(newTime);
        }
    };

    // Function to reset the lyrics index based on the current time
    function resetLyricsIndex(currentTime) {
        // Reset the currentLyricsIndex to the appropriate position
        currentLyricsIndex = 0;
        lastLyricIndex = -1; // Reset the last lyric index

        // Loop through the lyrics to find the correct index based on the current time
        for (let i = 0; i < currentLyrics.length; i++) {
            if (currentTime >= currentLyrics[i].start && currentTime <= currentLyrics[i].end) {
                currentLyricsIndex = i;  // Set the currentLyricsIndex to the correct position
                break;
            }
        }
    }
});
