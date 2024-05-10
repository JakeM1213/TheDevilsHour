window.onload = function() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var bodyElement = document.querySelector('body');
    var countdownElement = document.getElementById('countdown');
    var targetHour = 3;
    var storedTargetTime = localStorage.getItem('targetTime');
    
    if (storedTargetTime) {
        var storedTime = new Date(storedTargetTime);
        if (currentDate.getDate() === storedTime.getDate() && currentDate < storedTime) {
            var remainingMilliseconds = storedTime - currentDate;
            startCountdown(remainingMilliseconds, countdownElement);
            return;
        }
    }

    var targetTime = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        targetHour,
        0,
        0
    );

    if (currentDate >= targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    localStorage.setItem('targetTime', targetTime);

    if (currentHour >= 3 && currentHour < 4) {
        document.querySelector('.video-container').style.display = 'none';
        countdownElement.style.display = 'none';
        createGibberishText();
        pulsateBackground(bodyElement);
        bodyElement.classList.add('devil');
    } else {
        bodyElement.classList.add('day');
        var remainingMilliseconds = targetTime - currentDate;
        startCountdown(remainingMilliseconds, countdownElement);
    }
};

function createGibberishText() {
    var gibberishContainerLeft = document.createElement('div');
    gibberishContainerLeft.classList.add('gibberish-container-center-left');
    var gibberishContainerRight = document.createElement('div');
    gibberishContainerRight.classList.add('gibberish-container-center-right');
    
    var gibberishLeft = document.createElement('div');
    gibberishLeft.classList.add('gibberish-center-left');
    
    var gibberishRight = document.createElement('div');
    gibberishRight.classList.add('gibberish-center-right');
    
    gibberishContainerLeft.appendChild(gibberishLeft);
    gibberishContainerRight.appendChild(gibberishRight);
    
    document.body.appendChild(gibberishContainerLeft);
    document.body.appendChild(gibberishContainerRight);

    setInterval(function() {
        gibberishLeft.innerText = generateGibberish();
        gibberishRight.innerText = generateGibberish();
    }, 50);
}

function generateGibberish() {
    var gibberishWords = [
        "Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur",
        "adipiscing", "elit.", "Sed", "do", "eiusmod", "tempor",
        "incididunt", "ut", "labore", "et", "dolore", "magna",
        "aliqua.", "Ut", "enim", "ad", "minim", "veniam,", "quis",
        "nostrud", "exercitation", "ullamco", "laboris", "nisi",
        "ut", "aliquip", "ex", "ea", "commodo", "consequat", "203928402948", "It draw my stret, th It drated", " It frood th I draw my same be stret, the end and they same it's in th the in the goot froot from which the rom whis se engthich I draws bot drated."
    ];

    var gibberish = "";
    for (var i = 0; i < 20; i++) {
        gibberish += gibberishWords[Math.floor(Math.random() * gibberishWords.length)] + " ";
    }
    return gibberish;
}

function pulsateBackground(element) {
    var isBlack = true;
    setInterval(function() {
        if (isBlack) {
            element.style.backgroundColor = '#8b0000';
        } else {
            element.style.backgroundColor = '#000';
        }
        isBlack = !isBlack;
    }, 1000);
}

function startCountdown(remainingMilliseconds, countdownElement) {
    var countdownInterval = setInterval(function() {
        remainingMilliseconds -= 1000;
        if (remainingMilliseconds <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "It's 3 AM!";
        } else {
            var hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
            var minutes = Math.floor((remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);

            var countdownString = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
            countdownElement.innerHTML = countdownString;
        }
    }, 1000);
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
    window.onload = function() {
        var currentDate = new Date();
        var currentHour = currentDate.getHours();
        var bodyElement = document.querySelector('body');
        var countdownElement = document.getElementById('countdown');
        var targetHour = 3;
        var storedTargetTime = localStorage.getItem('targetTime');
        
        if (storedTargetTime) {
            var storedTime = new Date(storedTargetTime);
            if (currentDate.getDate() === storedTime.getDate() && currentDate < storedTime) {
                var remainingMilliseconds = storedTime - currentDate;
                startCountdown(remainingMilliseconds, countdownElement);
                return;
            }
        }
    
        var targetTime = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            targetHour,
            0,
            0
        );
    
        if (currentDate >= targetTime) {
            targetTime.setDate(targetTime.getDate() + 1);
        }
    
        localStorage.setItem('targetTime', targetTime);
    
        if (currentHour >= 3 && currentHour < 4) {
            document.querySelector('.video-container').style.display = 'none';
            countdownElement.style.display = 'none';
            createGibberishText();
            pulsateBackground(bodyElement);
            bodyElement.classList.add('devil');
        } else {
            bodyElement.classList.add('day');
            var remainingMilliseconds = targetTime - currentDate;
            startCountdown(remainingMilliseconds, countdownElement);
        }
    };
    
    function createGibberishText() {
        var eyeContainer = document.querySelector('.eye-container');
        
        var leftEye = document.createElement('div');
        leftEye.classList.add('eye', 'left-eye');
        
        var rightEye = document.createElement('div');
        rightEye.classList.add('eye', 'right-eye');
        
        eyeContainer.appendChild(leftEye);
        eyeContainer.appendChild(rightEye);
    
        setInterval(function() {
            // Eye animation logic here
        }, 50);
    }
    
    function startCountdown(remainingMilliseconds, countdownElement) {
        var countdownInterval = setInterval(function() {
            remainingMilliseconds -= 1000;
            if (remainingMilliseconds <= 0) {
                clearInterval(countdownInterval);
                countdownElement.innerHTML = "It's 3 AM!";
            } else {
                var hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
                var minutes = Math.floor((remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);
    
                var countdownString = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
                countdownElement.innerHTML = countdownString;
            }
        }, 1000);
    }
    
    function padZero(number) {
        return (number < 10 ? '0' : '') + number;
    }
    
}
